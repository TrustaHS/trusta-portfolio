import Image from 'next/image'

import FeaturedGfx from '@/components/FeaturedGfx'
import NextLink from '@/components/NextLink'
import {cn} from '@/utils/cn'
import config from '@/utils/config'

interface HoverTextProps {
    className?: string
    external?: boolean
    href: string
    text: string
    children?: React.ReactNode
}

const HoverText: React.FC<HoverTextProps> = ({
    className,
    external,
    href,
    text,
    children,
}) => {
    const content = (
        <>
            <div className='absolute inset-0 flex transition-all duration-700 group-hover:scale-[1.55] md:group-hover:scale-[1.05] group-hover:translate-x-5 max-md:scale-[1.5]'>
                {children}
            </div>

            {/* hover background blur/darken */}
            <div
                className={cn(`
absolute inset-0 z-10

transition-all duration-300
opacity-0 group-hover:opacity-100

backdrop-blur-sm bg-black/45
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
        </>
    )

    const linkClassName = cn(
        'relative flex flex-1 overflow-clip group',
        className,
    )

    return external ? (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={linkClassName}>
            {content}
        </a>
    ) : (
        <NextLink href={href} className={linkClassName}>
            {content}
        </NextLink>
    )
}

const HomePage: React.FC = () => (
    <>
        <HoverText
            external={config.home.socials.external}
            href={config.home.socials.href}
            text={config.home.socials.text}
            className='max-lg:flex-[0.5]'>
            <Image
                src={config.home.socials.src}
                alt={config.home.socials.alt}
                fill
                className='object-cover'
            />
        </HoverText>

        <HoverText
            external={config.home.music.external}
            href={config.home.music.href}
            text={config.home.music.text}
            className='max-lg:flex-[0.5]'>
            <Image
                src={config.home.music.src}
                alt={config.home.music.alt}
                fill
                className='object-cover'
            />
        </HoverText>

        <HoverText
            external={config.home.gfx.external}
            href={config.home.gfx.href}
            text={config.home.gfx.text}>
            <FeaturedGfx />
        </HoverText>
    </>
)

export default HomePage
