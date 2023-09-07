import '@/styles/globals.css'
import type {Metadata} from 'next'
import {inter} from "@/styles/fonts";

export const metadata: Metadata = {
    title: 'WEB4YOU',
    description: 'Onze nieuwe website is onder constructie!',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return <html lang="nl-BE">
    <body className={inter.className + " dark:bg-black"}>
    {children}
    </body>
    </html>
}
