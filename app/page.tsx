import Link from "next/link";

export default async function page() {
    return <main className={"w-full h-[100svh] flex flex-col justify-between gap-4 p-4 select-auto selection:bg-black selection:text-white"}>
        <span className={"text-lg md:text-xl font-semibold"}>WEB4YOU</span>
        <span lang={"en-US"} className={"text-7xl md:text-9xl text-center font-extrabold"}>The new site is coming soon!</span>
        <span className={"font-light"}>Onder constructie bij <Link href={"mailto:info@web-4-you.be"} target={"_blank"}
                                                                   className={"text-blue-800 hover:text-blue-700 dark:text-blue-200 dark:hover:text-blue-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg -mx-2 hover:m-0 p-2 transition-all duration-300"}>onszelf</Link> natuurlijk!</span>
    </main>
}
