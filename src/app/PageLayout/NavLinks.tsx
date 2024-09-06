'use client'

import {usePathname} from 'next/navigation'

import config from '@/common/config'
import NextLink from '@/components/common/NextLink'

const NavLinks: React.FC = () => {
    const pathname = usePathname()

    return (
        <div className='flex items-strecth gap-20'>
            {config.navLinks.map(({href, text}, index) => (
                <NextLink
                    key={index}
                    href={href}
                    className={`flex items-center ${pathname === href ? 'underline' : 'hover:underline'}`}>
                    {text}
                </NextLink>
            ))}
        </div>
    )
}

export default NavLinks
