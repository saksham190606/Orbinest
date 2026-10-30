'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Interactive 3D
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Bring your UI to life with beautiful 3D scenes. Create immersive experiences 
            that capture attention and enhance your design.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

export function SplineSceneOrbinest() {
  return (
    <Card className="w-full min-h-[500px] bg-black/[0.96] relative overflow-hidden rounded-3xl border border-white/10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <span className="text-xs font-mono font-medium text-emerald-400 uppercase tracking-widest mb-2">
            Orbinest Studio • 3D Engineering
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Next-Gen Interactive 3D
          </h2>
          <p className="mt-4 text-neutral-300 text-sm md:text-base max-w-lg leading-relaxed">
            Elevate your brand with immersive 3D digital experiences. Engineered with Next.js 16,
            React 19, and sub-second load times tailored for institutes, brands, and clinics.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#packages"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 text-xs font-semibold text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]"
            >
              Explore Packages
            </a>
            <a
              href="#estimator"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 px-5 py-2.5 text-xs font-medium text-neutral-200 transition-all"
            >
              Cost Estimator
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[350px] md:min-h-full">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full min-h-[350px]"
          />
        </div>
      </div>
    </Card>
  )
}

