import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, ReactNode, useReducer } from 'react'
import { Product } from '../entities/Product';

type State = {
  products: Product[],
  tablesNum: number,
  tables: number[]
};


export type Action =
    | { type: "addProduct" ; payload: Product }
    | { type: "deleteProduct" ; payload: Product }
    | { type: "changeTables" ; payload: number}
    | { type: "addTable" ; payload: number}
    | { type: "removeTable" ; payload: number}

const initialState: State = {
    products: [],
    tablesNum: 1,
    tables: [1]
};

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "addProduct":
            return { ...state, products: [...state.products, action.payload]};
        case "deleteProduct":
            return { ...state, products: state.products.filter((item) => item.description != action.payload.description)};
        case "changeTables":
            return { ...state, tablesNum: action.payload};
        case "addTable":
            return { ...state, tables: [...state.tables, action.payload]};
        case "removeTable":
            return { ...state, tables: state.tables.filter((item) => item != action.payload)};
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