import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// Screens
import SignIn from './components/auth';
import Diary from './components/diary';
import News from './components/news';

import DiaryDocu from './components/diary/diaryDocu.js';
import Logo from './utils/logo';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from './components/auth/loading';

const AuthStack = createStackNavigator();
const MainScreenTab = createBottomTabNavigator();
const DiaryStack = createStackNavigator();
const NewsStack = createStackNavigator();

const headerConfig = {
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7487C5',
  },
  headerTitle: <Logo />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  },
};

const headerConfig_ = {
  headerTitleAlign: 'center',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: '#7487C5',
  },
  headerTitle: <Logo />,
  headerTitleStyle: {
    flex: 1,
    textAlign: 'center',
  },
  headerLeft: null,
};

/* 
    Stack Navigator
        - Stack Screen A

    Stack Navigator
        - Tab Navigator
            - Tab Screen B
            - Tab Screen C
*/

const TabBarIcon = (focused, name) => {
  let iconName, iconSize;
  if (name === 'Diary') {
    iconName = 'notebook-outline';
  } else if (name === 'News') {
    iconName = 'newspaper-variant-outline';
  }

  if (focused) iconSize = 37;
  else iconSize = 32;

  return <Icon name={iconName} size={iconSize} color="#fff" />;
};

const DiaryStackComponent = () => {
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen
        name="Diary"
        component={Diary}
        options={headerConfig_}
      />
      <DiaryStack.Screen
        name="DiaryDocu"
        component={DiaryDocu}
        options={headerConfig}
      />
    </DiaryStack.Navigator>
  );
};

// notebook-outline
// newspaper-variant-outline

const NewsStackComponent = () => {
  return (
    <DiaryStack.Navigator>
      <DiaryStack.Screen name="News" component={News} options={headerConfig_} />
    </DiaryStack.Navigator>
  );
};

const AppTabComponent = () => {
  return (
    <MainScreenTab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeBackgroundColor: '#788DCF',
        inactiveBackgroundColor: '#7487C5',
        style: {
          backgroundColor: '#7487C5',
        },
      }}
      initialRouteName="Diary"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
      })}>
      <MainScreenTab.Screen name="Diary" component={DiaryStackComponent} />
      <MainScreenTab.Screen name="News" component={NewsStackComponent} />
    </MainScreenTab.Navigator>
  );
};

export const RootNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <>
        <AuthStack.Screen name="Loading" component={Loading} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="AppTabComponent" component={AppTabComponent} />
      </>
    </AuthStack.Navigator>
  );
};
