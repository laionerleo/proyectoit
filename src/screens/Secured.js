import React, { Component } from 'react';
import {
    Button
} from 'react-native';

export default class Secured extends Component {
    render() {
        return (
                <Button
                            onPress={this.props.onLogoutPress}
                            title="Logout"
                     />
                
                )
    }
}