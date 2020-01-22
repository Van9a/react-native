import React, { Component } from 'react';
import Text from 'react-native-web/src/exports/Text';
import { ScrollView } from 'react-native-web';
import { AsyncStorage } from 'react-native';
import DataService from '../services/DataService';

export default class FavoritePeopleScreen extends Component {
    dataService = new DataService();

    state = {
        loading: true,
        peoples: null
    };

    componentDidMount() {
        AsyncStorage.getItem('peopleList').then((value) => {

            this.setState({
                loading: false,
                peoples: value
            })
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <Text>Loading...</Text>
            )
        }

        return (
            <ScrollView>
                <Text>Hello, {this.state.peoples}</Text>
            </ScrollView>
        )
    }
}

FavoritePeopleScreen.navigationOptions = {
    header: null,
};

