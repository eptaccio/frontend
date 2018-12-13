import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = ({ children }) => (
  <div>
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <a className='navbar-brand' href='#'>Metupera</a>
      <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarText' aria-controls='navbarText' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon' />
      </button>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <a className='nav-link' href='/talks'>My talks</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='/speakers'>Speakers</a>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a className='nav-link' href='/groups'>My groups</a>
          </li>
        </ul>
      </div>
    </nav>
    <div className='container'>
      <div className='Page'>
        {children}
      </div>
    </div>
  </div>
)

export default Page
