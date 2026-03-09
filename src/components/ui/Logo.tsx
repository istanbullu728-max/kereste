"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
    return (
        <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
            {/* Logo Icon - Stacked Timber Logs Symbol */}
            <div className="relative flex items-center justify-center flex-shrink-0 w-10 h-10 md:w-12 md:h-12">
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                >
                    {/* Stylized 'Z' - Fixed Anthracite Color - Shifted up slightly for visual balance */}
                    <path
                        d="M15 35H70L25 75H70"
                        stroke="#1a1a1a"
                        strokeWidth="13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Stylized 'i' - Fixed Anthracite Color */}
                    <path
                        d="M84 50V75"
                        stroke="#1a1a1a"
                        strokeWidth="13"
                        strokeLinecap="round"
                    />
                    {/* Square dot for 'i' - Fixed Timber Highlight Color */}
                    <rect
                        x="78"
                        y="28"
                        width="13"
                        height="13"
                        fill="#8B5E3C"
                    />
                </svg>
            </div>

            {/* Logo Text */}
            <div className="flex flex-col items-start justify-center">
                <span className={cn(
                    "text-lg md:text-xl font-cinzel font-bold tracking-tight leading-tight whitespace-nowrap",
                    light ? "text-white" : "text-timber-anthracite"
                )}>
                    ZEYNEL İSTANBULLU
                </span>
                <div className="flex items-center w-full mt-0.5">
                    <span className={cn(
                        "h-[1px] flex-1 opacity-20",
                        light ? "bg-white" : "bg-timber-anthracite"
                    )}></span>
                    <span className={cn(
                        "text-[0.55rem] md:text-[0.6rem] font-sans font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase px-2",
                        light ? "text-white/80" : "text-timber-highlight"
                    )}>
                        KERESTE
                    </span>
                    <span className={cn(
                        "h-[1px] flex-1 opacity-20",
                        light ? "bg-white" : "bg-timber-anthracite"
                    )}></span>
                </div>
            </div>
        </div>
    );
}
