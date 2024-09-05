import Image from 'next/image'

import config from '@/common/config'
import NextLink from '@/components/common/NextLink'

interface PageLayoutProps {
    children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => (
    <>
        <header className='sticky z-10 top-0 inset-x-0 backdrop-blur-sm bg-white/80'>
            <div className='flex justify-between items-stretch container py-4'>
                <NextLink href='/'>
                    <Image
                        priority
                        src='/logo.png'
                        alt='logo'
                        width={180}
                        height={0}
                    />
                </NextLink>

                <div className='flex items-strecth gap-20'>
                    {config.navLinks.map(({href, text}, index) => (
                        <NextLink
                            key={index}
                            href={href}
                            className='flex items-center hover:underline'>
                            {text}
                        </NextLink>
                    ))}
                </div>
            </div>
        </header>

        <main className='relative flex flex-col flex-1 z-10'>{children}</main>
    </>
)

export default PageLayout
