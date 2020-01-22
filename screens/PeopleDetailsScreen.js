import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DataService from '../services/DataService';
import { Button, Image } from 'react-native-web';

export default class PeopleDetailsScreen extends Component {
    dataService = new DataService();
    state = {
        people: null,
        image: null
    };

    componentDidMount() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');

        this.dataService.getPeople(id)
            .then((people) => this.setState({
                    people,
                    image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
                })
            )
    }

    render() {
        const { people, image } = this.state;
        if (!people) {
            return (
                <Text>Loading...</Text>
            )
        }

        const { name, height, mass, birth_year, gender } = people;

        return (
            <View>
                <Text>name: {name}</Text>
                <Text>height: {height}</Text>
                <Text>mass: {mass}</Text>
                <Text>birth year: {birth_year}</Text>
                <Text>gender: {gender}</Text>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={{ uri: image }}
                />
                <Button name="Button add to favorite" onPress={() => console.log('press')} title={'Add to favorite'}/>
            </View>
        );
    }
}

PeopleDetailsScreen.navigationOptions = {
    header: null,
};
