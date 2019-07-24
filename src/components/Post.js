import React from 'react';
import axios from 'axios';
import Comment from './Comment';
import PostListItem from './PostListItem';


export default class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            comments: [],
        }
        axios.get(`https://node-hnapi.herokuapp.com/item/${this.props.match.params.id}`)
            .then(res => {
                if (res.status !== 200) {
                    console.error(res);
                    return;
                }

                console.log(res.data);
                this.setState(res.data);
                document.title = this.state.title;
            })
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        return (
            <div className="container">
                <PostListItem data={{ ...this.state, isPostTitle: true }} rank={0}></PostListItem>
                {this.state.comments.map((o, i) => <Comment key={o.id} data={o}></Comment>)}
            </div>
        );
    }
}