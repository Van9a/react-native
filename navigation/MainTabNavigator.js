import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PeoplesScreen from '../screens/PeoplesScreen';
import FavoritePeopleScreen from '../screens/FavoritePeopleScreen';
import PeopleDetailsScreen from '../screens/PeopleDetailsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
    },
    config
);

HomeStack.navigationOptions = {
    tabBarLabel: 'List of planets',
};

HomeStack.path = '';

const PeoplesStack = createStackNavigator(
    {
        Peoples: PeoplesScreen,
    },
    config
);

PeoplesStack.navigationOptions = {
    tabBarLabel: 'Planet inhabitants',
};

PeoplesStack.path = '';

const FavoritePeopleStack = createStackNavigator(
    {
        Settings: FavoritePeopleScreen,
    },
    config
);

FavoritePeopleStack.navigationOptions = {
    tabBarLabel: 'Favorite characters',

};

FavoritePeopleStack.path = '';

////
const PeopleDetailsStack = createStackNavigator(
    {
        PeopleDetails: PeopleDetailsScreen,
    },
    config
);

PeopleDetailsStack.navigationOptions = {
    tabBarLabel: 'People Details',
};

PeopleDetailsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    PeoplesStack,
    FavoritePeopleStack,
    PeopleDetailsStack
});

tabNavigator.path = '';

export default tabNavigator;
