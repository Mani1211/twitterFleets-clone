import React, {useEffect, useState} from 'react';
import {Text, View, ActivityIndicator, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import FleetsData from '../data/FleetsData';
import FleetViewInner from '../components/FleetsComponent/FleetViewInner';

const FleetsView = () => {
  const route = useRoute();
  const {userId} = route.params;

  const [users, setUsers] = useState(FleetsData);

  const [user, setUser] = useState(null);

  const [fleetIndex, setFleetIndex] = useState(-1);

  const [fleet, setFleet] = useState(null);

  useEffect(() => {
    if (!users || users.length === 0) {
      return;
    }
    setUser(users.find(u => u.id === userId) || null);
    setFleetIndex(0);
  }, [users]);

  useEffect(() => {
    if (!user) {
      return;
    }

    let userIndex = -1;

    for (let i = 0; i < users?.length; i++) {
      if (users[i].id === user.id) {
        userIndex = i;
        break;
      }
    }

    if (fleetIndex >= user?.fleets?.items.length) {
      if (users.length > userIndex + 1) {
        // go to the next user
        setUser(users[userIndex + 1]);
        setFleetIndex(0);
      } else {
        setFleetIndex(user?.fleets?.items.length);
      }
    } else if (fleetIndex < 0) {
      // go to the prev user
      if (userIndex > 0) {
        setUser(users[userIndex - 1]);
        setFleetIndex(users[userIndex - 1].fleets.items.length - 1);
      } else {
        setFleetIndex(0);
      }
    } else {
      setFleet(user?.fleets?.items[fleetIndex]);
    }
  }, [fleetIndex]);

  const goToNextFleet = () => {
    setFleetIndex(fleetIndex + 1);
  };

  const goToPrevFleet = () => {
    setFleetIndex(fleetIndex - 1);
  };

  if (fleet === null) {
    return <ActivityIndicator />;
  }
  return (
    <FleetViewInner
      fleetIndex={fleetIndex}
      // autoFleetUpdate={() => {
      //   let userIndex = -1;

      //   for (let i = 0; i < users?.length; i++) {
      //     if (users[i].id === user.id) {
      //       userIndex = i;
      //       break;
      //     }
      //   }

      //   if (fleetIndex >= user?.fleets?.items.length) {
      //     if (users.length > userIndex + 1) {
      //       // go to the next user
      //       setUser(users[userIndex + 1]);
      //       setFleetIndex(0);
      //     } else {
      //       setFleetIndex(user?.fleets?.items.length);
      //     }
      //   } else if (fleetIndex < 0) {
      //     // go to the prev user
      //     if (userIndex > 0) {
      //       setUser(users[userIndex - 1]);
      //       setFleetIndex(users[userIndex - 1].fleets.items.length - 1);
      //     } else {
      //       setFleetIndex(0);
      //     }
      //   } else {
      //     setFleetIndex(fleetIndex + 1);
      //     // setFleet(user?.fleets?.items[fleetIndex + 1]);
      //   }
      // }}
      user={user}
      fleet={fleet}
      goToNextFleet={goToNextFleet}
      goToPrevFleet={goToPrevFleet}
    />
  );
};

export default FleetsView;
