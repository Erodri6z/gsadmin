import './Nav.css'
import { useNavigate } from 'react-router-dom'


const Nav = (props) => {
  const user = props.user

  const navigate = useNavigate()
  return (
    <>
      <nav class="nav">
        {user?
        <>
        <div class='nav-div'>
          <button onClick={navigate('/newDrink')}>New Drink</button>
          <h2>G-S ADMIN</h2>
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