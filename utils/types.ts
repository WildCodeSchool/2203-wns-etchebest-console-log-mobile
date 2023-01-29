import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface EditMode {
  title: boolean;
  status: boolean;
  description: boolean;
}

export interface RouterProps {
  navigation?: NavigationProp<ParamListBase>;
}

export interface LoginForm {
  email: string;
  password: string;
}
export interface RegisterForm {
  name: string;
  email: string;
  password: string;
}
