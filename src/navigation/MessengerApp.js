import {createStackNavigator} from 'react-navigation';
import SplashScreen from '../screens/SplashScreen';
import {ModalStack} from './ModalStack';

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