import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {
    // eslint-disable-next-line
    const elements = posts.map((item) => {
        if (typeof item === 'object' && !isEmpty(item)) {
            const {id, ...itemProps}= item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem {...itemProps}
                     onDelete={() => onDelete(id)}
                     onToggleImportant={() => onToggleImportant(id)}
                     onToggleLiked={() => onToggleLiked(id)} />
                </li>
            )
        }
    });

    function isEmpty(obj) {
        for(let key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }
    
    return (
        <ListGroup className="app-list">
           {elements}
        </ListGroup>
    )
}

export default PostList;