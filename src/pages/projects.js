import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/layout'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Head from 'next/head'
import {motion} from "framer-motion";
import TransitionEffect from '@/components/transitionEffect'
const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className=' w-full flex items-center justify-between 
        relative rounded-br-3xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded 2xl xs:rounded-br-3xl xs:p-4
       
        '>


             
 <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark  dark:bg-light
 rounded-br-3xl

 xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
 '/>
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
                <FramerImage src={img} alt={title} className='w-full h-auto'   
        whileHover={{scale :1.05}}
        transition= {{duration:0.2}} />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base '>{type}</span>
                <Link href={link} target='_blank' className='hover:underline-offset-2'>
                    <h2 className='my-2 w-full text-4xl text-left font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm' >{summary}</p>
                <div className=' mt-2 flex items-center '>
                    <Link href={github} target='_blank' className='w-10'>  <GithubIcon /> </Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold
                    dark:bg-light dark:text-dark

                    sm:px-4 sm:text-base
                    '>  Visit Project </Link>
                </div>
            </div>

        </article>
    )
}


const Project = ({ title, type, img, link, github }) => {

    return (
        <article className='w-full items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4
        '>

<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark 
 rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%]  xs:rounded-[1.5rem]
 '/>
        <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg'>
            <FramerImage
              
        whileHover={{scale :1.05}}
        transition= {{duration:0.2}}
            src={img} alt={title} className='w-full h-auto' />
        </Link>
        <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline-offset-2'>
                <h2 className='my-2 w-full text-3xl text-left font-bold dark:text-light lg:text-2xl'>{title}</h2>
            </Link>
           
            <div className='w-full mt-2 flex items-center justify-between '>

                <Link href={github} target='_blank' className='w-8 md:w-6'>  <GithubIcon /> </Link>
            <Link href={link} target='_blank' className='  text-dark font-semibold underline dark:text-light md:text-base'>  Visit Project </Link>
             
            </div>
        </div>

    </article>
    )
}
const projects = () => {
    return (
        <>
            <Head>
                <title>Projects Page</title>
                <meta name="description" content="About me" />
            </Head>
            <TransitionEffect/>

            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>

                <Layout>
                    <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16
                    lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl
                    ' />

                    <div className='grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject

title="CetizenCare App"
summary="Directed the integration of home services and retail into a multi-service platform, introducing a reward system that enhanced customer engagement and loyalty. Leveraged Node.js and MongoDB for platform development, boosting customer loyalty by 20%."
link="/"
type="Node.js, MongoDB"
img={project1}
github="/"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>


                     

<Project
    title="GS-NWI Community App"
    summary="Designed and implemented a cultural hub app for the Gujarati community in the USA using UI/UX design tools, fostering connections among 500+ users. Increased community interaction by 30% through enhanced accessibility and usability."
    link="/"
    type="UI/UX Design"
    img={project1}
    github="/"
/>



                        </div>

                        <div className='col-span-6 sm:col-span-12'>
                        <Project
    title="Deep Learning Project - Asphalt Insight"
    summary="Employing cutting-edge deep learning tools and image processing techniques to accurately identify and assess road surface cracks. Utilized image processing tools to empower the system in delivering high-quality actionable insights and optimizing resource utilization."
    link="/"
    type="Deep Learning, Image Processing"
    img={project1}
    github="/"
/>

                        </div>


                        <div className='col-span-12'>
                        <FeaturedProject
    title="Algorithm Project - VoyageVista"
    summary="Implemented a cutting-edge navigation solution using Reinforcement Learning to optimize travel efficiency. Applied an intelligent system leveraging data analytics, AI, and machine learning to calculate factors such as mileage, weather conditions, distance, and time. Delivered routing options with 20% higher accuracy than current market alternatives."
    link="/"
    type="Reinforcement Learning, AI, Data Analytics"
    img={project1}
    github="/"
/>

                        </div>
                      




                    </div>


                </Layout>
            </main>
        </>
    )
}

export default projects