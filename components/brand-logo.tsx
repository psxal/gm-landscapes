type BrandLogoProps = {
  className?: string
}

/**
 * GM Landscapes brand mark: a stylized garden scene with a tree
 * and rolling ground line inside a rounded badge. Uses currentColor
 * so it inherits the badge's foreground color.
 */
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* tree canopy */}
      <path d="M12 3.2c-2.4 0-4.2 1.9-4.2 4.1 0 .5.1 1 .3 1.5A3.4 3.4 0 0 0 9 15.2h6a3.4 3.4 0 0 0 .9-6.4c.2-.5.3-1 .3-1.5 0-2.2-1.8-4.1-4.2-4.1Z" />
      {/* trunk */}
      <path d="M12 15.2v4" />
      {/* rolling ground line */}
      <path d="M3.5 19.4c2 0 2.6-1.4 4.6-1.4s2.6 1.4 4.6 1.4 2.6-1.4 4.6-1.4c1 0 1.6.35 2.6.7" />
    </svg>
  )
}
