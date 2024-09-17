import Image from 'next/image'

import config from '@/common/config'
import {cn} from '@/lib/shadcn'

interface FeaturedGfxProps {
    className?: string
}

const FeaturedGfx: React.FC<FeaturedGfxProps> = ({className}) => (
    <div
        className={cn(
            'flex max-lg:flex-col justify-center items-center gap-5 xl:gap-10 w-full md:px-5 xl:px-10',
            className,
        )}>
        <div className='flex justify-end items-end gap-5 xl:gap-10 flex-1'>
            {config.gfx.featured.left.map(({src, alt}, index) => (
                <div key={index} className='max-w-[110px] md:max-w-max'>
                    <Image
                        src={src}
                        alt={alt}
                        width={config.gfx.featuredGfxImageSize}
                        height={config.gfx.featuredGfxImageSize}
                        className='rounded-md'
                    />
                </div>
            ))}
        </div>

        <div className='flex justify-center items-center max-w-[130px] md:max-w-max flex-shrink-0'>
            <Image
                src={config.gfx.gfxLogoSrc}
                alt={config.gfx.gfxLogoAlt}
                width={config.gfx.featuredGfxImageSize}
                height={0}
            />
        </div>

        <div className='flex gap-5 xl:gap-10 flex-1'>
            {config.gfx.featured.right.map(({src, alt}, index) => (
                <div key={index} className='max-w-[110px] md:max-w-max'>
                    <Image
                        src={src}
                        alt={alt}
                        width={config.gfx.featuredGfxImageSize}
                        height={config.gfx.featuredGfxImageSize}
                        className='rounded-md'
                    />
                </div>
            ))}
        </div>
    </div>
)

export default FeaturedGfx
