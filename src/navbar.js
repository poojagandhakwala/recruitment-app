import styles from './home.modules.css'

function Navbar() {
  return (
    <div>
       <nav className={`navbar ${styles.navbar} w-100 text-dark my-3 navbar-expand-lg`}>
        <ul className={`navbar-nav `}>
          <li className='nav-item'>
            <a href="/" className='nav-link'>LOGO</a>
          </li>
        </ul>
        <div className='container-fluid'>
          <ul className={`navbar-nav `}>
            <li className='nav-item'>
              <a href="/" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
              <a href="/hirenow" className='nav-link'>Hire Now</a>
            </li>            
            <li className='nav-item'>
              <a href="/" className='nav-link'>About</a>
            </li>            
            <li className='nav-item'>
              <a href="/login" className='nav-link'>Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar