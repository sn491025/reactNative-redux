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
import { addPlace } from './redux/actions/task';
import { Icon } from 'react-native-vector-icons/Icon';

const _res = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    "userId": 1,
    "id": 7,
    "title": "magnam facilis autem",
    "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    "userId": 1,
    "id": 8,
    "title": "dolorem dolore est ipsam",
    "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    "userId": 1,
    "id": 9,
    "title": "nesciunt iure omnis dolorem tempora et accusantium",
    "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    "userId": 1,
    "id": 10,
    "title": "optio molestias id quia eum",
    "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
]





function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  // const {  } = useSelector(state => state); 
  var _AddTask: string;
  var _Task: any = [];
  var _result;
  var finalTask: any = [];

  const { Task } = useSelector((state: any) => state);

  useEffect(() => {
    _result = Store.getState()
    _Task.push(_result);
    console.log('Hi this is store:', Store.getState());
    _Task.map((i: any) => {
      // console.log(i,'djksnd')
      i.Task.map((i: any) => {
        console.log(i, 'jsbds');
        finalTask.push(i);
      })
    })

    console.log('jejejejeej', Task);

  }, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  const submitHandler = () => {

    const date = new Date();
    const currentDate = date.toLocaleDateString("en-US");
    Store.dispatch(addPlace({ taskdescription: _AddTask, updateAt: currentDate }));
    console.log('im working', Store.getState(), _AddTask);

    // console.log(useSelector(state => state))

  }
  Store.subscribe(() => {
    _result = Store.getState()
    _Task.push(_result);
    // console.log('hjhegwye', _Task);

    _Task.map((i: any) => {
      // console.log(i,'djksnd')
      i.Task.map((i: any) => {
        console.log(i.id, 'jsbds');
        finalTask.push(i);
      })
    })

    console.log('jejejejeej', finalTask.id);

  })

  return (
    <SafeAreaView style={{
      // backgroundColor: '#ffffff'
    }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

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
        </View>
        <TextInput
          style={{
            marginVertical: Dimensions.get('window').height * .04,
            marginHorizontal: Dimensions.get('window').width * .02,
            borderRadius: 50,
            fontSize: 16,
            borderWidth: 1,
            padding: 10
          }}
          placeholder='Add Task'
          onChangeText={(text: string) => _AddTask = text}
        />
        {/* <Button title='Add' onPress={submitHandler} /> */}
        <TouchableOpacity style={{
          alignSelf: 'center',
          backgroundColor: '#764abc',
          width: Dimensions.get('window').width * .85,
          height: Dimensions.get('window').height * .05,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 24
        }}
          onPress={submitHandler}
        >
          <Text style={{
            color: 'white',
            fontSize: 16,
            fontWeight: 'bold',
          }}>Add</Text>
        </TouchableOpacity>
        {/* <View> */}
        {Task.map((i: any) => {
          return (
            <View style={{
              // backgroundColor: 'red',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: Dimensions.get('window').height * .03
            }}>
              <View style={{
                flexDirection: 'row'
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
                    fontSize: 16,
                    fontWeight: '700',
                  }}>{i?.taskdescription}</Text>
                  <Text>created at: {i?.updateAt}</Text>
                </View>
              </View>
              <TouchableOpacity>
                <Image source={{
                  uri: "https://logowik.com/content/uploads/images/close1351.jpg"
                }}
                  width={40}
                  height={41}
                />
              </TouchableOpacity>
            </View>
          );
        })

        }
        {/* </View> */}

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
