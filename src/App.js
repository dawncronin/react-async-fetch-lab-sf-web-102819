// create your App component here
import React from 'react';
import { render } from 'enzyme';

export default class App extends React.Component {

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(res => res.json)
    }



    render() {
        return (
            <div> hi </div>

        )
    }
}