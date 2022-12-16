import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import jwt_decode from 'jwt-decode';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { UPDATE_ONE_USER, GET_ONE_USER } from '../lib/queries/userRequest';
import avatar1 from '../assets/profil.png';
import avatar2 from '../assets/profilMan.png';
import avatar3 from '../assets/profilWoman.png';
import avatar4 from '../assets/profilWoman2.png';
import backgroundImage from '../assets/backgroundImageMenu.jpeg';
import COLORS from '../styles/colors';
import { getRequestVariables } from '../utils/functions';
import { AuthContext } from '../context/AuthContext';

const ProfileScreen = () => {
  const { userToken } = useContext(AuthContext);
  const [user, setUser] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [avatar, setAvatar] = useState(avatar1);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    if (userToken) {
      const jwt = jwt_decode<{ user: string }>(userToken);
      setUser(jwt.user);
    }
  }, []);

  const [updateOneUser] = useMutation(UPDATE_ONE_USER, {
    refetchQueries: () => [{ query: GET_ONE_USER }],
  });

  const onUpdateOneUser = (id: number) => {
    const variables = getRequestVariables({ name }, id, true);
    updateOneUser({
      ...variables,
    });
  };
  const { data, error, loading } = useQuery(GET_ONE_USER, {
    variables: {
      where: {
        email: user,
      },
    },
    skip: !user,
  });
  if (error) {
    return <Text>Error</Text>;
  }
  if (loading) {
    return <Text>Loading</Text>;
  }

  if (!data) return null;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.item}>
        <View style={styles.itemContainerBackgroundImage}>
          <ImageBackground
            source={backgroundImage}
            style={styles.paddingImageBackground}
            resizeMode="cover"
            imageStyle={{
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          >
            <View style={styles.viewImage}>
              <Image source={avatar} style={styles.imageCustom} />
              <View style={styles.textView}>
                <Text style={styles.textName}>{data.user.name}</Text>
                <Text style={styles.textEmail}>{data.user.email}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.containerInput}>
          <Text style={styles.textLabelChangeName}>Change your name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
            placeholderTextColor={'#1B6B70'}
            placeholder={data.user.name ? data.user.name : 'Name'}
          />
        </View>

        <View style={styles.viewContainerTextAvatar}>
          <Text style={styles.textChoiseAvatar}>Enter a new profil</Text>
          <ScrollView horizontal>
            <TouchableOpacity
              onPress={() => {
                setAvatar(avatar1);
              }}
            >
              <View style={styles.viewAvatarBottom}>
                <Image style={styles.avatarScroll} source={avatar1} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAvatar(avatar2);
              }}
            >
              <View style={styles.viewAvatarBottom}>
                <Image style={styles.avatarScroll} source={avatar2} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAvatar(avatar3);
              }}
            >
              <View style={styles.viewAvatarBottom}>
                <Image style={styles.avatarScroll} source={avatar3} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAvatar(avatar4);
              }}
            >
              <View style={styles.viewAvatarBottom}>
                <Image style={styles.avatarScroll} source={avatar4} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.viewPicker}>
          <TouchableOpacity style={styles.borderPicker} onPress={pickImage}>
            <View style={styles.rowViewPicker}>
              <Ionicons name="cloud-upload-outline" size={30} color="#1B6B70" />
              <Text style={styles.textSelectImage}>Select your image</Text>
            </View>

            {image && (
              <Image source={{ uri: image }} style={styles.imagePicker} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.viewButtonCenter}>
          <TouchableOpacity
            style={styles.paddingTouchableOpacity}
            onPress={() => onUpdateOneUser(data.user.id)}
          >
            <View style={styles.buttonRow}>
              <Ionicons
                name="checkmark-circle-outline"
                size={30}
                color="#fff"
              />
              <Text style={styles.textInButton}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  avatarScroll: {
    borderRadius: 40,
    height: 80,
    marginHorizontal: 10,
    width: 80,
  },
  borderPicker: {
    borderColor: COLORS.primary,
  },
  buttonRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flex: 1,
    justifyContent: 'center',
  },
  containerInput: {
    height: '15%',
    marginHorizontal: 10,
    marginTop: 20,
  },
  imageCustom: {
    borderRadius: 40,
    height: 80,
    width: 80,
  },

  imagePicker: {
    height: 200,
    width: 200,
  },
  input: {
    borderColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 0.8,
    color: COLORS.primary,
    margin: 12,
    padding: 10,
  },
  item: {
    backgroundColor: COLORS.whiteLightBlue,
    borderRadius: 10,
    height: '80%',
    width: '80%',
  },
  itemContainerBackgroundImage: {
    borderRadius: 10,
  },
  paddingImageBackground: {
    padding: 20,
  },
  paddingTouchableOpacity: {
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  rowViewPicker: {
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderRadius: 40,
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  textChoiseAvatar: {
    color: COLORS.darkGray,
    fontSize: 15,
    marginBottom: 10,
    marginLeft: 4,
  },
  textEmail: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    textAlign: 'center',
  },
  textInButton: {
    color: COLORS.white,
    fontSize: 15,
    paddingLeft: 10,
  },
  textLabelChangeName: {
    color: COLORS.darkGray,
    fontSize: 15,
    marginBottom: -5,

    paddingLeft: 15,
  },
  textName: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    textAlign: 'center',
  },
  textSelectImage: {
    marginLeft: 10,
  },
  textView: {
    alignItems: 'center',
    marginTop: 15,
  },
  viewAvatarBottom: {
    borderColor: COLORS.lightGray,
    shadowColor: COLORS.primary,
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewButtonCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewContainerTextAvatar: {
    borderRadius: 40,
    marginHorizontal: 22,
  },
  viewImage: {
    flexDirection: 'row',
  },
  viewPicker: {
    alignItems: 'center',
    borderColor: COLORS.black,
    justifyContent: 'center',
    padding: 20,
  },
});

export default ProfileScreen;
