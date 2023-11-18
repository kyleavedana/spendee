'use client'
import CenteredTabs from "@/components/tabs"
export default function CategoriesLayout(
  { children }:
  { children: React.ReactNode }
) {
  return (
    <html lang="en">
      <body>
        <CenteredTabs />
        {children}
      </body>
    </html>
  )
}