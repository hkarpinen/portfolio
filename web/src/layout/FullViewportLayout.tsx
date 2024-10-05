import SiteLayout from "./SiteLayout.tsx";
import {ReactNode} from "react";

interface AppLayoutProps {
  children: ReactNode,
  fullWidth?: boolean
}

function FullViewportLayout({ children, fullWidth }: AppLayoutProps) {
  return (
      <SiteLayout fullWidth={fullWidth}>
        {children}
      </SiteLayout>
  )
}

export default FullViewportLayout;