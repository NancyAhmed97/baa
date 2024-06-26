import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const ProfileContainer = () => {
  const [profile, setProfile] = useState({});
  const userinfo = useSelector((state) => state);
  // Mock profile data
  // const profile = {
  //   name: "محمد غالي",
  //   profileImage: require("./assets/pp.png"),
  // };
  useEffect(() => {
    const checkLogin = async () => {
      const token = await AsyncStorage.getItem('login');
      setProfile(JSON.parse(token));
    };
    checkLogin();
  }, []);

  return (
    <View style={styles.profileContainer}>
      {/* Profile Text */}
      <View style={styles.profileTextContainer}>
        <Text style={styles.welcomeText}>مرحبًا</Text>
        <Text style={styles.nameText}>{userinfo.user.userArray.name}</Text>
      </View>

      {/* Profile Image */}
      <Image
        source={{ uri: `data:image/jpeg;base64,${userinfo.user.userArray.image}`}}
        style={styles.profileImage}
        blurRadius={userinfo.user.userArray.visability}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#CED0CE',
    paddingHorizontal: 20,
    maxHeight: 100,
  },
  profileTextContainer: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 10,
    marginTop:-30,
  },
  welcomeText: {
    fontSize: 16,
    color: '#333',
  },
  nameText: {
    fontSize: 18,
    color: '#333',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10,
    marginTop:-30,
  },
});

export default ProfileContainer;
