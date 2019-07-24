import React from 'react';
import {Link} from 'react-router-dom';

function PostListItem(props) {
    return (
        <div className="post-item">
            <span className="post-rank">{props.rank}</span>
            <div className="post-content">
                <a href={props.data.url} target="_blank" rel="noopener noreferrer"><h3>{props.data.title}</h3></a>
                <span className="post-domain">{props.data.domain}</span>
                <div className="post-info">
                    <span><i className="fa fa-user" ></i>{props.data.user}</span>
                    <span><i className="fa fa-chevron-up"></i>{props.data.points}</span>
                    <Link to={`/post/${props.data.id}`}>
                        <span><i className="fa fa-comments"></i>{props.data.comments_count}</span>
                    </Link>
                    <span><i className="fa fa-hourglass-start"></i>{props.data.time_ago}</span>
                </div>
            </div>

            {/* {!props.data.isPostTitle ?
                <Link to={`/post/${props.data.id}`}>
                    <span className="post-comment"><i className="fa fa-comments"></i></span>
                </Link>  : ''
            } */}

        </div>
    );
}

export default PostListItem;