import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useReducer } from 'react'
import { Product } from '../entities/Product';

type State = {
  products: Product[],
  tables: number
};


export type Action =
    | { type: "addProduct" ; payload: Product }
    | { type: "deleteProduct" ; payload: Product }
    | { type: "changeTables" ; payload: number}

const initialState: State = {
    products: [],
    tables: 1
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addProduct":
            return { ...state, products: [...state.products, action.payload]};
        case "deleteProduct":
            return { ...state, products: state.products.filter((item) => item.description != action.payload.description)};
        case "changeTables":
            return { ...state, tables: action.payload};
    }
}

type AppContextProps = {
  state: State;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};