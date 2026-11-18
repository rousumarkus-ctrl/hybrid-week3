import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Second from './screens/Second';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import CustomBar from './components/CustomBar';

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{header:(h)=><CustomBar {...h}></CustomBar>}}>
          <Stack.Screen name='Home' component={Home}></Stack.Screen>
          <Stack.Screen name='Second' component={Second}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
