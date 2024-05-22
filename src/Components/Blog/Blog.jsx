import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    return (
        <div>
            <img src={blog.cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-5'>
                <img className='w-12 border-yellow-900 border-2' src={blog.author_img} alt="" />
                <div>
                    <h3 className='text-2xl'>{blog.author}</h3>
                    <p className='text-xl'>{blog.posted_date}</p>
                </div>
                </div>
                <div>
                  <span>{blog.reading_time} min read</span>
                </div>
            </div>
            <h2 className="text-4xl">{blog.title}</h2>
            <p>
                {
                    blog.hashtags.map((hashtag,idx)=><span key={idx}><a href=''>{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;