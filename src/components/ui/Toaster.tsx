import {Toaster as Sonner} from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster: React.FC<ToasterProps> = (props) => (
    <Sonner
        theme='light'
        className='group toaster'
        toastOptions={{
            classNames: {
                toast: `
flex items-start

group-[.toaster]:backdrop-blur-sm
group-[.toaster]:bg-main/5
group-[.toaster]:text-main
group-[.toaster]:border-main
group-[.toaster]:shadow-lg
`,

                info: `
info group-[.toaster]:bg-blue-300/70
group-[.toaster]:border-blue-400
group-[.toaster]:text-blue-900
                `,

                icon: 'w-5 h-5 mr-0',
                title: 'font-semibold',
            },
        }}
        {...props}
    />
)

export {Toaster}
