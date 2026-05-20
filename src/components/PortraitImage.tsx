import { profile } from '../data/profile'
import { images } from '../lib/images'

const sizeClasses = {
  xs: 'size-9 shrink-0',
  sm: 'size-24',
  md: 'size-56 sm:size-64',
  lg: 'size-64 sm:size-72 md:size-80',
  xl: 'size-72 sm:size-80 md:size-96',
} as const

type PortraitSize = keyof typeof sizeClasses

type Props = {
  size?: PortraitSize
  shape?: 'circle' | 'square'
  className?: string
  ring?: boolean
}

const shapeClasses = {
  circle: 'rounded-full',
  square: 'rounded-2xl aspect-square',
} as const

export function PortraitImage({
  size = 'md',
  shape = 'circle',
  className = '',
  ring = true,
}: Props) {
  return (
    <img
      src={images.portrait}
      alt={`${profile.fullName} — ${profile.title}`}
      width={384}
      height={384}
      className={`object-cover object-center shadow-xl shadow-black/50 ${shapeClasses[shape]} ${ring ? 'ring-2 ring-[#0084ff]/40 ring-offset-2 ring-offset-[#050a18]' : ''} ${sizeClasses[size]} ${className}`}
    />
  )
}
