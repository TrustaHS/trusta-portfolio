import Image from 'next/image'

import NextLink from '@/components/common/NextLink'

import NavLinks from './NavLinks'

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

                <NavLinks />
            </div>
        </header>

        <main className='relative flex flex-col flex-1 z-10'>{children}</main>
    </>
)

export default PageLayout
