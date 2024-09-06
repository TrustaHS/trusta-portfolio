import Image from 'next/image'

import config from '@/common/config'
import {cn} from '@/lib/shadcn'

interface FeaturedGfxProps {
    className?: string
}

const FeaturedGfx: React.FC<FeaturedGfxProps> = ({className}) => (
    <div
        className={cn(
            'flex flex-row justify-center items-center gap-10 w-full',
            className,
        )}>
        {config.gfx.featured.left.map(({src, alt}, index) => (
            <Image
                key={index}
                src={src}
                alt={alt}
                width={config.gfx.featuredGfxImageSize}
                height={config.gfx.featuredGfxImageSize}
                className='rounded-md'
            />
        ))}

        <Image
            src={config.gfx.gfxLogoSrc}
            alt={config.gfx.gfxLogoAlt}
            width={config.gfx.featuredGfxImageSize}
            height={0}
        />

        {config.gfx.featured.right.map(({src, alt}, index) => (
            <Image
                key={index}
                src={src}
                alt={alt}
                width={config.gfx.featuredGfxImageSize}
                height={config.gfx.featuredGfxImageSize}
                className='rounded-md'
            />
        ))}
    </div>
)

export default FeaturedGfx
