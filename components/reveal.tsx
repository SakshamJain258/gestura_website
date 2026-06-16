'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type RevealProps = {
  children: ReactNode
  className?: string
  /** delay in ms before the reveal transition starts */
  delay?: number
  as?: 'div' | 'section' | 'li' | 'span'
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const show = () => {
      el.classList.add('is-visible')
    }

    const isInView = () => {
      const rect = el.getBoundingClientRect()
      if (rect.height <= 0) return false

      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight
      const visibleHeight =
        Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)

      return visibleHeight > 0 && visibleHeight / rect.height >= 0.1
    }

    if (isInView()) {
      show()
      return
    }

    el.classList.add('reveal-init')

    if (typeof IntersectionObserver === 'undefined') {
      show()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show()
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(el)

    const onHashChange = () => {
      window.requestAnimationFrame(() => {
        if (!el.classList.contains('is-visible') && isInView()) {
          show()
          observer.unobserve(el)
        }
      })
    }

    window.addEventListener('hashchange', onHashChange)

    const layoutTimer = window.setTimeout(() => {
      if (!el.classList.contains('is-visible') && isInView()) {
        show()
        observer.unobserve(el)
      }
    }, 150)

    const fallbackTimer = window.setTimeout(() => {
      if (!el.classList.contains('is-visible')) {
        show()
        observer.unobserve(el)
      }
    }, 2500)

    return () => {
      observer.disconnect()
      window.removeEventListener('hashchange', onHashChange)
      window.clearTimeout(layoutTimer)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  return (
    <Tag
      // @ts-expect-error - ref typing across polymorphic tags
      ref={ref}
      className={cn('reveal', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}
