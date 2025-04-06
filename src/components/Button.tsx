"use client"
import React from "react";
import {cn} from "@/lib/utils";

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "destructive" | "outline"
  size?: "default" | "sm" | "lg"
  as?: "button" | "a"
  href?: string
  target?: string
}

const BrutalistButton = React.forwardRef<HTMLButtonElement, BrutalistButtonProps>(
  ({className, variant = "primary", size = "default", as = "button", href, target, ...props}, ref) => {
    const baseStyle = cn(className, "font-mono uppercase tracking-wider transition-all duration-200 transform " +
      "active:translate-y-1 active:translate-x-1 active:shadow-none border-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      {
        "px-6 py-3 text-lg": size === "default",
        "px-4 py-2 text-sm": size === "sm",
        "px-8 py-4 text-xl": size === "lg",
      },
      {
        "bg-yellow-400 hover:bg-yellow-300 border-black text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]":
          variant === "primary",
        "bg-purple-600 hover:bg-purple-500 border-black text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]":
          variant === "secondary",
        "bg-red-600 hover:bg-red-500 border-black text-white hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]":
          variant === "destructive",
        "bg-white hover:bg-gray-100 border-black text-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]":
          variant === "outline",
      })
    if (as === "a" && href) {
      return (<a className={baseStyle} href={href} target={target} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {props.children}
      </a>)
    }
    return (
      <button className={baseStyle} ref={ref} {...props}/>
    )
  }
)

BrutalistButton.displayName = "BrutalistButton";

export default BrutalistButton;