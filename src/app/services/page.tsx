import Image from 'next/image'

import config from '@/common/config'
import NextLink from '@/components/common/NextLink'
import {Button} from '@/components/ui/Button'

interface TagProps {
    children?: React.ReactNode
}

const Tag: React.FC<TagProps> = ({children}) => (
    <p className='transition-colors bg-white hover:bg-white/80 text-black px-2 rounded-md shadow-md shadow-black/60'>
        {children}
    </p>
)

const ServicesPage: React.FC = () => (
    <div className='flex justify-center items-center absolute inset-0 bg-[url(/services-background.png)] *:z-10'>
        <div className='absolute inset-0 backdrop-blur-md z-0' />

        <div className='flex gap-[100px] container'>
            <div className='flex-1 h-min p-6 space-y-8 bg-black/50 text-white rounded-md shadow-lg shadow-black/55'>
                <div className='space-y-1'>
                    <h1 className='text-4xl'>{config.services.title}</h1>

                    <div className='flex gap-4'>
                        {config.services.tags.map((tag, index) => (
                            <Tag key={index}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                {config.services.sections.map(({title, items}, index) => (
                    <div key={index} className='space-y-1'>
                        <div className='flex items-center gap-2'>
                            <Image
                                src={config.services.sectionIconSrc}
                                alt={config.services.sectionIconAlt}
                                width={30}
                                height={30}
                                className='-translate-y-px'
                            />

                            <h2 className='text-2xl'>{title}</h2>
                        </div>

                        <ul className='list-disc list-inside text-lg tracking-wide'>
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}

                <Button
                    className='w-full hover:active:scale-100 hover:active:translate-y-1 shadow-md shadow-black/60'
                    size='lg'
                    asChild>
                    <NextLink href='/contact'>CONTACT ME</NextLink>
                </Button>
            </div>

            <div className='flex-1 space-y-6 text-white tracking-wide'>
                <div className='w-[500px] h-[500px] rounded-md overflow-clip group shadow-lg shadow-black/55'>
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
