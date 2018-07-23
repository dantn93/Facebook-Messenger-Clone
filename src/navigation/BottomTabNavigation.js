import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import {HomeTabNavigation} from './HomeTabNavigation';
import PeopleScreen from '../screens/PeopleScreen';
import TabIcon from '../components/TabIcon';
import CameraScreen from '../screens/CameraScreen';
import GamesScreen from '../screens/GamesScreen';
import PopularScreen from '../screens/PopularScreen';


const HomeTabIcon = () => (
    <TabIcon name={'home'}/>
)

const PeopleTabIcon = () => (
    <TabIcon name={'supervisor-account'} />
)

const CameraTabIcon = () => (
    <TabIcon name={'photo-camera'} />
)

const GamesTabIcon = () => (
    <TabIcon name={'gamepad'} />
)

const PopularTabIcon = () => (
    <TabIcon name={'cloud-circle'} />
)
export const BottomTabNavigation = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeTabNavigation,
            navigationOptions: {
                header: null, tabBarIcon: HomeTabIcon
            }
        },

        PeopleScreen: {
            screen: PeopleScreen,
            navigationOptions: {
                header: null, tabBarIcon: PeopleTabIcon
            }
        },

        CameraTabScreen: {
            screen: CameraScreen,
            navigationOptions: ({navigation}) => ({
                header: null,
                tabBarIcon: CameraTabIcon,
                tabBarOnPress: ({navigation}) => {
                    navigation.navigate('CameraScreen')
                }
            })
        },

        GamesScreen: {
            screen: GamesScreen,
            navigationOptions: {
                header: null, tabBarIcon: GamesTabIcon
            }
        },

        PopularScreen: {
            screen: PopularScreen,
            navigationOptions: {
                header: null, tabBarIcon: PopularTabIcon
            }
        }

    },{
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#0084ff',
            inactiveTintColor: '#626262',
            pressColor: '#7f8c8d',
        }
    }
)