import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings166518Navigator from '../features/Settings166518/navigator';
import Settings166503Navigator from '../features/Settings166503/navigator';
import NotificationList166502Navigator from '../features/NotificationList166502/navigator';
import Maps166501Navigator from '../features/Maps166501/navigator';
import SignIn24166496Navigator from '../features/SignIn24166496/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings166518: { screen: Settings166518Navigator },
Settings166503: { screen: Settings166503Navigator },
NotificationList166502: { screen: NotificationList166502Navigator },
Maps166501: { screen: Maps166501Navigator },
SignIn24166496: { screen: SignIn24166496Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
