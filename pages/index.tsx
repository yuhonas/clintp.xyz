import { Inter } from "next/font/google"
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Key } from "react";
const font = Inter({ subsets: ["latin"] });

const resume = require('../resume/resume.clintp.json');
// const githubUrl = resume.basics.profiles.find(({ network }: { network: string }) => network.toLowerCase() === 'github')?.url;

const Header = ({ profiles }: { profiles: Array<{ network: string, url: string }> }) => {
  return (
    <header className="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
      <div className="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
          <Link href="/" className="hidden items-center gap-1 sm:flex">
            <Image className="inline-block w-8 object-cover rounded mr-2" src={'favicon.svg'} width={32} height={32} alt="Picture of me" />
            <h1 className="text-lg font-bold text-white">$ ./clintp.xyz</h1>
          </Link>
        <div className="flex gap-3">
        {profiles.map(({ network, url }: { network: string, url: string }, index: Key) => (
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
        {resume.work.map(({ name }: { name: string }, index: Key) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </section>
  );
}

const ProjectsSection = ( {projects}: { projects: Array<{name:string, keywords:Array<string>, description: string}>}) => {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold dark:text-white mb-8">Some of my Projects</h2>
      {/* <p className="mb-8">In my freetime I like to work on some open source projects, here's some of my top ones but also checkout my <a href="{ githubUrl }">github</a></a></p> */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {projects.map(({ name, keywords, description }: { name: string, keywords: Array<string>, description: string }, index: Key) => (
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
        <Header profiles={resume.basics.profiles} />
        <article className="mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
          <h2 className="mb-8 text-4xl font-bold dark:text-white sm:mt-16">Who?</h2>
          <Image className="float-right rounded-full"
            src={resume.basics.image}
            width={175} height={175}
            quality="100"
            alt="Picture of me"
          />
          <p className="text-lg dark:text-neutral-200">{resume.basics.summary}</p>
          <h3 className="text-3xl font-bold mt-12 mb-8">Looking for a Resume?</h3>
          <Link href="/Resume_ClintPlummer_ENMR.pdf"
          className="hover:saturate-200"
          >
            <Image src="images/icon-file-pdf.svg"
              width={30}
              height={30}
              alt="pdf"
              className="mb-2 ml-5"
            />
          </Link>
          <p className="text-xs">Regular PDF</p>
          <h4 className="text-2xl font-bold mt-12 mb-4">Something to geek out on</h4>
              <ul className="mb-4 list-disc">
                <li>My resume is stored in <a href="https://jsonresume.org/" className="underline">JSON Schema</a> format, it can be viewed at <a href="https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json" className="underline">resume.clintp.json</a></li>
                <li>The resume is automagically linted/spell checked and built into various formats</li>
                <li>You can explore the data using tools like <a href="https://jsoncrack.com/editor?json=https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json" className="underline">JSON Crack</a> or
                 &nbsp;<a href="https://lite.datasette.io/?json=https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json#/data/resume?_sort=rowid&_facet=name&_facet=location" className="underline">lite.datasette.io</a>
                </li>
                <li>As part of the <a href="https://github.com/yuhonas/clintp.xyz/blob/main/.github/workflows/ci.yml" className="underline">resume build</a>, a gist is updated which enables the resume to be published on <a href="https://registry.jsonresume.org/yuhonas" className="underline">registry.jsonresume.com</a>, see also <a href="https://registry.jsonresume.org/yuhonas?theme=stackoverflow" className="underline">here</a> for an example of the resume rethemed </li>
              </ul>
              <p className="mb-4">This following files are also available</p>
            <ul className="mb-4 flex gap-3">
              {/* <li>
                <Link href="https://jsoncrack.com/editor?json=https://raw.githubusercontent.com/yuhonas/clintp.xyz/main/resume/resume.clintp.json" className="hover:underline">
                  <Image src="images/icon-file-json.svg"
                   width={30}
                   height={30}
                   className="mx-auto mb-2"
                   alt="ipynb"
                  />
                </Link>
                <p className="text-xs">My JSON Resume</p>
              </li>*/}
              <li>
                <Link href="https://github.com/yuhonas/clintp.xyz/blob/main/resume/resume.clintp.ipynb" className="hover:underline">
                  <Image src="images/icon-file-ipynb.svg"
                   width={30}
                   height={30}
                   className="mx-auto mb-2"
                   alt="ipynb"
                  />
                </Link>
                <p className="text-xs">Jupyter  Notebook</p>
              </li>
               <li>
                <Link href="/resume.clintp.docx" className="hover:underline">
                  <Image src="images/icon-file-docx.svg"
                   width={30}
                   height={30}
                   className="mx-auto mb-2"
                   alt="docx"
                  />
                </Link>
                <p className="text-xs">ATS Optimized Resume</p>
              </li>
           </ul>
          {/* <AboutSection /> */}
          <h3 className="text-3xl font-bold mt-12 mb-8">Want to talk?</h3>
          <p>I can be reached at <a href={ `mailto:` + resume.basics.email } className="hover:underline" >{ resume.basics.email }</a></p>
          <ProjectsSection projects={resume.projects}/>
        </article>
      </main>
    </div>
  );
}
