import React from 'react';
import axios from 'axios';
import PostListItem from './PostListItem'
import Paging from './Paging';
import Spinner from './Spinner';
import NavBar from './Navbar';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        document.title = 'HNews';

        let params = new URLSearchParams(props.location.search);
        let page = params.get('p') !== null ? parseInt(params.get('p')) : 1;
        this.state = {
            posts: [],
            page: Math.max(page, 1),
        };
        this.fetchNewPage();
    }

    render() {
        return (
            <div className="page-container">
                <NavBar title="HW News" refreshPage={this.fetchNewPage.bind(this)} />
                <div className="container">
                    {this.state.posts.length > 0 ?
                        <div>
                            <ul className="news-list">
                                {this.state.posts.map((o, i) => <li><PostListItem key={o.id} rank={30 * (this.state.page - 1) + i} data={o} history={this.props.history}></PostListItem></li>)}
                            </ul>
                            <Paging page={this.state.page} nextPage={this.nextPage.bind(this)} prevPage={this.prevPage.bind(this)}></Paging>
                        </div>
                        :
                        <Spinner />
                    }
                </div>
            </div>
        );
    }

    // called when url params is updated
    componentWillReceiveProps(newProps) {
        let params = new URLSearchParams(newProps.location.search);
        let page = params.get('p') !== null ? parseInt(params.get('p')) : 1;
        this.setState({
            posts: [],
            page: Math.max(page, 1),
        }, this.fetchNewPage);
    }

    nextPage() {
        this.props.history.push(`/?p=${this.state.page + 1}`);
    }

    prevPage() {
        this.props.history.push(`/?p=${Math.max(this.state.page - 1, 1)}`);
    }

    fetchNewPage() {
        this.setState({
            posts: [],
        });

        axios.get('https://node-hnapi.herokuapp.com/news', {
            params: {
                page: this.state.page,
            }
        })
            .then(res => {
                if (res.status !== 200) {
                    console.error(res);
                    return;
                }

                console.log(res.data);
                this.setState({
                    posts: res.data,
                });
            })
            .catch(err => {
                console.error(err);
            });
    }
}