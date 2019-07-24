import React from 'react';


function Comment({data}){
    return (

        <div className={data.level===0 ? 'top-comment' : 'comment'  }>
            <div className={"comment-content" + (data.level > 0 ? ' ribbon-' + ((data.level-1) % 8 + 1) : '')}>
                <p>
                    <span><i className="fa fa-user"></i>{data.user}</span> - {data.time_ago}
                </p>
                <span dangerouslySetInnerHTML={{ __html: data.content }}></span>
            </div>
            {data.comments.map((o, i)=><Comment key={o.id} data={o} />)}
        </div>

    );
}

export default Comment;