import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import profilePic from '../../public/images/profile/developer-pic-1.png';
import Layout from '@/components/layout';
import AnimatedText from '@/components/AnimatedText';
import {motion} from 'framer-motion';
import Link from 'next/link';
import { LinkArrow } from '@/components/Icons';
import HireMe from '@/components/HireMe';
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from '@/components/transitionEffect';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sahdev Patel - Portfolio</title>
        <meta name="description" content="Sahdev Patel Portolio" />
       
      </Head>
      <TransitionEffect/>
    <main className='flex items-center text-dark w-full min-h-screen dark:text-lg '>
      <Layout className='pt-0 md:pt-16 sm:pt-8'>

      <div className='flex items-center justify-between w-full lg:flex-col'>


        <div className='w-1/2 md:w-full '>
<Image src={profilePic} className='w-full h-auto lg:hidden md:inline-block md:w-full '
priority

sizes='(max-width : 768px) 100vw
(max-width: 1200px) 50vw
50vvw
'
/>
      </div>

      <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>

<AnimatedText text="Sahdev Nikinkumar Patel" className='!text-6xl !text-left 
xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
'/>


<p className='my-4 text-base font-medium  md:text-sm sm:text-xs dark:text-light'>
Innovative and results-driven Software Developer with over 3 years of experience in designing, developing, and optimizing
mobile, web, and cloud-based solutions. Proven track record in delivering high-impact projects across multiple industries.
Proficient in Java, Python, Spring Boot, SQL, MEAN & MERN stacks, Android Development, and AWS. Enthusiastic
about contributing to innovative, scalable solutions in a dynamic environment.

  </p>

<div className='flex items-center self-start mt-2 lg:self-center'>
  <Link href="/dummy.pdf" target={"_blank"}
  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark 
  
  border-2 border-solid border-transparent hover:border-dark
  
  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
  hover:dark:border-light md:p-2 md:px-4 md:text-base
  '

  download={true}

  >Resume<LinkArrow className={"w-6 ml-1"}/>
  </Link>
  <Link href="mailto:Sahdev.01patel@gmail.com" target={"_blank"}
  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
  >Contact</Link>
</div>

      </div>
      
      </div>
      </Layout>
<HireMe/>
<div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
  <Image src={lightBulb} alt="CodeWithDhruv" className='w-full h-auto'/>
</div>
    </main>
    </>
  )
}
