import Head from "next/head";
import Link from "next/link";
import { Open_Sans, Raleway } from 'next/font/google'
import Testimonial from "~/components/Testimonial";
import Navbar from "~/components/Navbar";
import Hero from "~/components/Hero";

export const opensans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans'
})

export const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${opensans.variable}` + " font-opensans flex min-h-screen flex-col items-center text-white bg-main-blue px-3 py-6 gap-[160px]"}>
        <Navbar />
        <Hero />
      </main>
    </>
  );
}
