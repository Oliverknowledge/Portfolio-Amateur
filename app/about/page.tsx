import { BoxesCore } from '@/components/ui/background-boxes'
import { cn } from '@/lib/utils'
import React from 'react'
  import TextReveal from "@/components/ui/ScrollReveal";
const Page = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <BoxesCore className="z-0 h-screen w-screen"/>
      <div className = "h-96 justify-start">
     <div className="z-10 flex min-h-[16rem] `items-center justify-center rounded-lg border bg-white dark:bg-black">
       <TextReveal text="Take a look at Horizon." />
     </div>
   
      </div>
    </div>
    
  )
}

export default Page   