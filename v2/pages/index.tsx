// https://tailwindflex.com/@nishant-trivedi/resume-template-for-tech-field
import Image from "next/image";
import { Inter } from "next/font/google";
// import useSWR from "swr";

const inter = Inter({ subsets: ["latin"] });

const sections = [
  { title: "About", href: "#about" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
]

const resume = require('../public/resume.clintp.json');
console.log(resume)

import Markdown from "react-markdown";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import getConfig from "next/config";
// see https://www.mozzlog.com/blog/react-markdown-custom-renderer
const CustomH1 = ({ children }) => {
  return <h1 className="text-4xl font-bold dark:text-white">{children}</h1>
}

export default function Home() {

  return (
    <main className={`min-h-screen dark:bg-neutral-900 ${inter.className}`}>
        <header className="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
          <div className="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
            <a href="/" className="hidden items-center gap-1 sm:flex">
                <img className="inline-block w-8 object-cover rounded" src={resume.basics.image} />
              <span className="font-fira text-lg font-bold text-white">$ ./clintp.xyz</span>
            </a>
          </div>
        </header>
       <Markdown components={{h1: CustomH1}}></Markdown>
       <article className="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
      <h1 className="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">Who?</h1>
      <img className="float-right w-44 rounded-full" src={ resume.basics.image + '?s=200'} />
      <p className="text-lg dark:text-neutral-200">{ resume.basics.summary }</p>
      <section className="mt-12">
        <h2 className="text-3xl font-bold dark:text-white">What have you done?</h2>
      <ul>
        {resume.work.map(({ name, location, description }, index) => (
          <li key={index}>{name}</li>))}
      </ul>
      </section>
      <section className="mt-12">
        <h2 className="text-3xl font-bold dark:text-white">Some of my Projects</h2>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
         {resume.projects.map(({ name, keywords, description }, index) => (
           <section key={index} className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800" >
            <header className="flex items-center justify-between dark:text-gray-50">
              <h3 className="text-lg font-bold">{name}</h3>
              <Image src="/images/logo-open-source-initiative.svg"
              width={20}
              height={20}
              className="dark:invert"
              alt="Open Source Initiative Logo"
              />
            </header>
            <div className="mt-2 dark:text-gray-300">{description}</div>
            <footer className="my-4 flex gap-1">
             {keywords.map((keyword: string, index: Key ) => (
               <span key={index} className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">{keyword}</span>
             ))}
            </footer>
           </section>
          ))}
        </div>
        </section>
      </article>
    </main>
  )
  // return (
  //   <main
  //     className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  //   >
  //     <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
  //       <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
  //         Get started by editing&nbsp;
  //         <code className="font-mono font-bold">pages/index.tsx</code>
  //       </p>
  //       <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
  //         <a
  //           className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{" "}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className="dark:invert"
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
  //       <Image
  //         className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Docs{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Find in-depth information about Next.js features and API.
  //         </p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Learn{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Learn about Next.js in an interactive course with&nbsp;quizzes!
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Templates{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
  //           Discover and deploy boilerplate example Next.js&nbsp;projects.
  //         </p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
  //         className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2 className={`mb-3 text-2xl font-semibold`}>
  //           Deploy{" "}
  //           <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
  //             -&gt;
  //           </span>
  //         </h2>
  //         <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // );
}
