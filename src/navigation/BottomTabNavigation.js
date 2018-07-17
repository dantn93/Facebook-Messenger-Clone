import {createBottomTabNavigator} from 'react-navigation';
import {HomeTabNavigation} from './HomeTabNavigation';
import PeopleScreen from '../screens/PeopleScreen';

export const BottomTabNavigation = createBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeTabNavigation,
            navigationOptions: {
                header: null, title: 'HomeTab'
            }
        },

        PeopleScreen: {
            screen: PeopleScreen,
            navigationOptions: {
                header: null, title: 'People'
            }
        }
    }
);