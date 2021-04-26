import { createContext, useState, ReactNode, useContext } from 'react';

type HeaderContextData = {
    isNightMode: boolean;
    toggleNightMode: () => void;
}

export const HeaderContext = createContext({} as HeaderContextData);

type HeaderContextProviderProps = {
    children: ReactNode;
}

export function HeaderContextProvider({ children }: HeaderContextProviderProps) {
    const [isNightMode, setIsNightMode] = useState(false);

    function toggleNightMode() {
        setIsNightMode(!isNightMode);
    }

    return (
        <HeaderContext.Provider
            value={{
                isNightMode,
                toggleNightMode,
            }}>
            {children}
        </HeaderContext.Provider>
    )
}

export const useNightMode = () => {
    return useContext(HeaderContext);
}