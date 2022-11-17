import React, {Component} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: '',
      todoData: [
        {
          title: 'Pergi ke Pasar',
          status: 'Belum Selesai',
        },
        {
          title: 'Pergi ke Kantor',
          status: 'Belum Selesai',
        },
        {
          title: 'Pergi ke Mesjid',
          status: 'Selesai',
        },
        {
          title: 'Pergi kerja',
          status: 'Selesai',
        },
      ],
    };
  }

  check = (item, index) => {
    let allData = this.state.todoData;
    let editItem = item;

    if (editItem.status === 'Selesai') {
      editItem.status = 'Belum Selesai';
    } else {
      editItem.status = 'Selesai';
    }

    allData[index].status = editItem.status;

    this.setState({
      todoData: allData,
    });
  };

  deleteItem = index => {
    let allData = this.state.todoData;
    allData.splice(index, 1);

    this.setState({todoData: allData});
  };

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar barStyle="light-content" backgroundColor="#272727" />

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#303030',
            paddingVertical: 15,
            elevation: 3,
            marginBottom: 10,
          }}>
          <Text style={{color: '#fafafafa'}}>Todo List</Text>
        </View>

        <FlatList
          data={this.state.todoData}
          renderItem={({item, index}) => (
            <View
              style={{
                backgroundColor: '#303030',
                marginHorizontal: 20,
                borderRadius: 3,
                paddingVertical: 10,
                paddingHorizontal: 10,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{color: '#fafafa'}}>{item.title}</Text>
              </View>

              <TouchableOpacity
                onPress={() => this.check(item, index)}
                style={{justifyContent: 'center'}}>
                <Icon
                  name={item.status === 'Selesai' ? 'check-square' : 'square'}
                  size={30}
                  color="#fafafa"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.deleteItem(index)}
                style={{justifyContent: 'center', marginLeft: 30}}>
                <Icon name={'trash-alt'} size={30} color="#fafafa" />
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={item => item.title}
        />

        <TextInput
          value={this.state.todo}
          onChange={text => this.setState({todo: text})}
          style={{
            backgroundColor: '#303030',
            paddingHorizontal: 10,
            marginHorizontal: 20,
            color: '#ffffff',
            marginBottom: 20,
          }}
        />
      </View>
    );
  }
}

export default App;
