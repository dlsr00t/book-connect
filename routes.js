import React from 'react';
import LoginPt1 from './src/screens/Login/login-pt1.js';
import LoginPt2 from './src/screens/Login/login-pt2.js';
import {Home} from './src/screens/Home/home.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation,DrawerActions } from '@react-navigation/native';
import logo from "./assets/logo.png";
import carrinho from "./assets/carrinho.png";
import botaoAna from "./assets/botaoAna.png";
import { Button, Image, TouchableOpacity, ImageBackground,  } from 'react-native';
import TesteDoubleCheck from "./src/screens/Home/home.js";


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();




export const StackNavigate = () =>{


    return(
        <Stack.Navigator initialRouteName='HomeDrawer'>
            <Stack.Screen
                name='Login'
                component={LoginPt1}
                options={{
                    headerShown:false 
                }}
            />

            <Stack.Screen
                name='HomeDrawer'
                component={DrawerNavigate}
                options={{
                    
                    headerShown:false,
                    
                }}
            />
        </Stack.Navigator>
    )
}

export const DrawerNavigate = () => {
    const navigation = useNavigation();
    const openDrawer = () => navigation.dispatch(DrawerActions.openDrawer());

    return (

        <Drawer.Navigator initialRouteName="Home">

          <Drawer.Screen
          name="Home"
          component={Home} 
          
          options={{
            title:"Home",
            /*
            headerTitle:(props) => <Image source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={{width: 20, height: 20}} />,
            */

            /*
            headerRight: () => <DrawerButton/>,
            */

            /*
            headerRight: () => (
                <DrawerButton
                onclick ={ ( ) => this.props.navigation.openDrawer()} 
                />
            ),
            */
            

            headerLeft: () => (
                <TouchableOpacity onPress={openDrawer} >
                    <Image source={botaoAna} style={{marginLeft:10}}/>
                </TouchableOpacity>

            ),

            headerTitle: () => <Image source={logo} />,
            headerTitleAlign:"center",
            
            headerRight: () => (
                <TouchableOpacity>
                    <Image source={carrinho} style={{marginRight:10}}/>
                </TouchableOpacity>
            ),
            

            headerStyle:{
                backgroundColor:"rgb(255, 246, 241)",


                shadowOffset: {
                    width: 0,
                    height: 2,

                },
                shadowOpacity: 0.5,
                shadowRadius: 3.84,

                elevation: 3,

                },  
            
          }}

          />
          <Drawer.Screen name="Login" component={LoginPt2}
          options={{
            headerShown:false,
          }}
          />

        </Drawer.Navigator>

    );
  }

  




