'use client'
 
import { createContext, useContext, useState } from 'react';
import { Toaster } from "react-hot-toast";
 
export const trainContext = createContext({
    // momentsPassed: 0
})
 
export default function TrainProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [trainData, setTrainData] = useState({
        // momentsPassed: 0
    });
    return (
        <trainContext.Provider value={trainData}>
            <Toaster position="bottom-center" toastOptions={{
                icon: '🛤'
            }} />
            {children}
        </trainContext.Provider>
    )
}