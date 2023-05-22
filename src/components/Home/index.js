import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div data-testid="loader">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home