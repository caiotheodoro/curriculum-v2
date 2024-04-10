import { LayoutProps } from "@/@types/common";
import { Analytics } from "@vercel/analytics/react"
export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (<>
  <Analytics/>
  {children}
  </>);
}
