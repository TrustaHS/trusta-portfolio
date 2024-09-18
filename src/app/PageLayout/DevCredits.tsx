'use client'

import {Code} from 'iconoir-react'
import {CSSProperties, useEffect, useRef, useState} from 'react'

import {AnimatePresence, m} from '@/lib/motion'
import {cn} from '@/utils/cn'

interface DevCreditsProps {}

const DevCredits: React.FC<DevCreditsProps> = ({}) => {
    const [hover, setHover] = useState(false)

    const [size, setSize] = useState<CSSProperties>({
        width: 'auto',
        height: 'auto',
    })

    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!ref.current) return

        setSize({
            height: ref.current.scrollHeight,
            width: ref.current.scrollWidth,
        })
    }, [hover])

    return (
        <>
            <m.a
                href='https://elohmrow.dev'
                target='_blank'
                rel='noopener noreferrer'
                className={cn(
                    `
fixed z-10 bottom-2 right-2 p-1
bg-black text-white overflow-clip text-nowrap cursor-pointer
transition-all
`,
                    hover ? 'p-2 pr-3 gap-2' : '',
                )}
                onHoverStart={() => setHover(true)}
                onHoverEnd={() => setHover(false)}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'start',
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: 'white',
                }}
                animate={{
                    width: size.width,
                    height: size.height,
                }}>
                <Code className='text-inherit h-6 w-6' />

                <AnimatePresence>
                    {hover && (
                        <m.div
                            className='flex flex-col'
                            initial={{width: 0, height: 0, opacity: 0}}
                            animate={{
                                width: 'auto',
                                height: 'auto',
                                opacity: 1,
                            }}
                            exit={{width: 0, height: 0, opacity: 0}}>
                            <p>made by:</p>
                            <p className='hover:underline'>elohmrow.dev</p>
                        </m.div>
                    )}
                </AnimatePresence>
            </m.a>
        </>
    )
}

export default DevCredits
