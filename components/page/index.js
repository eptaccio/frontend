import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Page = ({ children }) => (
  <div className='container'>
    <div className='Page'>
      {children}
    </div>
  </div>
)

export default Page
