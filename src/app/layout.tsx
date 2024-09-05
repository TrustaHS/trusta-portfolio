import type {Metadata} from 'next'
import PageLoadProgress from 'nextjs-toploader'
import colors from 'tailwindcss/colors'

import PageLayout from './PageLayout'
import './globals.css'

interface RootLayoutProps {
    children?: React.ReactNode
}

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_APP_URL),

    title: 'TRUSTA',
    description: '',
}

const RootLayout: React.FC<RootLayoutProps> = ({children}) => (
    <html lang='en'>
        <head>
            <link rel='stylesheet' href='https://use.typekit.net/qoj7cts.css' />
        </head>

        <body className='min-h-screen flex flex-col bg-[url(/background.png)]'>
            <PageLoadProgress
                showSpinner={false}
                color={colors.lime[400]}
                height={6}
            />

            <PageLayout>{children}</PageLayout>
        </body>
    </html>
)

export default RootLayout
