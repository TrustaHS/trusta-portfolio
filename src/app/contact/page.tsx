import Image from 'next/image'

import NextLink from '@/components/common/NextLink'

const ContactPage: React.FC = () => (
    <>
        <div className='absolute inset-0 flex flex-col justify-center items-center gap-10 container max-w-screen-lg mt-10 text-center'>
            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-6xl'>Contact Details</h2>

                <p className='text-3xl'>
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

            <div className='flex justify-between max-w-screen-md w-full'>
                <div className='relative flex flex-col items-center gap-4'>
                    <Image
                        src='/contact/discord.png'
                        alt='discord logo'
                        width={80}
                        height={0}
                    />

                    <p className='absolute -bottom-2 translate-y-[100%] w-max text-xl'>
                        (fastest response)
                    </p>
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <Image
                        src='/contact/instagram.png'
                        alt='instagram logo'
                        width={80}
                        height={0}
                    />
                </div>

                <div className='flex flex-col items-center gap-4'>
                    <Image
                        src='/contact/gmail.png'
                        alt='gmail logo'
                        width={80}
                        height={0}
                    />
                </div>
            </div>

            <div className='flex flex-col items-center gap-4'>
                <h2 className='text-6xl'>About me</h2>

                <div className='space-y-6'>
                    <p className='text-xl'>
                        Hi, my name is Daniel! I'm a 24 year-old guy from
                        Sweden.
                    </p>

                    <p className='text-xl'>
                        I have been producing Hardstyle/Rawstyle/Hardcore since
                        2018. In 2024, I graduated from "Teknikhögskolan
                        Gothenburg" with a degree in audio engineering. Having
                        learned from the Swedish masters combined with my own
                        journey of self teaching, I have become confident in my
                        skills as both a producer and an engineer.
                    </p>

                    <p className='text-xl'>
                        Apart from that I also do graphic design. I produce all
                        of my own artworks and I am also a dedicated designer
                        and co-owner of "The Core Records" label.
                    </p>
                </div>
            </div>

            <Image
                src='/contact/tcr-logo.png'
                alt='core records logo'
                width={200}
                height={0}
            />
        </div>
    </>
)

export default ContactPage
