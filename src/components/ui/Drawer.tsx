'use client'

import {forwardRef} from 'react'
import {Drawer as DrawerPrimitive} from 'vaul'

import {cn} from '@/utils/cn'

export const Drawer = ({
    shouldScaleBackground = false,
    ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) => (
    <DrawerPrimitive.Root
        shouldScaleBackground={shouldScaleBackground}
        {...props}
    />
)

export const DrawerTrigger = DrawerPrimitive.Trigger

export const DrawerPortal = DrawerPrimitive.Portal

export const DrawerClose = DrawerPrimitive.Close

export const DrawerOverlay = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Overlay>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({className, ...props}, ref) => (
    <DrawerPrimitive.Overlay
        ref={ref}
        className={cn(
            'fixed inset-0 z-50 backdrop-brightness-[.3] backdrop-blur-sm ',
            className,
        )}
        {...props}
    />
))

export const DrawerContent = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({className, children, ...props}, ref) => (
    <DrawerPortal>
        <DrawerOverlay />
        <DrawerPrimitive.Content
            ref={ref}
            className={cn(
                'fixed inset-x-0 bottom-0 z-50 flex flex-col h-auto rounded-t-lg bg-white',
                className,
            )}
            {...props}>
            <div className='mx-auto my-3 h-2 w-[100px] rounded-full bg-black/20' />

            {children}
        </DrawerPrimitive.Content>
    </DrawerPortal>
))

export const DrawerHeader = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('grid gap-1.5 p-4 text-center sm:text-left', className)}
        {...props}
    />
)

export const DrawerFooter = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn('mt-auto flex flex-col gap-2 p-4', className)}
        {...props}
    />
)

export const DrawerTitle = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Title>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({className, ...props}, ref) => (
    <DrawerPrimitive.Title
        ref={ref}
        className={cn(
            'text-lg font-semibold leading-none tracking-tight',
            className,
        )}
        {...props}
    />
))

export const DrawerDescription = forwardRef<
    React.ElementRef<typeof DrawerPrimitive.Description>,
    React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({className, ...props}, ref) => (
    <DrawerPrimitive.Description
        ref={ref}
        className={cn('text-sm text-muted-foreground', className)}
        {...props}
    />
))
