import React, {Component} from 'react';
import {utep_styles} from '../styles/utepStyles';

class Footer extends Component {
    render() {
        return (
            <div style={{backgroundColor: utep_styles.blueBackground.backgroundColor,height: '10em',width:"100%"}}>
            Footer
            </div>
        );
    }
}

export default Footer;