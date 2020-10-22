import React, { Component } from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem
} from 'reactstrap';


class Footer extends Component {
    render() {
        return (
            <footer className="footer fixed-bottom">
                <div className='container d-flex justify-content-center'>
                    <div className='row'>
                        <div className="leftFooterLinks col-sm-6">
                            <ul>
                                <li>item1</li>
                                <li>item1</li>
                                <li>item1</li>
                            </ul>
                        </div>
                        <div className="rightFooterLinks col-sm-6">
                            <ul>
                                <li>item1</li>
                                <li>item1</li>
                                <li>item1</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer