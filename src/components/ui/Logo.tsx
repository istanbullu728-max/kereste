"use client";

import React from 'react';
import { cn } from "@/lib/utils";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {/* Logo Icon - Stacked Timber Logs Symbol */}
            <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: 54, height: 54 }}>
                <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width={54}
                    height={54}
                >
                    {/* Stylized 'Z' - Fixed Anthracite Color */}
                    <path
                        d="M15 40H70L25 80H70"
                        stroke="#1a1a1a"
                        strokeWidth="13"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Stylized 'i' - Fixed Anthracite Color */}
                    <path
                        d="M84 55V80"
                        stroke="#1a1a1a"
                        strokeWidth="13"
                        strokeLinecap="round"
                    />
                    {/* Square dot for 'i' - Fixed Timber Highlight Color */}
                    <rect
                        x="78"
                        y="33"
                        width="13"
                        height="13"
                        fill="#8B5E3C"
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
