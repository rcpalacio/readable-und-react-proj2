import PostsApi from '../api/Posts.api';

export const TYPES = {
    RECEIVE_POSTS: "RECEIVE_POSTS"
};

export const receivePosts = posts => ({
    type: TYPES.RECEIVE_POSTS,
    posts
});

export const fetchAll = () => dispatch => (
    PostsApi
        .getAll()
        .then(posts => {
            console.log('Received Posts:', posts);
            dispatch(receivePosts(posts));
        })
);