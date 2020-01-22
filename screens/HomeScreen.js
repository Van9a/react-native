import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import DataService from '../services/DataService';
import tabNavigator from '../navigation/MainTabNavigator';

export default class HomeScreen extends Component {

    dataService = new DataService();
    state = {
        planets: null,
        favoritePeople: []
    };

    componentDidMount() {
        this.dataService.getAllPlanets()
            .then((res) => this.setState({
                planets: res.results
            }));
    }

    renderItem = (arr) => {

        return arr.map((planet, index) => {
            return (
                <Text
                    key={index}
                    styles={styles.planetList}
                >
                    {planet.name}{'\n'}
                </Text>
            )
        })
    };

    render() {
        const { planets } = this.state;
        if (!planets) {
            return (
                <Text>Loading...</Text>
            )
        }

        const items = this.renderItem(planets);

        return (
            <View>
                <Text styles={styles.planetList}>{items}</Text>
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    planetList: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        fontSize: 40,
        backgroundColor: 'red'
    },
});
