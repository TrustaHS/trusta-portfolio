import {Metadata} from 'next'
import Image from 'next/image'

import NextLink from '@/components/NextLink'
import {Button} from '@/components/ui/Button'
import config from '@/utils/config'

interface TagProps {
    children?: React.ReactNode
}

const Tag: React.FC<TagProps> = ({children}) => (
    <p className='transition-colors bg-white hover:bg-white/80 text-black px-2 text-sm md:text-base rounded-md shadow-md shadow-black/60'>
        {children}
    </p>
)

export const metadata: Metadata = {
    title: 'Services',
}

const ServicesPage: React.FC = () => (
    <div className='flex justify-center items-center flex-1 max-lg:my-6'>
        <div className='fixed inset-0 -z-10'>
            <Image
                priority
                fill
                src='/services-background.png'
                alt='services background'
            />
        </div>

        <div className='absolute inset-0 backdrop-blur-md z-0' />

        <div className='z-10 flex max-lg:flex-col-reverse gap-6 xl:gap-[100px] container'>
            <div className='flex-1 h-min p-6 space-y-8 bg-black/50 text-white rounded-md shadow-lg shadow-black/55'>
                <div className='space-y-1'>
                    <h1 className='text-3xl md:text-4xl'>
                        {config.services.title}
                    </h1>

                    <div className='flex flex-wrap gap-2 md:gap-4'>
                        {config.services.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                {config.services.sections.map(({title, items}, index) => (
                    <div key={index} className='space-y-1'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[25px] md:w-[30px]'>
                                <Image
                                    src={config.services.sectionIconSrc}
                                    alt={config.services.sectionIconAlt}
                                    width={30}
                                    height={30}
                                    className='-translate-y-px'
                                />
                            </div>

                            <h2 className='text-lg md:text-2xl'>{title}</h2>
                        </div>

                        <ul className='list-disc list-outside pl-4 text-sm md:text-lg tracking-wide'>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <Button
                    className='w-full max-md:text-xl max-md:py-1 hover:active:scale-100 hover:active:translate-y-1 shadow-md shadow-black/60'
                    size='lg'
                    asChild>
                    <NextLink href='/contact'>CONTACT ME</NextLink>
                </Button>
            </div>

            <div className='flex-1 space-y-6 text-white tracking-wide'>
                <div className='w-full max-w-[500px] rounded-md overflow-clip group shadow-lg shadow-black/55'>
                    <Image
                        src={config.services.profileSrc}
                        alt={config.services.profileAlt}
                        width={500}
                        height={0}
                        className='transition-transform duration-700 group-hover:scale-[1.1] group-hover:translate-x-5'
                    />
                </div>

                {config.services.description.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>
        </div>
    </div>
)

export default ServicesPage
