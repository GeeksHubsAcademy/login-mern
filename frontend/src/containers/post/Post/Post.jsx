import React from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import { deleteOne } from '../../../redux/actions/posts';
const Post = ({post}) => {
    return (
        <div className="post">
            <span>
            {post.message}</span>
            <DeleteOutlined onClick={deleteOne.bind(this,post._id)} />
            </div>
    )
}
export default Post;