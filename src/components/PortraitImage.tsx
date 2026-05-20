import { profile } from '../data/profile'
import { images } from '../lib/images'

const sizeClasses = {
  xs: 'size-9 shrink-0',
  sm: 'size-24',
  md: 'size-56 sm:size-64',
  lg: 'size-64 sm:size-72 md:size-80',
} as const

type PortraitSize = keyof typeof sizeClasses

type Props = {
  size?: PortraitSize
  className?: string
  ring?: boolean
}

export function PortraitImage({ size = 'md', className = '', ring = true }: Props) {
  return (
    <img
      src={images.portrait}
      alt={`${profile.fullName} — ${profile.title}`}
      width={320}
      height={320}
      className={`rounded-full object-cover object-center shadow-xl shadow-black/50 ${ring ? 'ring-2 ring-[#0084ff]/40 ring-offset-2 ring-offset-[#050a18]' : ''} ${sizeClasses[size]} ${className}`}
    />
  )
}
