import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

const FleetViewInner = ({user, fleet, goToNextFleet, goToPrevFleet}) => {
  const {width, height} = useWindowDimensions();
  //   console.log(`user`, user);
  //   console.log(`story`, story);
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
          position: 'absolute',
          top: 20,
          width: width * 0.9,
        }}>
        <View
          style={{
            height: 5,
            width: width * 0.9,
            marginBottom: 10,
            backgroundColor: '#e7e7e739',
            borderRadius: 50,
          }}>
          <View
            style={{
              height: 5,
              width: width * 0.7,
              marginBottom: 10,
              backgroundColor: '#e1e1e1',
              borderRadius: 50,
            }}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
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
              style={{height: 60, width: 60, borderRadius: 30}}
              source={{
                uri: user.image,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 26, color: '#fff'}}>{user.username}</Text>
            <Text style={{fontSize: 18, color: '#fff'}}>12 hours ago</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FleetViewInner;
