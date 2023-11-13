/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
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
import { connect, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons';
import { DeleteTask, addTask } from './redux/actions/task';




function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  var _AddTask: any;
  const [value, setValue] = useState<any>();
  const { Task }: any = useSelector((state: any) => state);
  const buttonState: boolean = value === '' || value === undefined ? true : false;
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // console.log('hhhh', typeof (value), buttonState);
  const submitHandler = () => {
    const date = new Date();
    const currentDate = date.toLocaleDateString("en-US");
    Store.dispatch(addTask({ taskdescription: value, updateAt: currentDate }));
    setValue('');
    console.log('im working', Store.getState(), _AddTask);

    // console.log(useSelector(state => state))

  }
  // Store.subscribe(() => {

  // })
  const delectTask = (id: any) => {
    // console.log(id);

    const _deleteTask = Task.filter((i: any) => i.id !== id);
    //  DeleteTask(_deleteTask);
    Store.dispatch(DeleteTask(_deleteTask));
  }

  return (
    <SafeAreaView style={{
      backgroundColor: '#ffffff',
      flex: 1
    }}>
      <View style={{
        marginHorizontal: Dimensions.get('window').width * .05,
        marginTop: Dimensions.get('window').height * .03
      }}>
        <View>
          <Image source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"
          }}
            width={200}
            height={200}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignSelf: 'center'
            }}
          />
          <Text style={{
            fontSize: 23,
            fontWeight: 'bold',
            color: '#000000',
            alignSelf: 'center'
          }}>Todo App</Text>
        </View>
        <TextInput
          style={{
            marginVertical: Dimensions.get('window').height * .04,
            marginHorizontal: Dimensions.get('window').width * .02,
            borderRadius: 50,
            fontSize: 16,
            borderWidth: 1,
            padding: 10,
            color:'#000000'
          }}

          placeholder='Add Task'
          placeholderTextColor={'#000000'}
          value={value}
          onChangeText={(text: string) => setValue(text)}
        />
        {/* <Button title='Add' onPress={submitHandler} /> */}
        <TouchableOpacity style={{
          alignSelf: 'center',
          backgroundColor: buttonState ? '#DBC8FA' : '#764abc',
          width: Dimensions.get('window').width * .85,
          height: Dimensions.get('window').height * .05,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 24
        }}
          onPress={submitHandler}
          disabled={buttonState}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>Add</Text>
        </TouchableOpacity>
        <ScrollView style={{
          marginTop: 20,
          height: Dimensions.get('window').height * .4,
        }}>
          {Task.map((i: any, index: any) => {
            return (
              <View style={{
                // backgroundColor: 'red',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: Dimensions.get('window').height * .02
              }} key={index}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center'
                }}>
                  <View style={{
                    backgroundColor: '#764abc',
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 50
                  }}>
                    <Text style={{
                      color: 'white',
                      fontSize: 20,
                    }}>{i.id}</Text>
                  </View>
                  <View style={{
                    // backgroundColor: 'yellow',
                    justifyContent: 'center',
                    marginLeft: 10
                  }}>
                    <Text style={{
                      color: '#000000',
                      fontSize: 16,
                      fontWeight: '700',
                    }}>{i?.taskdescription}</Text>
                    <Text style={{
                      color: '#000000'
                    }}>created at: {i?.updateAt}</Text>
                  </View>
                </View>
                <TouchableOpacity style={{
                  backgroundColor: '#764abc',
                  padding: 6,
                  borderRadius: 24,
                }} onPress={() => delectTask(i.id)}>
                  <Text style={{
                    color: '#ffffff'
                  }}>Delete</Text>
                </TouchableOpacity>
              </View>
            );
          })

          }
        </ScrollView>
        {/* </View> */}

      </View>
    </SafeAreaView>
  );
}

export default App;
