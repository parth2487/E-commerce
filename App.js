import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation.js'
import store from "./store";
import { ModalPortal } from "react-native-modals";
import { Provider } from "react-redux";
import { UserContext } from "./UserContext.js";
export default function App() {
  return (
   
             <Provider store={store}>
        <UserContext>
          <StackNavigation />
          <ModalPortal />
        </UserContext>
      </Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
