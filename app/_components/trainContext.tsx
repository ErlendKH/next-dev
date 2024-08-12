'use client'
 
import { createContext, useContext, useState } from 'react';
import { Toaster } from "react-hot-toast";
 
const trainContext = createContext({})
 
export default function TrainProvider({
    children,
}: {
    children: React.ReactNode
}) {
    const [trainData, setTrainData] = useState({});
    return (
        <trainContext.Provider value={trainData}>
            <Toaster position="bottom-center" toastOptions={{
                icon: '🛤'
            }} />
            {children}
        </trainContext.Provider>
    )
}