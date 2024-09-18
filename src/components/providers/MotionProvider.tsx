'use client'

import {LazyMotion} from '@/lib/motion'

interface MotionProviderProps {
    children?: React.ReactNode
}

const loadMotionFeatures = async () =>
    (await import('@/lib/motion/features')).default

const MotionProvider: React.FC<MotionProviderProps> = ({children}) => (
    <LazyMotion strict features={loadMotionFeatures}>
        {children}
    </LazyMotion>
)

export default MotionProvider
