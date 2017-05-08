import React from 'react';  
import ReactDOM from 'react-dom';

import './index.scss';

class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}

ReactDOM.render(<Home />, document.getElementById('app'));