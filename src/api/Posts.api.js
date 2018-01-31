import ApiService from './Api.service';

export default class PostsApi {
    static getAll = () => ApiService.get('posts');
}