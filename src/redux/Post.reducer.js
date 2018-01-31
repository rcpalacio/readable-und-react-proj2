import {TYPES} from "./Post.actions";

const initialPostsState = {
    all: [],
};

export default function PostReducer(state = initialPostsState, action) {
    switch (action.type){
        case TYPES.RECEIVE_POSTS :
            return {
                ...state,
                all: action.posts,
            };
        default :
            return state
    }
}
