'use client'

import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
}

/**
 * Ghostly MediaPipe-style landmark visualization.
 * Floating dots ("landmarks") drift slowly and connect with thin lines
 * to their nearest neighbours, evoking a hand/pose skeleton.
 */
export function LandmarkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const activeCanvas = canvas
    const activeCtx = ctx

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let width = 0
    let height = 0
    let nodes: Node[] = []
    let raf = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const ACCENT = '124, 58, 237' // violet
    const BLUE = '59, 130, 246' // soft blue

    function resize() {
      width = activeCanvas.clientWidth
      height = activeCanvas.clientHeight
      activeCanvas.width = width * dpr
      activeCanvas.height = height * dpr
      activeCtx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(
        70,
        Math.max(28, Math.floor((width * height) / 26000)),
      )
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }))
    }

    const CONNECT_DIST = 150

    function frame() {
      activeCtx.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.hypot(dx, dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22
            activeCtx.strokeStyle = `rgba(${ACCENT}, ${alpha})`
            activeCtx.lineWidth = 0.6
            activeCtx.beginPath()
            activeCtx.moveTo(a.x, a.y)
            activeCtx.lineTo(b.x, b.y)
            activeCtx.stroke()
          }
        }
      }

      // landmark dots
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        const color = i % 4 === 0 ? BLUE : ACCENT
        activeCtx.beginPath()
        activeCtx.arc(n.x, n.y, 1.8, 0, Math.PI * 2)
        activeCtx.fillStyle = `rgba(${color}, 0.7)`
        activeCtx.fill()

        activeCtx.beginPath()
        activeCtx.arc(n.x, n.y, 5, 0, Math.PI * 2)
        activeCtx.fillStyle = `rgba(${color}, 0.08)`
        activeCtx.fill()
      }

      raf = requestAnimationFrame(frame)
    }

    resize()
    if (prefersReduced) {
      frame()
      cancelAnimationFrame(raf)
    } else {
      frame()
    }

    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}
