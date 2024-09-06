import Image from 'next/image'

import config from '@/common/config'
import {Button} from '@/components/ui/Button'
import {cn} from '@/lib/shadcn'

interface HoverImageRenderProps {
    image: React.ReactNode
    streamNow: React.ReactNode
}

interface HoverImageProps {
    className?: string
    src: string
    alt: string
    href: string
    imageSize: number
    render: (props: HoverImageRenderProps) => React.ReactNode
}

const HoverImage: React.FC<HoverImageProps> = ({
    className,
    src,
    alt,
    href,
    imageSize,
    render,
}) => (
    <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={cn('relative flex-1 overflow-clip group', className)}>
        <div className='absolute -inset-20'>
            <Image
                src={src}
                alt={`${alt} background fill`}
                fill
                className='object-cover transition-all duration-700 group-hover:translate-x-5'
            />
        </div>

        <div className='absolute -inset-20 transition-all duration-500 backdrop-blur-lg bg-black/20 group-hover:bg-black/40' />

        <div className='absolute inset-0 z-10 flex justify-center items-center'>
            {render({
                image: (
                    <Image
                        src={src}
                        alt={alt}
                        width={imageSize}
                        height={imageSize}
                        className='rounded-md shadow-xl shadow-black/50'
                    />
                ),

                streamNow: <Button>STREAM NOW</Button>,
            })}
        </div>
    </a>
)

const MusicPage: React.FC = () => (
    <>
        <HoverImage
            src={config.music.latest.src}
            alt={config.music.latest.alt}
            href={config.music.latest.href}
            imageSize={config.music.latestImageSize}
            render={({image, streamNow}) => (
                <div className='relative flex items-center'>
                    {image}

                    <div
                        className={`
absolute right-0 top-[50%] translate-y-[-50%]
flex flex-col
text-white

translate-x-[calc(100%+2.5rem+0.5rem)]
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

        <div className='flex flex-1'>
            {config.music.featured.map(({src, alt, href}, index) => (
                <HoverImage
                    key={index}
                    src={src}
                    alt={alt}
                    href={href}
                    imageSize={config.music.featuredImageSize}
                    render={({image, streamNow}) => (
                        <div className='relative'>
                            {image}

                            <div
                                className={`
absolute bottom-0 left-[50%] translate-x-[-50%]

transition-all duration-300
opacity-0 group-hover:opacity-100
translate-y-[calc(100%+1.25rem+0.25rem)] group-hover:translate-y-[calc(100%+1.25rem)]
                        `}>
                                {streamNow}
                            </div>
                        </div>
                    )}
                />
            ))}
        </div>
    </>
)

export default MusicPage
