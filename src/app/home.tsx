"use client"
import { useEffect, useState } from 'react'
import HeroSection from '../components/sections/Hero'
import dynamic from 'next/dynamic'

const StatsSection = dynamic(() => import('../components/sections/Stats'), { ssr: false })
const ProveSection = dynamic(() => import('../components/sections/Prove'), { ssr: false })
const ServicesSection = dynamic(() => import('../components/sections/Services'), { ssr: false })
const StatsRepriseSection = dynamic(() => import('../components/sections/StatsReprise'), { ssr: false })

function DeferredBelowTheFold() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    let id: ReturnType<typeof setTimeout> | undefined

    if ('requestIdleCallback' in window) {
      id = (window as any).requestIdleCallback(() => setShow(true))
    } else {
      // fallback if requestIdleCallback not available
      id = globalThis.setTimeout(() => setShow(true), 1500)
    }

    return () => {
      if (typeof window === 'undefined') return
      if ('cancelIdleCallback' in window && id !== undefined) {
        ;(window as any).cancelIdleCallback(id)
      } else if (id !== undefined) {
        globalThis.clearTimeout(id)
      }
    }
  }, [])

  if (!show) return null

  return (
    <>
      <StatsSection />
      <ProveSection />
      <ServicesSection />
      <StatsRepriseSection />
    </>
  )
}

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center text-center font-poppins">
      <HeroSection />
      <DeferredBelowTheFold />
    </main>
  );
}