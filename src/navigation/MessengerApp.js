import {createStackNavigator} from 'react-navigation';
import {ModalStack} from './ModalStack';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

const MessengerApp = createStackNavigator(
    {
        SplashScreen: {
            screen: SplashScreen,
            navigationOptions: { gesturesEnabled: false, header: null }
        },
        MainScreen: {
            screen: ModalStack,
            navigationOptions: {
                gesturesEnable: false, header: null
            }
        },
        ChatScreen: {
            screen: ChatScreen,
            navigationOptions: {gesturesEnabled: false, header: null}
        }
    }
)

export default MessengerApp;