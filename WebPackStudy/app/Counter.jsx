import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Counter.css';

console.log('STYLES', styles);

// ES7 decorator syntax is optional.
//@CSSModules(styles)

class Counter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            counter : 0
        }
    }

    handlerClick(){

        this.setState({
            counter: this.state.counter + 1
        });
    }
    render(){
        return (
            <div styleName="showCounter">
                <h1>{this.state.counter}</h1>
                <button onClick={this.handlerClick.bind(this)}>Click me</button>
            </div>
        )
    }
}

Counter.defaultProperties = {

}

export default CSSModules(Counter, styles);