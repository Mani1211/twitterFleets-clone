import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
const SingleFleet = ({user}) => {
  const navigation = useNavigation();
  console.log(`object`, navigation);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('FleetsView', {userId: user.id})}>
      <View
        style={{
          alignItems: 'center',
          margin: 10,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 5,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#1B98F5',
          }}>
          <Image
            style={{height: 80, width: 80, borderRadius: 40}}
            source={{uri: user.image}}
          />
        </View>
        <Text>{user.username}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SingleFleet;
