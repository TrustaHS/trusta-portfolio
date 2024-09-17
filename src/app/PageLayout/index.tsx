import Image from 'next/image'

import NextLink from '@/components/NextLink'

import NavLinks from './NavLinks'

interface PageLayoutProps {
    children?: React.ReactNode
}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => (
    <>
        <header className='sticky z-50 top-0 inset-x-0 backdrop-blur-sm bg-white/85'>
            <div className='flex justify-between items-stretch container py-4'>
                <NextLink href='/' className='w-[140px] md:w-[180px]'>
                    <Image
                        priority
                        src='/logo.png'
                        alt='logo'
                        width={180}
                        height={0}
                    />
                </NextLink>

                <NavLinks />
            </div>
        </header>

        <main className='relative flex flex-col flex-1 z-10'>{children}</main>
    </>
)

export default PageLayout
