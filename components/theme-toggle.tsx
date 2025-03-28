"use client"

import { useState, useEffect } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const [theme, setTheme] = useState("light")

    useEffect(() => {
        setMounted(true)
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        const systemTheme = mediaQuery.matches ? "dark" : "light"
        setTheme(systemTheme)
        if (systemTheme === "dark") {
            document.documentElement.classList.add("dark")
        }
    }, [])

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
        document.documentElement.classList.toggle("dark")
    }

    // Prevent hydration mismatch by not rendering until mounted
    if (!mounted) {
        return null
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                buttonVariants({
                    variant: "outline",
                    size: "icon",
                }),
                "h-9 w-9 rounded-full"
            )}
        >
            {theme === "light" ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
        </button>
    )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
        </svg>
    )
} 