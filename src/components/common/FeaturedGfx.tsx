import Image from 'next/image'

import config from '@/common/config'

const IMAGE_SIZE = 200

const FeaturedGfx: React.FC = () => (
    <div className='flex flex-row justify-center items-center gap-10 flex-1'>
        {config.featuredGfx.left.map(({src, alt}, index) => (
            <Image
                key={index}
                src={src}
                alt={alt}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
            />
        ))}

        <Image
            src='/gfx/trusta-gfx-logo.png'
            alt='trusta gfx logo'
            width={IMAGE_SIZE}
            height={0}
        />

        {config.featuredGfx.right.map(({src, alt}, index) => (
            <Image
                key={index}
                src={src}
                alt={alt}
                width={IMAGE_SIZE}
                height={IMAGE_SIZE}
            />
        ))}
    </div>
)

export default FeaturedGfx
