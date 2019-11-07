import React, { Component, useState } from 'react';

const DisplayName = ({ name }) => {
    const [color, setColor] = useState(true);
    const handlerToggleColor = () => {
        setColor(!color)
    }
    return (
        <li style={{ color: color ? 'red' : 'green'}}>
        {name}
        <button onClick={handlerToggleColor}>Cambio color</button>
        </li>
    );
}

/*
class DisplayName extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: true,
        }
    }

    handlerToggleColor = () => {
        this.setState((prevState) => {
            return {
                color: !prevState.color,
            };
        })
    }

    render() {
        const { name } = this.props;
        const { color } = this.state;
        return (
            <li style={{ color: color ? 'red' : 'green'}}>
            {name}
            <button onClick={this.handlerToggleColor}>Cambio color</button>
            </li>
        );
    }
}
*/

export default DisplayName;

