import Product from "./ModernCard/Product"
import UserCard from "./UserCard"

function App() {
  return (
    <div>
      <hr />
      <h4 className="mx-5 px-4">USER CARD COMPONENT</h4>
      <UserCard />
      <br />
      <hr />
      <h4 className="mx-5 px-4">E-COMMERCE CARD COMPONENT</h4>
      <Product />
    </div>
  )
}

export default App
