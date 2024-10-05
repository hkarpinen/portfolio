import Page from "./Page.tsx";
import Container from "react-bootstrap/Container";

function PageNotFound() {
  return (
      <Page title={'404'}>
        <Container className='d-flex flex-column flex-grow-1 align-items-center justify-content-center'>
          <h4 className='text-decoration-underline'>Oops, something went wrong. We could not find the page you are looking for.</h4>
        </Container>
      </Page>
  )
}

export default PageNotFound