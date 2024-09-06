import {Slot} from '@radix-ui/react-slot'
import {type VariantProps, cva} from 'class-variance-authority'
import {forwardRef} from 'react'

import {cn} from '@/lib/shadcn'

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
            },

            size: {
                default: 'px-4 py-[2px]',
                lg: 'px-4 py-2 text-3xl tracking-wide',
            },
        },

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
