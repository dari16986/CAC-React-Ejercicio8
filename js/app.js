'use strict'; //

const ReactElement = React.createElement;

export default class Button extends React.Component {
    render() {
        return ReactElement(
            'button',
            {},
            'Boton hecho sin React Dev Environment'
        );
    }
}

const domContainer = document.getElementById("myApp");
ReactDOM.render(ReactElement(Button) , domContainer);