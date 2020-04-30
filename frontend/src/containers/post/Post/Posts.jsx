import React, { useEffect } from 'react'
import { getAllPosts } from '../../../redux/actions/posts'
import { connect } from 'react-redux'
const Posts = ({posts}) => {
    useEffect(() => {
        getAllPosts();
    }, [])
    return (
        <div>
            {posts?.map(post=><div>{post.message}</div>)}
        </div>
    )
}
const mapStateToProps = ({post}) => ({posts:post.posts});
export default connect(mapStateToProps) (Posts);