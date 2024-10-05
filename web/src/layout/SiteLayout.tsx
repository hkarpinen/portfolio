import Container from "react-bootstrap/Container";
import SitePrimaryNavbar from "../components/nav/SitePrimaryNavbar.tsx";
import {ReactNode} from "react";

interface SiteLayoutProps {
    children: ReactNode,
    fullWidth?: boolean
}

function SiteLayout({ children, fullWidth }: SiteLayoutProps) {
  return (
      <>
        <header className='sticky-top'>
          <Container fluid className='p-0'>
            <SitePrimaryNavbar fullWidth={fullWidth} />
          </Container>
        </header>
        <main className='flex-grow-1'>
          <Container fluid className='d-flex flex-column h-100'>
            {children}
          </Container>
        </main>
        <footer>
          <Container fluid className='bg-secondary'>
            <p className='m-0 p-1 text-white'>Footer</p>
          </Container>
        </footer>
      </>
  )
}

export default SiteLayout;