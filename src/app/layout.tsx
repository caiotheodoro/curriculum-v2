import { LayoutProps } from "@/@types/common";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (<>
  <Analytics/>
  <SpeedInsights/>
  {children}
  </>);
}
