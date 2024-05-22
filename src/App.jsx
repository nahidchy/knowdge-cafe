import Blogs from "./Components/Blogs/Blogs"
import BookMark from "./Components/BookMark/BookMark"
import Header from "./Components/Header/Header"

function App() {

  return (
    <>
    <Header></Header>
    <div className="md:flex ">
    <Blogs></Blogs>
    <BookMark></BookMark>
    </div>
    </>
  )
}

export default App
