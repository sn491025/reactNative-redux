/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Button,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Store from './redux/store/store';
import { ADD_PLACE } from './redux/actions/type';
import { addPlace } from './redux/actions/place';





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // const state = {
  //   placeName: '',
  //   places: [],
  // }
  var _places: string;
  useEffect(() => {
    console.log('Hi this is store:', Store.getState());
  }, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const submitHandler = () => {

    Store.dispatch(addPlace({ placeName: _places, places: ["ambattur", "central"] }));

    console.log('im working', Store.getState(), _places);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
     
      <View style={{
        // backgroundColor: 'red',
        marginHorizontal: Dimensions.get('window').width * .05,
        marginTop: Dimensions.get('window').height * .03
      }}>
        <TextInput
          style={{
            // backgroundColor: 'yellow',
            marginVertical: Dimensions.get('window').height * .04,
            marginHorizontal: Dimensions.get('window').width * .02,
            borderRadius: 50,
            fontSize: 16,
            borderWidth: 1,
          }}
          placeholder='Search here'
          onChangeText={(text: string) => _places = text}
        />
        <Button title='Add' onPress={submitHandler} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
