import Image from 'next/image'

import NextLink from '@/components/NextLink'
import {Button} from '@/components/ui/Button'
import config from '@/utils/config'

import DiscordContact from './DiscordContact'

const ContactPage: React.FC = () => (
    <>
        <div className='flex flex-col justify-center items-center gap-10 flex-1 container max-w-screen-lg max-lg:my-10 text-center'>
            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-2xl md:text-4xl'>Contact Details</h2>

                <p className='text-md md:text-xl'>
                    Please reach out if you have any questions about my{' '}
                    <NextLink
                        href='/services'
                        className='underline hover:opacity-60 transition-opacity'>
                        services
                    </NextLink>{' '}
                    or if you simply just want to chat! I hangout a lot on
                    discord!
                </p>
            </div>

            <div className='flex justify-between items-center max-lg:gap-5 max-w-screen-md w-full'>
                <DiscordContact />

                <Button
                    className='flex flex-col items-center gap-4 bg-[unset] hover:bg-[unset] p-0'
                    asChild>
                    <a
                        href={config.contact.instagram.href}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <Image
                            src={config.contact.instagram.src}
                            alt={config.contact.instagram.alt}
                            width={config.contact.instagram.size}
                            height={0}
                        />
                    </a>
                </Button>

                <Button
                    className='flex flex-col items-center gap-4 bg-[unset] hover:bg-[unset] p-0'
                    asChild>
                    <a href={`mailto:${config.contact.gmail.email}`}>
                        <Image
                            src={config.contact.gmail.src}
                            alt={config.contact.gmail.alt}
                            width={config.contact.gmail.size}
                            height={0}
                        />
                    </a>
                </Button>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-2xl md:text-4xl'>
                    {config.contact.aboutMe.title}
                </h2>

                <div className='space-y-6'>
                    {config.contact.aboutMe.description.map((text, index) => (
                        <p key={index} className='text-md md:text-lg'>
                            {text}
                        </p>
                    ))}
                </div>
            </div>

            <a
                href={config.contact.tcr.href}
                target='_blank'
                rel='noopener noreferrer'>
                <Image
                    src={config.contact.tcr.src}
                    alt={config.contact.tcr.alt}
                    width={config.contact.tcr.size}
                    height={0}
                />
            </a>
        </div>
    </>
)

export default ContactPage
