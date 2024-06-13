import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet, View, Text, Animated } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Color, FontFamily, icons } from "../../theme";
import DrawerScreenWrapper from "../../components/DrawerScreenWrapper";
import Home from "../../screens/mainStack/Home";
import Calender from "../../screens/mainStack/Calender";
import ChatScreen from "../../screens/mainStack/ChatScreen";
import ChatDetailsScreen from "../../screens/mainStack/MessageDetailsScreen";
import LiveSession from "../../screens/mainStack/LiveSession";
import SessionDetails from "../../screens/mainStack/SessionDetails";
import MentorDetails from "../../screens/mainStack/MentorDetails";
import Mentors from "../../screens/mainStack/Mentors";
import SessionBooking from "../../screens/mainStack/SessionBooking";
import CardScreen from "../../screens/mainStack/CardScreen";
import CustomText from "../../components/CustomText";
import { useSelector } from "react-redux";
const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const MessageStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ChatDetails" component={ChatDetailsScreen} />
    </Stack.Navigator>
  );
};

const SessionStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="LiveSession" component={LiveSession} />
      <Stack.Screen name="SessionDetails" component={SessionDetails} />
      <Stack.Screen name="SessionBooking" component={SessionBooking} />
      <Stack.Screen name="CardScreen" component={CardScreen} />
    </Stack.Navigator>
  );
};

const MentorStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChatScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Mentors" component={Mentors} />
      <Stack.Screen name="MentorDetails" component={MentorDetails} />
    </Stack.Navigator>
  );
};

const BottomTab = ({ animatedStyle }) => {
  const { userType } = useSelector((state) => state.user);
  const isMentor = userType === "mentor";

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: isMentor ? Color.primary : Color.yellowPrim,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 75,
          backgroundColor: isMentor ? Color.yellowPrim : Color.primary,
          paddingTop: 20,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Image source={icons.home} style={styles.img} tintColor={color} />
              <CustomText
                label={"Home"}
                marginTop={5}
                fontSize={12}
                fontFamily={FontFamily.barlowMedium}
                color={color}
              />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Calendar"
        component={Calender}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Image
                source={icons.calendar}
                style={styles.img}
                tintColor={color}
              />
              <CustomText
                label={"Calendar"}
                marginTop={5}
                fontSize={12}
                fontFamily={FontFamily.barlowMedium}
                color={color}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Sessions"
        component={SessionStacks}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Image
                source={icons.session}
                style={styles.img}
                tintColor={color}
              />
              <CustomText
                label={"Sessions"}
                marginTop={5}
                fontSize={12}
                fontFamily={FontFamily.barlowMedium}
                color={color}
              />
            </>
          ),
        }}
      />
      {!isMentor && (
        <Tab.Screen
          name="Mentors"
          component={MentorStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <>
                <Image
                  source={icons.profile}
                  style={styles.img}
                  tintColor={color}
                />
                <CustomText
                  label={"Mentors"}
                  marginTop={5}
                  fontSize={12}
                  fontFamily={FontFamily.barlowMedium}
                  color={color}
                />
              </>
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Chat"
        component={MessageStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <>
              <Image source={icons.chat} style={styles.img} tintColor={color} />
              <CustomText
                label={"Chat"}
                marginTop={5}
                fontSize={12}
                fontFamily={FontFamily.barlowMedium}
                color={color}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  img: {
    height: 22,
    resizeMode: "contain",
    width: 22,
  },
});
export default BottomTab;
