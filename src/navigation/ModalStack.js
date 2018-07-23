import {createStackNavigator} from 'react-navigation';
import { BottomTabNavigation } from './BottomTabNavigation';
import CameraScreen from '../screens/CameraScreen';
import SplashScreen from '../screens/SplashScreen';

export const ModalStack = createStackNavigator(
    {
        MainScreen: {
            screen: BottomTabNavigation,
            navigationOptions: {
                gesturesEnabled: false
            }
        },
        CameraScreen: {
            screen: CameraScreen,
            navigationOptions: {gesturesEnable: false}
        }        
    },
    {
        model: 'modal',
        headerMode: 'none'
    }
);
