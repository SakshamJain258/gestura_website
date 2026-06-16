import Image from 'next/image'
import { cn } from '@/lib/utils'
import { siteLinks } from '@/lib/site-links'

type GesturaLogoProps = {
  className?: string
  size?: number
}

export function GesturaLogo({ className, size = 28 }: GesturaLogoProps) {
  return (
    <Image
      src={siteLinks.logo}
      alt="Gestura"
      width={size}
      height={size}
      className={cn('rounded-lg object-contain', className)}
      priority
    />
  )
}
