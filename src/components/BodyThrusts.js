import React, {Component} from 'react';
import {utep_styles} from '../styles/utepStyles'
import {Container} from "react-bootstrap";

export class BodyThrusts extends Component {
    render() {
        return (
            <div style={{width: '100%', marginBottom:"2em",marginTop:"2em"}}>
                <div style={utep_styles.blueBackground}>
                    <Container className="text-center">
                        <h2 style={{color: 'white'}}>Thrusts</h2>
                    </Container>
                </div>
            </div>
        );
    }
}
