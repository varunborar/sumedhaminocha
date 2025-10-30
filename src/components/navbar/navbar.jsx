"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Menu, X } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function NavBar() {
    const [open, setOpen] = React.useState(false)

    return (
        <header className="w-full border-b sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between relative">
                <Link href="/" className="text-base md:text-lg font-semibold tracking-tight">
                    Sumedha Minocha
                </Link>
                {/* Desktop navigation */}
                <NavigationMenu className="hidden md:flex justify-end">
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/research">Research</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <Link href="/cv">CV</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <Collapsible open={open} onOpenChange={setOpen}>
                        <CollapsibleTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Toggle menu">
                                {open ? <X className="size-5" /> : <Menu className="size-5" />}
                            </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:slide-in-from-top-2 data-[state=closed]:slide-out-to-top-2 data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0">
                            <div className="absolute left-0 right-0 top-full mt-2 rounded-md border bg-background shadow-md z-50">
                                <nav className="flex flex-col p-2">
                                    <Link href="/" className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground" onClick={() => setOpen(false)}>
                                        Home
                                    </Link>
                                    <Link href="/research" className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground" onClick={() => setOpen(false)}>
                                        Research
                                    </Link>
                                    <Link href="/cv" className="rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground" onClick={() => setOpen(false)}>
                                        CV
                                    </Link>
                                </nav>
                            </div>
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </header>
    )
}

