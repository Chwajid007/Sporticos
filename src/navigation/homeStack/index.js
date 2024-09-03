import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerNavigator from "../drawer";
import Notification from "../../screens/mainStack/Notification";

const stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <stack.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
    >
      <stack.Screen name="Drawer" component={DrawerNavigator} />
      <stack.Screen name="Notification" component={Notification} />
    </stack.Navigator>
  );
};

export default HomeStack
