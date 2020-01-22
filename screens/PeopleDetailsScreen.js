import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Image } from 'react-native-web';
import { AsyncStorage } from 'react-native';

export default class PeopleDetailsScreen extends Component {

    state = {
        people: null,
        image: null,
        peopleId: null,

    };

    setStoreData = async () => {
        const { navigation } = this.props;
        const people = navigation.getParam('people');
        try {
            await AsyncStorage.setItem('peopleList', people);
        } catch (error) {
            alert('Error')
        }
    };

    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id');
        const people = navigation.getParam('people');
        const image = navigation.getParam('image');

        if (!people) {
            return (
                <Text>Loading...</Text>
            )
        }

        const { name, height, mass, birth_year, gender } = people;

        return (
            <View>
                <Text>id: {id}</Text>
                <Text>name: {name}</Text>
                <Text>height: {height}</Text>
                <Text>mass: {mass}</Text>
                <Button name="Go back" onPress={() => this.props.navigation.push('Peoples')}
                        title={'Go back'}/>
                <Text>birth year: {birth_year}</Text>
                <Text>gender: {gender}</Text>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 10 }}
                    source={{ uri: image }}
                />
                <Button name="Go back" onPress={() => this.props.navigation.push('Peoples')}
                        title={'Go back'}/>
                <Button name="Set to favorite" onPress={() => this.setStoreData()}
                        title={'Set to favorite'}/>
            </View>
        );
    }
}

PeopleDetailsScreen.navigationOptions = {
    header: null,
};
