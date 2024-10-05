import {useAuth} from "../../context/authContext.tsx";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";

function AccountModal() {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  return (
      <>
        {loading && <p>Loading...</p>}
        {!loading && !user && <Button variant='secondary' onClick={() => navigate('/login')}>Login</Button>}
        {user && <>
            <Navbar.Text>
                Signed in as: <a href={`/user/${user.username}`}>{user.username}</a>
            </Navbar.Text>
            <Button variant='secondary' onClick={() => logout()}>Logout</Button>
        </>}
      </>
  )
}

export default AccountModal;