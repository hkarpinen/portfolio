import SiteLayout from "../layout/SiteLayout.tsx";
import {ReactNode, useEffect} from "react";
import Container from "react-bootstrap/Container";

interface PageProps {
    children: ReactNode
    title: string
}

function Page({ children, title }: PageProps) {
  useEffect(() => {
    document.title = 'HKP - ' + title
  }, [title])

  return (
      <SiteLayout>
        <Container className='d-flex flex-grow-1 p-0'>
          {children}
        </Container>
      </SiteLayout>
  )
}

export default Page;