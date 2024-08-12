'use client';

import { Avatar } from "@nextui-org/react";
import { trainContext } from "../_components/trainContext";
import { useContext } from "react";

export default function Station() {

    const context = useContext(trainContext)
    console.log(context)

    return (
        <main className="flex flex-col items-center bg-slate-950">
            <header className="flex flex-col items-center mt-32 mb-40 mx-16">
                <h1 className="text-6xl text-center dark:text-sky-300 text-sky-700 mb-20">
                    Train Station
                </h1>
                <Avatar
                    name="Erlend"
                    src="Erlend-Kyrkjerud-Haartveit-Bilde-No-Background.png"
                    className="mb-4 w-32 h-32"
                />
                {/* <Image src="Erlend-Kyrkjerud-Haartveit-Bilde-No-Background.png" alt="Erlend" className="border-4 border-emerald-700 dark:border-emerald-300 max-w-48 mb-4" /> */}
                <div className="text-xl text-center">
                    Created by{" "}
                    <span className="dark:text-green-300 text-green-700">
                        Erlend Kyrkjerud Hårtveit
                    </span>
                </div>
            </header>
            <div className="flex flex-col mb-60 mx-16">

            </div>
            <footer className=""></footer>
        </main>
    )
}