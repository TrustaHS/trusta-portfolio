import {Metadata} from 'next'
import Image from 'next/image'

import FeaturedGfx from '@/components/FeaturedGfx'
import NextLink from '@/components/NextLink'
import config from '@/utils/config'

export const metadata: Metadata = {
    title: 'GFX',
}

const GfxPage: React.FC = () => (
    <div className='flex flex-col justify-center items-center gap-[100px] flex-1 max-lg:my-10'>
        <div className='space-y-2 text-center'>
            <h1 className='text-2xl md:text-4xl'>
                Besides music production, I also do graphic design.
            </h1>

            <p className='text-base md:text-xl'>
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

        <FeaturedGfx className='max-2xl:flex-col -my-8 px-5' />

        <div className='space-y-8 text-center'>
            <h2 className='text-2xl md:text-4xl'>[LOGO DESIGN EXAMPLES]</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 px-2'>
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
