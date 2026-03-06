"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Logo Icon - Stacked Timber Logs Symbol */}
            <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 54, height: 54 }}>
                <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width={54} height={54}>

                    {/* === KABUK (Bark) - dış halka === */}
                    <circle cx="30" cy="30" r="27"
                        fill={light ? "rgba(80,50,25,0.85)" : "rgba(60,38,18,0.95)"}
                        stroke={light ? "rgba(255,255,255,0.3)" : "rgba(100,65,30,0.6)"}
                        strokeWidth="0.5"
                    />
                    {/* Kabuk dokusu - kısa radyal çizgiler */}
                    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
                        const rad = (deg * Math.PI) / 180;
                        const x1 = (30 + 24 * Math.cos(rad)).toFixed(4);
                        const y1 = (30 + 24 * Math.sin(rad)).toFixed(4);
                        const x2 = (30 + 27.5 * Math.cos(rad)).toFixed(4);
                        const y2 = (30 + 27.5 * Math.sin(rad)).toFixed(4);
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke={light ? "rgba(255,200,120,0.25)" : "rgba(140,90,40,0.5)"}
                            strokeWidth="1.5" strokeLinecap="round" />;
                    })}

                    {/* === ODUN DOKUSU arka plan === */}
                    <circle cx="30" cy="30" r="23.5"
                        fill={light ? "rgba(180,120,60,0.35)" : "rgba(210,155,80,0.9)"}
                    />

                    {/* === YILLIK HALKALAR (Annual Rings) === */}
                    <circle cx="30" cy="30" r="21"
                        stroke={light ? "rgba(255,200,120,0.7)" : "rgba(130,75,30,0.75)"}
                        strokeWidth="1.4" fill="none"
                    />
                    <circle cx="30" cy="30" r="16"
                        stroke={light ? "rgba(255,200,120,0.6)" : "rgba(130,75,30,0.65)"}
                        strokeWidth="1.2" fill="none"
                    />
                    <circle cx="30" cy="30" r="11"
                        stroke={light ? "rgba(255,200,120,0.55)" : "rgba(130,75,30,0.6)"}
                        strokeWidth="1.1" fill="none"
                    />
                    <circle cx="30" cy="30" r="6.5"
                        stroke={light ? "rgba(255,200,120,0.5)" : "rgba(130,75,30,0.55)"}
                        strokeWidth="0.9" fill="none"
                    />

                    {/* === RADYAL DAMAR ÇİZGİLERİ (Medullary rays) === */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                        const rad = (deg * Math.PI) / 180;
                        const x1 = (30 + 3 * Math.cos(rad)).toFixed(4);
                        const y1 = (30 + 3 * Math.sin(rad)).toFixed(4);
                        const x2 = (30 + 21 * Math.cos(rad)).toFixed(4);
                        const y2 = (30 + 21 * Math.sin(rad)).toFixed(4);
                        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke={light ? "rgba(255,200,120,0.18)" : "rgba(130,75,30,0.3)"}
                            strokeWidth="0.6" />;
                    })}

                    {/* === ÖZEK (Pith) - merkez nokta === */}
                    <circle cx="30" cy="30" r="3"
                        fill={light ? "rgba(255,180,80,0.9)" : "rgba(100,55,20,0.95)"}
                    />
                    <circle cx="30" cy="30" r="1.2"
                        fill={light ? "rgba(255,220,150,1)" : "rgba(60,30,10,1)"}
                    />
                </svg>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col items-center">
                <span className={cn(
                    "text-xl font-cinzel font-bold tracking-tight leading-none whitespace-nowrap",
                    light ? "text-white" : "text-timber-anthracite"
                )}>
                    ZEYNEL İSTANBULLU
                </span>
                <div className="flex items-center w-full mt-1.5">
                    <span className={cn(
                        "h-[1px] flex-1 opacity-30",
                        light ? "bg-white" : "bg-timber-anthracite"
                    )}></span>
                    <span className={cn(
                        "text-[0.6rem] font-sans font-bold tracking-[0.4em] uppercase px-2",
                        light ? "text-white/80" : "text-timber-highlight"
                    )}>
                        KERESTE
                    </span>
                    <span className={cn(
                        "h-[1px] flex-1 opacity-30",
                        light ? "bg-white" : "bg-timber-anthracite"
                    )}></span>
                </div>
            </div>
        </div>
    );
}
