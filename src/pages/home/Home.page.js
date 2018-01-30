import React, {Component} from 'react';

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <div className="not-found-page">
                <header>Readable - Nanodegree udacity</header>
                <h1>Home page</h1>
            </div>
        );
    }
}