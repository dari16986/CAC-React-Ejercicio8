'use strict'; //

const ReactElement = React.createElement;

export default class Button extends React.Component {
    render() {
        return ReactElement(
            'button',
            {},
            'Super Boton'
        );
    }
}

const domContainer = document.getElementById("myApp");
ReactDOM.render(ReactElement(Button) , domContainer);