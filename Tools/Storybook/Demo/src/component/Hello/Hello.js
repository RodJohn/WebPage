import React, {Component, PropTypes} from 'react';

class Hello extends Component {

    render() {
        const {words} = this.props;
        return (
            <div className="hello">
                Hello，{words}
            </div>
        )
    }
}


export default Hello;