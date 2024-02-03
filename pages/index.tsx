import { Inter } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Key } from "react";
const font = Inter({ subsets: ["latin"] });

const resume = require('../resume/resume.clintp.json');
// console.log(resume)

const Header = () => {
  return (
    <header className="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
      <div className="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
          <Link href="/" className="hidden items-center gap-1 sm:flex">
            <Image className="inline-block w-8 object-cover rounded mr-2" src={resume.basics.image} width={32} height={32} alt="Picture of me" />
            <h1 className="text-lg font-bold text-white">$ ./clintp.xyz</h1>
          </Link>
        <div className="flex gap-3">
        {resume.basics.profiles.map(({ network, url }: { network: string, url: string }, index: Key) => (
          <a
            key={index}
            href={url}
            className="text-white dark:text-gray-50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className="dark:invert hover:animate-spin" src={`/images/logo-social-${network.toLowerCase()}.svg`} alt={network} width={30} height={30} />
            </a>))}
        </div>
      </div>
    </header>
  );
}

const AboutSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white mb-8">What have you done?</h2>
      <ul>
        {resume.work.map(({ name }: { name: any }, index: Key) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </section>
  );
}

const ProjectsSection = () => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white mb-8">Some of my Projects</h2>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {resume.projects.map(({ name, keywords, description }: { name: string, keywords: Array<string>, description: string }, index: Key) => (
          <ProjectCard key={index} name={name} keywords={keywords} description={description} />
        ))}
      </div>
    </section>
  );
}

const ProjectCard = ({ name, keywords, description }: { name: string, keywords: Array<string>, description: string }) => {
  return (
    <section className="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
      <header className="flex items-center justify-between dark:text-gray-50">
        <h3 className="text-lg font-bold">{name}</h3>
        <Image src="/images/logo-open-source-initiative.svg" width={20} height={20} className="dark:invert" alt="Open Source Initiative Logo" />
      </header>
      <div className="mt-2 dark:text-gray-300">{description}</div>
      <footer className="my-4 flex gap-1">
        {keywords.map((keyword: string, index: Key) => (
          <span key={index} className="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">{keyword}</span>
        ))}
      </footer>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>clintp.xyz | my bio in two mouse clicks or less</title>
        <meta content="my bio in two mouse clicks or less" name="description" />
      </Head>
      <main className={`min-h-screen dark:bg-neutral-900 ${font.className}`}>
        <Header />
        <article className="mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
          <h1 className="mb-8 text-4xl font-bold dark:text-white sm:mt-16">Who?</h1>
          <Image className="float-right rounded-full"
            src={resume.basics.image + '?s=200'}
            width={175} height={175}
            quality="100"
            alt="Picture of me"
          />
          <p className="text-lg dark:text-neutral-200">{resume.basics.summary}</p>
          <h3 className="text-3xl font-bold mt-12 mb-8">Looking for a Resume?</h3>
          <ul className="mb-4 flex gap-3">
            <Link href="/resume.clintp.docx" className="hover:underline"><Image src="images/icon-file-docx.svg" width={30} height={30} className="" alt="docx" /></Link>
            <Link href="https://github.com/yuhonas/clintp.xyz/blob/main/resume/resume.clintp.ipynb" className="hover:underline"><Image src="images/icon-file-ipynb.svg" width={30} height={30} className="" alt="ipynb" /></Link>
          </ul>
          {/* <AboutSection /> */}
          <h3 className="text-3xl font-bold mt-12 mb-8">Want to get in Contact?</h3>
          <p>I can be reached at <a href={ `mailto:` + resume.basics.email } className="hover:underline" >{ resume.basics.email }</a></p>
          <ProjectsSection />
        </article>
      </main>
    </div>
  );
}
