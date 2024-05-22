import PropTypes from 'prop-types'; 
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleBookMark,handleMarkAsRead,readingTime}) => {
    return (
        <div className='mb-20 w-5/6'>
            <img className='w-full rounded-lg mb-8' src={blog.cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-5'>
                <img className='w-12 border-yellow-900 border-2' src={blog.author_img} alt="" />
                <div>
                    <h3 className='text-2xl font-semibold'>{blog.author}</h3>
                    <p className='font-medium text-gray-400'>{blog.posted_date}</p>
                </div>
                </div>
                <div className='flex justify-center items-center'>
                  <span className='text-gray-500'>{blog.reading_time} min read</span>
                  <button onClick={()=>handleBookMark(blog)} className='ml-2 text-2xl'><CiBookmark/></button>
                </div>
            </div>
            <h2 className="text-4xl font-medium">{blog.title}</h2>
            <p className='text-blue-400 opacity-80'>
                {
                    blog.hashtags.map((hashtag,idx)=><span key={idx}><a href=''>{hashtag}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(blog.reading_time)} className='text-purple-800 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookMark:PropTypes.func
}
export default Blog;