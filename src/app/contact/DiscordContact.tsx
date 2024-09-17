'use client'

import Image from 'next/image'
import {toast} from 'sonner'

import {Button} from '@/components/ui/Button'
import config from '@/utils/config'
import {copyToClipboard} from '@/utils/copyToClipboard'

interface DiscordContactProps {}

const DiscordContact: React.FC<DiscordContactProps> = ({}) => {
    const handleClick = () => {
        copyToClipboard(config.contact.discord.username)
        toast.info('Copied username to clipboard!')
    }

    return (
        <Button
            className='relative flex flex-col items-center gap-4 max-w-max cursor-pointer p-0 bg-[unset] hover:bg-[unset]'
            onClick={handleClick}>
            <Image
                src={config.contact.discord.src}
                alt={config.contact.discord.alt}
                width={config.contact.discord.size}
                height={0}
            />

            <p className='max-lg:hidden absolute -bottom-2 translate-y-full w-max text-lg'>
                (fastest response)
            </p>
        </Button>
    )
}

export default DiscordContact
