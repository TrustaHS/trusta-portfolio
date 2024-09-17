import {Slot} from '@radix-ui/react-slot'
import {type VariantProps, cva} from 'class-variance-authority'
import {forwardRef} from 'react'

import {cn} from '@/utils/cn'

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

export const buttonVariants = cva(
    `
inline-flex justify-center items-center
rounded-lg

transition-all hover:active:scale-95 hover:active:translate-y-0.5
text-sm font-medium whitespace-nowrap

disabled:pointer-events-none disabled:opacity-50
`,
    {
        variants: {
            variant: {
                default:
                    'bg-white hover:bg-white/80 backdrop-blur-lg text-black w-max',
                icon: 'bg-white',
            },

            size: {
                default: '',
                lg: 'text-3xl tracking-wide',
            },
        },

        compoundVariants: [
            {
                variant: ['default'],
                size: ['default'],
                class: 'px-4 py-[2px]',
            },
            {
                variant: ['default'],
                size: ['lg'],
                class: 'px-4 py-2',
            },
            {
                variant: ['icon'],
                size: ['default'],
                class: 'h-6 w-6',
            },
            {
                variant: ['icon'],
                size: ['lg'],
                class: 'h-7 w-7',
            },
        ],

        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    },
)

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({className, variant, size, asChild = false, ...props}, ref) => {
        const Component = asChild ? Slot : 'button'

        return (
            <Component
                className={cn(buttonVariants({variant, size, className}))}
                ref={ref}
                {...props}
            />
        )
    },
)
