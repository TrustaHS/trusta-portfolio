'use client'

import {HomeAlt, Menu} from 'iconoir-react'
import {usePathname} from 'next/navigation'
import {useState} from 'react'

import config from '@/common/config'
import NextLink from '@/components/common/NextLink'
import {Button} from '@/components/ui/Button'
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/Drawer'

interface MobileNavLinkItemProps {
    href: string
    text: string
    icon: React.ReactNode
    onClick: VoidFunction
}

const MobileNavLinkItem: React.FC<MobileNavLinkItemProps> = ({
    href,
    text,
    icon,
    onClick,
}) => (
    <li
        className='group flex px-4 py-2 transition-all hover:bg-black/10'
        onClick={onClick}>
        <NextLink
            href={href}
            className='flex items-center gap-3 w-full transition-all group-hover:translate-x-1'>
            {icon}
            <p className='translate-y-[2px]'>{text}</p>
        </NextLink>
    </li>
)

const NavLinks: React.FC = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div className='flex items-center'>
            <ul className='flex gap-10 lg:gap-20 max-md:hidden'>
                {config.navLinks.map(({href, text}, index) => (
                    <li key={index}>
                        <NextLink
                            href={href}
                            className={`flex items-center ${pathname === href ? 'underline' : 'hover:underline'}`}>
                            {text}
                        </NextLink>
                    </li>
                ))}
            </ul>

            <Drawer open={open} onOpenChange={setOpen}>
                <DrawerTrigger asChild>
                    <Button variant='icon' className='md:hidden bg-transparent'>
                        <Menu />
                    </Button>
                </DrawerTrigger>

                <DrawerContent>
                    <div hidden>
                        <DrawerTitle />
                        <DrawerDescription />
                    </div>

                    <ul className='flex flex-col gap-2 pb-2'>
                        <MobileNavLinkItem
                            href='/'
                            text='HOME'
                            icon={<HomeAlt />}
                            onClick={() => setOpen(false)}
                        />

                        {config.navLinks.map(({href, text, icon}, index) => (
                            <MobileNavLinkItem
                                key={index}
                                href={href}
                                text={text}
                                icon={icon}
                                onClick={() => setOpen(false)}
                            />
                        ))}
                    </ul>
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default NavLinks
