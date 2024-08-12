'use client';

import NextImage from "next/image";

// Next UI
import { Avatar, Button, ButtonGroup, Image } from "@nextui-org/react";

// import { BiTree, MaterialSymbolsTrain } from "./_components/icons"
import { IconTree, IconTrain } from "./_components/icons"
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
  const [trainCounter, setTrainCounter] = useState(0);

  function initialTrainButton(text:string, isClicked:boolean, loading:boolean){
    return isClicked ? (
      null
    ) : (
      <Button isLoading={loading} size="lg" color="primary" variant="ghost" endContent={<IconTrain />} 
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
    return trainCreated ? (
      <ButtonGroup className="">
        <Button isIconOnly radius="full" className="w-96 h-96 text-emerald-300 border-2 border-emerald-300" onClick={(e) => {trainHandler(e)}}>
          <IconTrain className="size-32" />
        </Button>
      </ButtonGroup>
    ) : null
  }

  function showTrainCounter(trainCreated:boolean, counter:number){
    return trainCreated ? (
      <div className="text-xl text-center">Path towards infinity ... <span className="text-amber-700 dark:text-amber-300">{ trainCounter < 1 ? '' : trainCounter }</span></div>
    ) : null
  }

  // Just a different way of defining a function
  const trainHandler = (e:any) => {
    setTrainCounter(trainCounter + 1)
    const randomNumber = Math.round(Math.random() * 100)
    // console.log(`randomNumber: ${randomNumber}`)
    console.log(trainCounter)
    if(randomNumber > 90){
      toast.success('Oh! You found a golden nugget.', {
        style: {
          color: 'darkgreen'
        },
        icon: '💰'
      })
    } else if(randomNumber < 10){
      toast.success('Oh! You found a wild pikachu.', {
        style: {
          color: 'darkgoldenrod'
        },
        icon: '🐹'
      })
    } else {
      toast.success(toastMessage);
    }
  }

  return (
    <main className="flex flex-col items-center bg-slate-950">
      <header className="flex flex-col items-center mt-32 mb-40 mx-16">
        <h1 className="text-6xl text-center dark:text-sky-300 text-sky-700 mb-20">
          Next.js Playground
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

        <div className="mb-4">

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-12 h-12"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-8 h-8"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-16 h-16"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-24 h-24"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-16 h-16"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

          <ButtonGroup isDisabled>
            <Button
              isIconOnly
              radius="full"
              className="bg-transparent text-green-300 w-12 h-12"
            >
              <IconTree className="w-full h-full" />
            </Button>
          </ButtonGroup>

        </div>

        <div className="flex justify-center">
        {initialTrainButton(
          initialTrainText,
          createTrainClicked,
          trainIsLoading
        )}
        </div>

        <div className="flex flex-col gap-4 items-center">
          {showTrain(createTrainClicked)}
          {showTrainCounter(createTrainClicked, trainCounter)}
        </div>
      </div>

      <footer className=""></footer>
    </main>
  );
}
