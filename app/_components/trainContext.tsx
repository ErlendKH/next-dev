'use client'
 
import { createContext } from 'react';
import { Toaster } from "react-hot-toast";

const trainData = {
    momentsPassed: 0,
    goldenNuggets: 0,
    pikachus: 0
}

export const trainContext = createContext(trainData)
 
export default function TrainProvider({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <trainContext.Provider value={trainData}>
            <Toaster position="bottom-center" toastOptions={{
                // icon: '🛤'
                icon: '🛤️'
            }} />
            {children}
        </trainContext.Provider>
    )
}