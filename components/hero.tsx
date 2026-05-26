"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-building.png"
          alt="Modern building exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16 relative z-10 flex-grow flex flex-col justify-center min-h-0 overflow-hidden">
        <div className="max-w-4xl">
          <p className="text-primary-foreground uppercase tracking-widest text-[10px] sm:text-xs mb-2 sm:mb-4">
            {t.hero.tagline}
          </p>

          <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-background/95 leading-tight mb-4 sm:mb-6">
            <span className="block">{t.hero.title}</span>
            <span className="block">{t.hero.titleHighlight}</span>
          </h1>

          <p className="text-background/90 text-sm sm:text-base md:text-lg max-w-xl mb-6 sm:mb-8 leading-relaxed line-clamp-2 sm:line-clamp-none">
            {t.hero.description}
          </p>

          <div className="flex flex-row gap-4 mb-2 sm:mb-0">
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="uppercase tracking-wide bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-6"
            >
              <Link href="#projects">
                {t.hero.ctaSecondary}
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="sm"
              variant="secondary"
              className="uppercase tracking-wide text-xs sm:text-sm px-4 py-2 sm:px-6 sm:py-6"
            >
              <Link href="#contact">
                {t.hero.cta}
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative left-0 right-0 z-20 bg-background/95 backdrop-blur-sm border-t border-border/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">13</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.years}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">200+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.projects}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">7</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.countries}</p>
            </div>
            <div className="text-center">
              <p className="font-serif text-3xl md:text-4xl text-primary">2</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wide mt-1">{t.hero.stats.warranty}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
