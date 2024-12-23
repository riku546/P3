import { Nunito } from 'next/font/google'
import '@/app/global.css'
import useHome from '@/hooks/useHome'

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"></link>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Grey+Qo&display=swap"
                    rel="stylesheet"></link>
            </head>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'PPP',
}

export default RootLayout
