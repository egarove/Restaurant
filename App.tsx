import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './context/Context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Configuration from './components/Configuration';
import Tables from './components/Tables';
import Products from './components/Products';



export default function App() {
const Tab = createBottomTabNavigator();
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Products" component={Products} />
          <Tab.Screen name="Tables" component={Tables} />
          <Tab.Screen name="Configuration" component={Configuration} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider> 
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