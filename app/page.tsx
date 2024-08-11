'use client';

import NextImage from "next/image";

// Next UI
import { Avatar, Button, ButtonGroup, Image } from "@nextui-org/react";

import { MaterialSymbolsTrain } from "./_components/icons/train"
import { useState } from "react";

import { toast } from 'react-hot-toast';

function delay(time:any) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default function Home() {

  const [initialTrainText, setInitialTrainText] = useState("Let's create a railway.");
  const [createTrainClicked, setCreateTrainClicked] = useState(false);
  const [trainIsLoading, setTrainIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState("On and on and on ...");

  function initialTrainButton(text:string, isClicked:boolean, loading:boolean){
    return isClicked ? (
      null
    ) : (
      <Button isLoading={loading} size="lg" color="primary" variant="ghost" endContent={<MaterialSymbolsTrain />} 
        className="text-xl text-sky-300 mb-12" onClick={(e) => {createTrainHandler(e)}}>
        { text }
      </Button>
    )
  }
  
  function createTrainHandler(e:any){
    // console.log(e)
    console.log(`Creating the train express ...`)

    setInitialTrainText("Creating the train ...")
    setTrainIsLoading(true)

    delay(3000).then((v) => {
      console.log(`The train is ready. Splendid.`)
      setCreateTrainClicked(true)
    })
  }

  function showTrain(trainCreated:boolean){
    return trainCreated? (
      <ButtonGroup className="">
        <Button isIconOnly radius="full" className="w-96 h-96 text-emerald-300" onClick={(e) => {trainHandler(e)}}>
          <MaterialSymbolsTrain className="size-32" />
        </Button>
      </ButtonGroup>
    ) : null
  }

  // Just a different way of defining a function
  const trainHandler = (e:any) => {
    const randomNumber = Math.round(Math.random() * 100)
    console.log(`randomNumber: ${randomNumber}`)
    if(randomNumber > 90){
      toast.success('Oh! You found a golden nugget.', {
        style: {
          color: 'darkgreen'
        }
      })
    } else if(randomNumber < 10){
      toast.success('Oh! You found a wild pikachu.', {
        style: {
          color: 'darkgoldenrod'
        }
      })
    } else {
      toast.success(toastMessage);
    }
  }

  return (

    <main className="flex flex-col items-center bg-slate-950">
      <header className="flex flex-col items-center mt-32 mb-40 mx-16">
        <h1 className="text-6xl dark:text-sky-300 text-sky-700 mb-16">
          Next.js Playground
        </h1>
        {/* Replace Avatar with image later */}
        <Avatar name="Erlend" size="lg" className="mb-2" />
        <div className="text-2xl">Created by <span className="dark:text-green-300 text-green-700">Erlend Kyrkjerud Hårtveit</span></div>
      </header>

      <div className="flex flex-col mb-60 mx-16">

        {initialTrainButton(initialTrainText, createTrainClicked, trainIsLoading)}

        {showTrain(createTrainClicked)}

      </div>

      <footer className="">
        
      </footer>
    </main>

  );
}
