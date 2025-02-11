import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-cener justify-between
    md:w-[80%]
    '>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0.5, type: "spring", stiffness: 100 }}

        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark'>@{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Experinece = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 '> Experience

            </h2>

            <div ref={ref} className='w-[75%] mx-auot relative
            lg:w-[90%] md:w-full
            '>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
            dark:bg-light

            md:w-[2px] md:left-[30px] xs:left-[20px]
            '/>
                <ul className='w-full flex flex-col items-center justify-between ml-4
                xs:ml-2 
                '>
<Details
                        position="Intern | Software Developer"
                        company="BUSINESS TECH BAY, Inc"
                        time="Nov 2024 - Dec 2024"
                        address="Highland, IN, USA"
                        companyLink="#"
                        work="Aligned and optimized code to meet project specifications, resulting in a 20% increase in project efficiency."
                    />

<Details
                        position="Intern | Mobile Application Developer"
                        company="Unnati Informatics LLP"
                        time="Jan 2022 - Mar 2022"
                        address="Ahmedabad, India"
                        companyLink="#"
                        work="Collaborated on the development of an Android child safety app with geofencing and real-time tracking features."
                    />


<Details
                        position="Intern | Android SDK"
                        company="Arth Infosoft Pvt. Ltd."
                        time="May 2021 - July 2021"
                        address="Ahmedabad, India"
                        companyLink="#"
                        work="Developed a smart quiz application for students and an NGO using Android Studio and Java, focusing on custom quizzes and interactive UI design."
                    />

                </ul>
            </div>
        </div>
    )
}

export default Experinece