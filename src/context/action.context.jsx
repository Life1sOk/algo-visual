import React, { createContext, useState } from "react";

export const ActionContext = createContext({
    array: null,
});

export const ActionContextProvider = ({ children }) => {
    const [array, setArray] = useState();
    const value = { array, setArray }

    return <ActionContext.Provider value={value}>{children}</ActionContext.Provider>
}