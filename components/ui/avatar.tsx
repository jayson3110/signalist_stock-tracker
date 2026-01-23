"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

/**
 * Render a styled avatar root element with default sizing and rounded appearance.
 *
 * @param className - Additional CSS class names to merge with the component's default styles
 * @returns The underlying AvatarPrimitive.Root element with default layout, sizing, and rounded styling; forwards all other props to the root element
 */
function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      )}
      {...props}
    />
  )
}

/**
 * Renders a Radix Avatar Image element with standardized avatar sizing and slot attributes.
 *
 * @returns A JSX element rendering an avatar image with default "aspect-square size-full" styles, the `data-slot="avatar-image"` attribute, and any forwarded props and additional class names.
 */
function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  )
}

/**
 * Renders a styled avatar fallback element used when an image is unavailable.
 *
 * Merges the provided `className` with the component's default fallback styles and forwards all other props to `AvatarPrimitive.Fallback`. The rendered element includes `data-slot="avatar-fallback"`.
 *
 * @param className - Additional CSS classes to append to the default fallback styling
 * @param props - Remaining props forwarded to `AvatarPrimitive.Fallback`
 * @returns The `AvatarPrimitive.Fallback` element with default styling, merged classes, and `data-slot="avatar-fallback"`
 */
function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }