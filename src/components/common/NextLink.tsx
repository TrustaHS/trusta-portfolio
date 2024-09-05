import Link from 'next/link'
import {forwardRef} from 'react'

import {cn} from '@/lib/shadcn'

interface NextLinkProps extends React.ComponentProps<typeof Link> {
    children?: React.ReactNode
}

const NextLink = forwardRef<HTMLAnchorElement, NextLinkProps>(
    ({className, ...props}, ref) => (
        <Link
            draggable={false}
            ref={ref}
            className={cn(
                `
rounded-sm
transition-all
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ring-offset-white
`,
                className,
            )}
            {...props}
        />
    ),
)

export default NextLink
