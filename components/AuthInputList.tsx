import { Control } from 'react-hook-form';
import { FlatList, View } from 'react-native';
import AuthInput from './AuthInput';

export type ListFieldsSignInType = {
  placeholder: string;
  name: 'email' | 'password';
};

export type ListFieldsRegisterType = {
  placeholder: string;
  name: 'name' | 'email' | 'password';
};

export type AuthInputListType = {
  listFields: ListFieldsSignInType[] | ListFieldsRegisterType[];
  control: Control;
};

const AuthInputList = (props: AuthInputListType) => {
  const { listFields, control } = props;

  return (
    <FlatList
      data={listFields}
      renderItem={({ item, index }) => (
        <View key={index}>
          <AuthInput
            index={index}
            control={control}
            placeholder={item.placeholder}
            name={item.name}
          />
        </View>
      )}
    />
  );
};

export default AuthInputList;
