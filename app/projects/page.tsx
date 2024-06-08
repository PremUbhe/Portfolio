import React from "react";
import Link from "next/link";

const projects = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              About Me
            </div>
            <h2 className="text-heading lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              A Bit About Myself
            </h2>
            <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              I am a full-stack developer with over 5 years of experience
              building web applications. I have a strong background in
              JavaScript, React, and Node.js, and I am always eager to learn new
              technologies and techniques.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                View Resume
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:text-primary dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
              <div className="rounded-xl px-4 py-2 shadow-sm blur-box hover:border-white cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-normal">JavaScript</div>
                  <div className="text-gray-500 dark:text-gray-400">90%</div>
                </div>
                <div className="mt-4 h-1 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-1 w-[90%] rounded-full bg-gray-900 dark:bg-violet-500" />
                </div>
              </div>
              <div className="rounded-xl bg-white px-4 py-2 shadow-sm dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">React</div>
                  <div className="text-gray-500 dark:text-gray-400">85%</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-2 w-[85%] rounded-full bg-gray-900 dark:bg-gray-50" />
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">Node.js</div>
                  <div className="text-gray-500 dark:text-gray-400">80%</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-2 w-[80%] rounded-full bg-gray-900 dark:bg-gray-50" />
                </div>
              </div>
              <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-950">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">Tailwind CSS</div>
                  <div className="text-gray-500 dark:text-gray-400">95%</div>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                  <div className="h-2 w-[95%] rounded-full bg-gray-900 dark:bg-gray-50" />
                </div>
              </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-sm dark:bg-gray-950">
              <div className="flex items-center justify-between">
                <div className="text-xl font-bold">Overall Experience</div>
                <div className="text-gray-500 dark:text-gray-400">5+ Years</div>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200 dark:bg-gray-800">
                <div className="h-2 w-[100%] rounded-full bg-gray-900 dark:bg-gray-50" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default projects;
