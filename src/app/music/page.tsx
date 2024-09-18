import {Metadata} from 'next'
import Image from 'next/image'

import {Button} from '@/components/ui/Button'
import {cn} from '@/utils/cn'
import config from '@/utils/config'

interface HoverImageRenderProps {
    image: React.ReactNode
    streamNow: React.ReactNode
}

interface HoverImageProps {
    className?: string
    src: string
    alt: string
    href: string
    artist: string
    title: string
    render: (props: HoverImageRenderProps) => React.ReactNode
}

const HoverImage: React.FC<HoverImageProps> = ({
    className,
    src,
    alt,
    href,
    artist,
    title,
    render,
}) => {
    const image = (
        <Image
            src={src}
            alt={alt}
            width={350}
            height={350}
            className='rounded-md shadow-xl shadow-black/50'
        />
    )

    const streamNow = <Button>STREAM NOW</Button>

    return (
        <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(
                'relative overflow-clip group xl:flex-1 max-xl:h-[400px]',
                className,
            )}>
            <div className='absolute -inset-20'>
                <Image
                    src={src}
                    alt={`${alt} background fill`}
                    fill
                    className='object-cover transition-all duration-700 group-hover:translate-x-5'
                />
            </div>

            <div className='absolute -inset-20 transition-all duration-500 backdrop-blur-lg bg-black/20 group-hover:bg-black/40' />

            <div className='max-xl:hidden group absolute inset-0 z-10 flex justify-center items-center'>
                {render({image, streamNow})}
            </div>

            <div className='xl:hidden group absolute inset-0 z-10 flex'>
                <div className='flex items-center justify-center flex-1'>
                    <div className='w-[280px]'>{image}</div>
                </div>

                <div
                    className={`
absolute inset-0 z-10 flex flex-col justify-center items-center

transition-all duration-300
opacity-0 group-hover:opacity-100
text-white backdrop-brightness-[0.5] backdrop-blur-sm
`}>
                    <div
                        className={`
flex flex-col items-center text-center gap-1 md:gap-2 w-max max-w-full px-4
transition-all duration-300
-translate-x-[20px] group-hover:translate-x-0
`}>
                        <p className='text-xl md:text-2xl'>{artist}</p>

                        <h2 className='text-3xl md:text-4xl'>{title}</h2>

                        {streamNow}
                    </div>
                </div>
            </div>
        </a>
    )
}

export const metadata: Metadata = {
    title: 'Music',
}

const MusicPage: React.FC = () => (
    <div className='flex flex-col xl:flex-1'>
        <HoverImage
            src={config.music.latest.src}
            alt={config.music.latest.alt}
            href={config.music.latest.href}
            artist={config.music.latest.artist}
            title={config.music.latest.title}
            render={({image, streamNow}) => (
                <div className='relative'>
                    {image}

                    <div
                        className={`
flex flex-col text-white
absolute right-0 top-[50%] translate-y-[-50%] translate-x-[calc(100%+2.5rem+0.5rem)]
`}>
                        <p className='text-lg'>{config.music.latest.artist}</p>

                        <h2 className='text-3xl mb-1'>
                            {config.music.latest.title}
                        </h2>

                        {streamNow}
                    </div>
                </div>
            )}
        />

        <div className='flex max-xl:flex-col xl:flex-1'>
            {config.music.featured.map(
                ({src, alt, href, artist, title}, index) => (
                    <HoverImage
                        key={index}
                        src={src}
                        alt={alt}
                        href={href}
                        artist={artist}
                        title={title}
                        render={({image, streamNow}) => (
                            <div className='relative w-[250px]'>
                                {image}

                                <div
                                    className={`
absolute bottom-0 left-1/2 -translate-x-1/2

transition-all duration-300
opacity-0 group-hover:opacity-100
translate-y-[calc(100%+1.25rem+0.25rem)] group-hover:translate-y-[calc(100%+1.25rem)]
                                    `}>
                                    {streamNow}
                                </div>
                            </div>
                        )}
                    />
                ),
            )}
        </div>
    </div>
)

export default MusicPage
