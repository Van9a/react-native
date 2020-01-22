import React, { Component } from 'react';
import {
    FlatList,
    Text,
    View,
} from 'react-native';
import DataService from '../services/DataService';
import { ListItem, SearchBar } from 'react-native-elements';

export default class HomeScreen extends Component {

    dataService = new DataService();
    state = {
        planets: null,
    };
    arrayholder = [];

    componentDidMount() {
        this.dataService.getAllPlanets()
            .then((res) => {
                this.setState({
                    planets: res.results
                });
                this.arrayholder = res.results;
            });
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
            planets: newData,
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

    render() {
        const idRexExp = /\/([0-9]*)\/$/;
        if (!this.state.planets) {
            return (
                <Text>Loading...</Text>
            )
        }

        return (
            <View>
                <FlatList
                    data={this.state.planets}
                    renderItem={({ item }) => (
                        <ListItem
                            leftAvatar={{
                                source: {
                                    uri: `https://starwars-visualguide.com/assets/img/planets/${item.url.match(idRexExp)[1]}.jpg`
                                }
                            }}
                            title={item.name}
                        />
                    )}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};
