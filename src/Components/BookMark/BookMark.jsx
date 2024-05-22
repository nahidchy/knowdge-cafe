import Book from "../Book/Book";

const BookMark = ({booksMark,readingTime}) => {
    return (
        <div className="1/3">
             <h2 className="text-2xl font-semibold text-blue-500 border-blue-700 border-4 p-2 mb-5">Spent time on read : {readingTime} min</h2>
            <h2 className="text-4xl font-bold mb-5">Book Mark</h2>
            <h3 className="text-2xl font-medium">Book mark blog: {booksMark.length}</h3>
            {
               booksMark.map((book,idx) => <Book key={idx} book={book}></Book>)
            }
        </div>
    );
};

export default BookMark;