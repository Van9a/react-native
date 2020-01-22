import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import View from 'react-native-web/src/exports/View';
import Text from 'react-native-web/src/exports/Text';
import { ScrollView } from 'react-native-web';

export default function FavoritePeopleScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return(
    <ScrollView>
      <Text>Hello</Text>
    </ScrollView>
  )
}

FavoritePeopleScreen.navigationOptions = {
    header: null,
};

/*FavoritePeopleScreen.navigationOptions = {
  title: 'app.json',
};*/
