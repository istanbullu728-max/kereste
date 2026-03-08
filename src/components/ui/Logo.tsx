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
                    className="transition-colors duration-300"
                >
                    {/* Stylized 'Z' */}
                    <path
                        d="M20 30H80L35 70H80"
                        stroke={light ? "white" : "var(--color-timber-anthracite)"}
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Stylized 'i' next to 'Z' */}
                    <path
                        d="M85 45V70"
                        stroke={light ? "white" : "var(--color-timber-anthracite)"}
                        strokeWidth="12"
                        strokeLinecap="round"
                    />
                    {/* Square dot for 'i' */}
                    <rect
                        x="79"
                        y="24"
                        width="12"
                        height="12"
                        fill={light ? "white" : "var(--color-timber-highlight)"}
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
