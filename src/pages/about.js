import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/layout'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import Head from 'next/head';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Experinece from '@/components/Experinece';
import Education from '@/components/Education';
import TransitionEffect from '@/components/transitionEffect';


const AnimatedNumber = ({value}) =>{

  const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000});
const isInView = useInView(ref, {once : true});

useEffect(() => {
if(isInView){
  motionValue.set(value);


  
}


}, [isInView, value, motionValue]);



useEffect(() => {

  springValue.on("change" , (latest)=>{
    if(ref.current && latest.toFixed(0)<= value){
      ref.current.innerHTML = Math.ceil(latest);  
    }
}, [springValue, value])})



  return <span ref={ref}>

  </span>
}

const About = () => {
  return (
    <>
   <Head>
    <title>About</title>
    <meta name="description" content="About me" />
    </Head>
<TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
      
      <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 '/>
        <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
<div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
    <p className='font-medium'> 
    Sahdev Patel is an innovative and results-driven software developer with over three years of experience designing and optimizing mobile, web, and cloud-based solutions. He holds a Master's in Computer Science from Purdue University and a Bachelor's in Computer Engineering from L.J. University. 



</p>

<p className=' my-4 font-medium'>
His technical expertise spans Java, Python, Spring Boot, SQL, MEAN & MERN stacks, Android Development, and AWS, making him proficient in building scalable and efficient applications across various industries.

</p>
<p className=' my-4 font-medium'>
With Oracle certifications in Java, AI, and cloud computing, Sahdev excels in cloud technologies, AI, and full-stack development. His passion for problem-solving and scalable software solutions drives him to create impactful, data-driven applications.

    </p>
</div>


<div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
 
 <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '/>
    <Image  src={profilePic} alt="CodeWithDhruv" className='w-full h-auto rounded-2xl'
    priority

    sizes='(max-width : 768px) 100vw
    (max-width: 1200px) 50vw
    33vw
    '
    />
</div>
<div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
<div className='flex flex-col items-end justify-center xl:items-center  '  >
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl '>
        <AnimatedNumber value={50}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clinets</h2>
</div>


<div className='flex flex-col items-end justify-center xl:items-center'  >
    <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
    <AnimatedNumber value={40}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>projects completed</h2>
</div>



<div className='flex flex-col items-end justify-center xl:items-center'  >
    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
    <AnimatedNumber value={5}/>+
    </span>
    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years experience</h2>
</div>
</div>
        </div>
        <Skills/>
        <Experinece/>
        <Education/>
        </Layout>
    </main>
    </>
  )
}

export default About