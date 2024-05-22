import PropTypes from 'prop-types'; 
const Blog = ({blog}) => {
    return (
        <div>
            <img src={blog.cover} alt="" />
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;