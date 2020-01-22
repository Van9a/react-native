import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DataService from '../services/DataService';

export default class PeoplesScreen extends Component {
    dataService = new DataService();

    state = {
        peoples: null,
        selectedPeople: null
    };

    componentDidMount() {
        this.dataService.getAllPeople()
            .then((res) => this.setState({
                    peoples: res.results
                })
            )
    }

    setSelectedPeople = (item) => {
        const idRexExp = /\/([0-9]*)\/$/;
        this.props.navigation.navigate('PeopleDetails', { id: item.url.match(idRexExp)[1] });
    };

    renderItem = (arr) => {

        return arr.map((person, index) => {
            return (
                <Text
                    key={index}
                    styles={styles.PersonList}
                    onClick={() => this.setSelectedPeople(person)}
                >
                    {person.name}{'\n'}
                </Text>
            )
        })
    };

    render() {
        const { peoples } = this.state;
        if (!this.state.peoples) {

            return (
                <Text>Loading...</Text>
            )
        }
        const items = this.renderItem(peoples);

        return (
            <View style={styles.container}>
                <Text styles={styles.PersonList}>{items}</Text>
            </View>
        );
    }
}

PeoplesScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
    },
    PersonList: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        fontSize: 40,
        backgroundColor: 'red'
    },
});
