import React from 'react';
import {FlatList, View} from 'react-native';
import SingleFleet from '../components/FleetsComponent/SingleFleet';
import FleetsData from '../data/FleetsData';
const UserFleets = () => {
  return (
    <View>
      <FlatList
        data={FleetsData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <SingleFleet user={item} />}
      />
    </View>
  );
};

export default UserFleets;
