import {IconoirProvider} from 'iconoir-react'
import type {Metadata} from 'next'
import Image from 'next/image'
import PageLoadProgress from 'nextjs-toploader'
import colors from 'tailwindcss/colors'

import {Toaster} from '@/components/ui/Toaster'

import Favicon from './Favicon'
import PageLayout from './PageLayout'
import './globals.css'

interface RootLayoutProps {
    children?: React.ReactNode
}

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_APP_URL),

    title: {
        template: 'TRUSTA | %s',
        default: 'TRUSTA',
    },

    description:
        'The official website of TRUSTA: hardstyle producer, audio engineer, graphical designer and former youtuber',

    openGraph: {
        title: 'TRUSTA',
        description:
            'The official website of TRUSTA: hardstyle producer, audio engineer, graphical designer and former youtuber',
        type: 'website',
        images: '/trusta-icon.png',
    },

    keywords: ['hardstyle', 'rawstyle', 'mixing', 'mastering', 'gfx'],
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => (
    <html lang='en'>
        <head>
            <link rel='stylesheet' href='https://use.typekit.net/qoj7cts.css' />

            <Favicon path='/favicon' />
        </head>

        <body className='min-h-screen flex flex-col'>
            <PageLoadProgress
                showSpinner={false}
                color={colors.black}
                height={6}
            />

            <div className='fixed inset-0 -z-10'>
                <Image priority src='/background.png' alt='background' fill />
            </div>

            <IconoirProvider
                iconProps={{
                    color: '#000000',
                    strokeWidth: 2,
                    width: '1.5rem',
                    height: '1.5rem',
                }}>
                <Toaster />

                <PageLayout>{children}</PageLayout>
            </IconoirProvider>
        </body>
    </html>
)

export default RootLayout
