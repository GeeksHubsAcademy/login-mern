import React, { useEffect, useState } from 'react';
import { getAllPosts, insert } from '../../../redux/actions/posts';
import { connect } from 'react-redux';
import { Skeleton, Pagination } from 'antd';
import Post from '../Post/Post.jsx';
import './PostList.scss'
const Posts = ({ posts }) => {
    const [loading, setLoading] = useState(true);
    const [totalPosts, settotalPosts] = useState(5);
    const [totalPages, settotalPages] = useState(5);
    useEffect(() => {
        getAllPosts(0)
            .then(res => {
                settotalPosts(res.data.totalPosts);
                settotalPages(res.data.pages);
            })
            .catch(console.error)
            .finally(() => setLoading(false))
    }, []);
    const handleSubmit = event => {
        event.preventDefault();
        event.persist();
        let message = event.target.message.value
        setLoading(true)
        insert({ message })
            .then(res => {
                settotalPosts(res.data.totalPosts);
                settotalPages(res.data.pages);
            })
            .then(() => event.target?.reset())
            .finally(() => setLoading(false))
    }
    const onPageChange = value => getAllPosts(value - 1)
        .finally(() => setLoading(false))
    return (
        <div className="postListContainer">
            <Pagination defaultCurrent={1} defaultPageSize={totalPages}
                total={totalPosts} onChange={onPageChange} />
            <Skeleton loading={loading} active>
                {posts?.map(post => <Post key={post._id} post={post} />)}
            </Skeleton>
            <form onSubmit={handleSubmit}>
                <textarea name="message"></textarea>
                <button className="primary">Send Post</button>
            </form>

        </div>
    )
}
const mapStateToProps = ({ post }) => ({ posts: post.posts });
export default connect(mapStateToProps)(Posts);