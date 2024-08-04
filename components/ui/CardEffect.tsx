"use client";
import Horizon from '@/public/horizon.png'

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import Link from "next/link";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="max-w-6xl">
      <CardBody className="bg-gray-50 lg:w-[60vw] relative group/card h-auto dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem]  rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
         <h1 className = "text-start md:text-2xl lg:text-3xl sm:5mt font-bold">
                            <span className = "text-sky-400">Horizon</span> Project
                        </h1>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
        My recent bank syncing project 
           </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src= { Horizon }
            height="1000"
            width="1000"
            className="h[400px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Check →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            
            <a href = "https://github.com/MannuPaaaji/Next-Portfolio/tree/main/public/work.png" target="__blank">View code</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
