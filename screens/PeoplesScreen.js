import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ActivityIndicator } from 'react-native';
import DataService from '../services/DataService';
import { ListItem, SearchBar } from 'react-native-elements';
import PeopleDetailsScreen from './PeopleDetailsScreen';

export default class PeoplesScreen extends Component {
    dataService = new DataService();

    state = {
        peoples: null,
        selectedPeople: null,
    };

    arrayholder = [];

    componentDidMount() {
        this.dataService.getAllPeople()
            .then((res) => {
                    this.setState({
                        peoples: res.results
                    });
                    this.arrayholder = res.results
                }
            )
    }

    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            peoples: newData,
        });
    };

    renderHeader = () => {
        return (
            <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
                onChangeText={text => this.searchFilterFunction(text)}
                autoCorrect={false}
                value={this.state.value}
            />
        );
    };

    setSelectedPeople = (item) => {
        const idRexExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRexExp)[1];

        this.dataService.getPeople(id)
            .then((people) =>
                this.props.navigation.push('PeopleDetails',
                    { people, image: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`, id })
            )
    };

    render() {
        const idRexExp = /\/([0-9]*)\/$/;
        if (!this.state.peoples) {
            return (
                <Text>Loading...</Text>
            )
        }

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.peoples}
                    renderItem={({ item }) => (
                        <ListItem
                            leftAvatar={{
                                source: {
                                    uri: `https://starwars-visualguide.com/assets/img/characters/${item.url.match(idRexExp)[1]}.jpg`
                                }
                            }}
                            title={item.name}
                            onClick={() => this.setSelectedPeople(item)}
                        />
                    )}
                    ListHeaderComponent={this.renderHeader}
                />
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
});
