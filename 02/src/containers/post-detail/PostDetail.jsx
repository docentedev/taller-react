import React from 'react';
// ROUTER
//import { Link } from 'react-router-dom';

const PostDetail = (props) => {
    const { id, parentId } = props.match.params;
    return (
        <div className="post-detail">
            {id} - {parentId}
        </div>
    );
};

export default PostDetail;