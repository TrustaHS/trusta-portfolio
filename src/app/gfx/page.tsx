import Image from 'next/image'

import config from '@/common/config'
import FeaturedGfx from '@/components/common/FeaturedGfx'
import NextLink from '@/components/common/NextLink'

const GfxPage: React.FC = () => (
    <div className='flex flex-col justify-center items-center gap-[100px] flex-1 scale-[95%]'>
        <div className='space-y-2 text-center'>
            <h1 className='text-4xl'>
                Besides music production, I also do graphic design.
            </h1>

            <p className='text-xl'>
                (to order your own cover art, logo or profile picture, head to
                the{' '}
                <NextLink
                    href='/contact'
                    className='underline hover:opacity-60'>
                    CONTACT
                </NextLink>{' '}
                page)
            </p>
        </div>

        <FeaturedGfx />

        <div className='space-y-2 text-center'>
            <h2 className='text-4xl'>[LOGO DESIGN EXAMPLES]</h2>

            <div className='flex flex-row gap-20'>
                {config.gfx.logos.map(({src, alt}, index) => (
                    <Image
                        key={index}
                        src={src}
                        alt={alt}
                        width={config.gfx.logoImageSize}
                        height={config.gfx.logoImageSize}
                    />
                ))}
            </div>
        </div>
    </div>
)

export default GfxPage
