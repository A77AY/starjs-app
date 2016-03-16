import React from 'react'
import {Logo} from '_/components'

export default class App extends React.Component {

    static title = 'StarJS App';

    render() {
        return (
            <div>
                <header>
                    <Logo/>
                </header>
                <article>{this.props.children}</article>
                <footer>&copy; 2016 StarJS App</footer>
            </div>
        );
    }
}