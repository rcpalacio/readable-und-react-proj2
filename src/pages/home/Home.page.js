import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as PostActions from '../../redux/Post.actions';

class HomePage extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="not-found-page">
                <header>Readable - Nanodegree udacity</header>
                <h1>Home page</h1>
                <ul>
                    {this.props.allPosts.map( (post) => (
                        <li key={post.id}>
                            {post.title}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

function mapStateToProps ({ posts }) {
    return {
        allPosts: posts.all
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchPosts: () => dispatch(PostActions.fetchAll()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)