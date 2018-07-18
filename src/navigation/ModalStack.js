import {createStackNavigator} from 'react-navigation';
import { BottomTabNavigation } from './BottomTabNavigation';
import CameraScreen from '../screens/CameraScreen';
import SplashScreen from '../screens/SplashScreen';

const ModalStack = createStackNavigator(
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

const MessengerApp = createStackNavigator(
    {
        MainScreen: {
            screen: ModalStack,
            navigationOptions: {
                gesturesEnable: false, header: null
            }
        },
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: { gesturesEnabled: false, header: null }
        },
    }
)

export default MessengerApp;