import React, {Component} from 'react';

export default class NotFoundPage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="not-found-page">
                <header>Readable - Nanodegree udacity</header>
                <h1>A página que você procura não foi encontrada.</h1>
            </div>
        );
    }
}