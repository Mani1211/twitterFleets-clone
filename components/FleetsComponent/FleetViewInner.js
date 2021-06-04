import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const FleetViewInner = ({
  user,
  fleet,
  goToNextFleet,
  goToPrevFleet,
  fleetIndex,
  autoFleetUpdate,
}) => {
  const {width, height} = useWindowDimensions();
  console.log(`user`, user.fleets.items.length);
  console.log(`object`, width / user.fleets.items.length);
  const fleetCount = user.fleets.items.length;
  const customWidth = (width * 0.9) / user.fleets.items.length;
  const singleWidth = width * 0.95;

  // setTimeout(() => autoFleetUpdate(), 3000);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0f2027',
        position: 'relative',
      }}>
      <View
        style={{
          position: 'absolute',
          flex: 1,
          zIndex: 10,
          flexDirection: 'row',
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity
          onPress={() => goToPrevFleet()}
          style={{
            width: '50%',
            height: '100%',
          }}></TouchableOpacity>
        <TouchableOpacity
          onPress={() => goToNextFleet()}
          style={{
            width: '50%',
            height: '100%',
          }}></TouchableOpacity>
      </View>
      {fleet.type === 'IMAGE' && (
        <Image
          style={{height: '100%', width: '100%'}}
          source={{
            uri: fleet.image,
          }}
        />
      )}
      {fleet.type === 'TEXT' && (
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            margin: 20,
            color: '#fff',
          }}>
          {fleet.text}
        </Text>
      )}
      <View
        style={{
          height: 5,
          width: width,
          marginBottom: 10,
          // backgroundColor: '#e7e7e739',
          position: 'absolute',
          top: 20,
          flexDirection: 'row',
          marginHorizontal: 15,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 50,
        }}>
        {user.fleets.items.map((i, index) => (
          <View
            style={{
              height: 3,
              width: fleetCount > 1 ? customWidth : singleWidth,
              marginBottom: 10,
              marginRight: fleetCount - 1 === index ? 0 : 5,
              backgroundColor: fleetIndex < index ? '#e7e7e739' : '#e1e1e1',
              // backgroundColor: '#e1e1e1',
              borderRadius: 50,
            }}></View>
        ))}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 25,
          left: 5,
          marginTop: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 20,
          }}>
          <View
            style={{
              backgroundColor: 'transparent',
              padding: 5,
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#fff',
              marginRight: 20,
            }}>
            <Image
              style={{height: 50, width: 50, borderRadius: 30}}
              source={{
                uri: user.image,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 23, color: '#fff'}}>{user.username}</Text>
            <Text style={{fontSize: 15, color: '#fff'}}>12 hours ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FleetViewInner;
