import Image from 'next/image'

import FeaturedGfx from '@/components/common/FeaturedGfx'
import NextLink from '@/components/common/NextLink'
import {cn} from '@/lib/shadcn'

interface HoverTextProps {
    className?: string
    href: string
    text: string
    children?: React.ReactNode
}

const HoverText: React.FC<HoverTextProps> = ({
    className,
    href,
    text,
    children,
}) => (
    <NextLink
        href={href}
        className={cn('relative flex flex-1 overflow-clip group', className)}>
        <div className='absolute inset-0 flex transition-all duration-700 group-hover:scale-[1.05]'>
            {children}
        </div>

        {/* hover background blur/darken */}
        <div
            className={cn(`
absolute inset-0 z-10

transition-all duration-300
opacity-0 group-hover:opacity-100

backdrop-blur-sm bg-black/40
`)}
        />

        {/* hover text */}
        <p
            className={cn(`
absolute inset-0 z-20

transition-all duration-300
opacity-0 group-hover:opacity-100
translate-y-2 group-hover:translate-y-0

flex flex-row justify-center items-center
text-xl text-white tracking-widest
                `)}>
            {text}
        </p>
    </NextLink>
)

const HomePage: React.FC = () => (
    <>
        <HoverText href='/contact' text='SOCIALS'>
            <Image src='/hero.png' alt='hero' fill className='object-cover' />
        </HoverText>

        <HoverText href='/music' text='FEATURED RELEASE'>
            <Image
                src='/featured-release.png'
                alt='featured release'
                fill
                className='object-cover'
            />
        </HoverText>

        <HoverText className='flex-[0.75]' href='/gfx' text='GFX'>
            <FeaturedGfx />

            {/* <Image
                src='/gfx-slot.png'
                alt='gfx'
                fill
                className='object-cover'
            /> */}
        </HoverText>
    </>
)

export default HomePage
