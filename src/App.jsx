import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import BookMark from "./Components/BookMark/BookMark"
import Header from "./Components/Header/Header"

function App() {
    const [booksMark,setBooksMark] = useState([]);
    const [readingTime,setReadingTime] = useState(0);

    const handleBookMark=(blog)=>{
      const newBooksMark = [...booksMark,blog];
      setBooksMark(newBooksMark);
    }
    const handleMarkAsRead =(id,time)=>{
       setReadingTime(readingTime + time);
       console.log("dsjlfk g", id);
       const remainingBookMarks = booksMark.filter(book => book.id !== id)
         setBooksMark(remainingBookMarks);
    }
    
  return (
    <>
    <Header></Header>
    <div className="md:flex justify-between max-w-7xl mx-auto gap-5">
    <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark} readingTime={readingTime}></Blogs>
    <BookMark readingTime={readingTime} booksMark={booksMark} className=""></BookMark>
    </div>
    </>
  )
}

export default App
