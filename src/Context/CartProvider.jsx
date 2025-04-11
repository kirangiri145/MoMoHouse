import { createContext, useReducer } from "react";
import React from "react";
export const CartContext = createContext();

const initialState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      const isExisting = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExisting) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        return {
          items: [...state.items, newProduct],
        };
      }
    }

    case "RemoveFromCart": {

       const newProduct = state.items.filter((item) => {
        return item.id !== action.payload
      });
      return {
        items: newProduct,
      };
    }

    case "Increment": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        items: newProduct,
      };
    }

    case "Decrement": {
      const newProduct = state.items.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        items: newProduct,
      };
    }

    case "ClearCart": {
      return {
        items:[],
      };
    }

    default: {
      return state;
    }
  }
};
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
