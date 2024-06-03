import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const HomeIcon = ({ focused, color, size }) => (
    <Ionicons name="home" size={size} color={color} />
);

const SobreIcon = ({ focused, color, size }) => (
    <Ionicons name="help" size={size} color={color} />
);

const LoginIcon = ({ focused, color, size }) => (
    <Ionicons name="log-in" size={size} color={color} />
);

const RegisterIcon = ({ focused, color, size }) => (
    <Ionicons name="add-circle-sharp" size={size} color={color} />
);

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="MainHome" >
                    {() => (
                        <Drawer.Navigator
                            screenOptions={{
                                drawerStyle: {
                                    backgroundColor: "#FFFF",
                                    width: 230,
                                }
                            }}
                        >
                            <Drawer.Screen 
                                name='Home'
                                component={HomeScreen}
                                options={{ drawerIcon: HomeIcon }}
                            />
                            <Drawer.Screen 
                                name='LoginScreen'
                                component={LoginScreen}
                                options={{ drawerIcon: LoginIcon }}
                            />
                            <Drawer.Screen 
                                name='RegisterScreen'
                                component={RegisterScreen}
                                options={{ drawerIcon: RegisterIcon }}
                            />
                            <Drawer.Screen 
                                name="SobreScreen"
                                component={SobreScreen}
                                options={{ drawerIcon: SobreIcon}}
                            />
                        </Drawer.Navigator>
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}