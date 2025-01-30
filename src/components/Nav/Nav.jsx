import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'


const Nav = (props) => {

  const navigate = useNavigate()

  return (
    <>
      <nav class="nav">
        {props.user?
        <>
        <div class='nav-div'>
          <button onClick={() => navigate('/newDrink')}>New Drink</button>
          <Link to={"/"}>
          <h2>G-S ADMIN</h2>
          </Link>
          <button>Log out</button>
        </div>
        </>
        :
        <h3>If you do not know what this is youre in the wrong place.</h3>
        }
      </nav>
    </>
  )
}

export default Nav