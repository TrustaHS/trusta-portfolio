import Image from 'next/image'
import NextLink from 'next/link'

import {cn} from '@/lib/shadcn'

interface ImageHoverTextProps {
    className?: string
    src: string
    alt: string
    href: string
    text: string
}

const ImageHoverText: React.FC<ImageHoverTextProps> = ({
    className,
    src,
    alt,
    href,
    text,
}) => (
    <NextLink
        href={href}
        className={cn('relative flex-1 overflow-clip group', className)}>
        <Image
            src={src}
            alt={alt}
            fill
            className='object-cover transition-all duration-700 group-hover:scale-[1.05]'
        />

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
        <ImageHoverText
            src='/hero.png'
            alt='hero'
            href='/contact'
            text='SOCIALS'
        />

        <ImageHoverText
            src='/featured-release.png'
            alt='featured release'
            href='/music'
            text='FEATURED RELEASE'
        />

        <ImageHoverText
            className='flex-[0.75]'
            src='/gfx-slot.png'
            alt='gfx'
            href='/gfx'
            text='GFX'
        />
    </>
)

export default HomePage
