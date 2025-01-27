import './Nav.css'

const Nav = (props) => {
  const user = props.user

  return (
    <>
      <nav class="nav">
        {user?
        <>
        <div class='nav-div'>
          <button>New Drink</button>
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