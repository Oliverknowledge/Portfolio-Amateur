import Approach from '@/components/Approach'
import Clients from '@/components/Clients'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero  from '@/components/Hero'
import RecentProjects from '@/components/RecentProjects'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import Image from 'next/image'
import { FaHome } from 'react-icons/fa'
import Work from '@/components/Work'
import Page from './Test/page'
export default function Home(){
     <main className = "relative bg-black-100 flex justify-center items-center flex-col  w-full  min-h-screen overflow-clip sm:px-10 px-5">
      <div className = "w-max mx-auto">
        <FloatingNav 
          navItems={navItems}
        />
        <Hero />
        <Grid/>
        <RecentProjects/>
        <Clients/>
        <Experience/>
        <Approach/>
       
       <Page/>
        
        <Work/>
        <Footer/>
      </div>
    </main>
  
}