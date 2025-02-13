import Head from 'next/head';
import Layout from '@/components/layout';
import AnimatedText from '@/components/AnimatedText';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import TransitionEffect from '@/components/transitionEffect';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Sahdev Patel</title>
        <meta name="description" content="Get in touch with Sahdev Patel for work inquiries or collaborations." />
      </Head>
      <TransitionEffect/>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-16">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedText text="Let's Connect!" className="!text-5xl sm:!text-3xl" />

            <p className="my-6 text-lg font-medium md:text-base sm:text-sm">
              Feel free to reach out to me for any work inquiries, collaborations, or just a chat!
            </p>

            <div className="space-y-6">
              {/* Personal Email */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <FaEnvelope className="text-2xl text-blue-600 dark:text-blue-400" />
                <span className="ml-3 text-lg font-semibold">sahdev.personal@gmail.com</span>
              </motion.div>

              {/* Work Email */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <FaEnvelope className="text-2xl text-green-600 dark:text-green-400" />
                <span className="ml-3 text-lg font-semibold">work@sahdevpatel.com</span>
              </motion.div>

              {/* Phone Number */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <FaPhone className="text-2xl text-red-600 dark:text-red-400" />
                <span className="ml-3 text-lg font-semibold">+91 98765 43210</span>
              </motion.div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
