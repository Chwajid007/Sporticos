import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Color, icons, images } from "../../../theme";
import MessageHeader from "./molecules/MessageHeader";
import CustomText from "../../../components/CustomText";

const messages = [
  {
    id: "1",
    type: "text",
    text: "Good day! I need help with my test results",
    time: "10:24 AM",
    sender: "user",
  },
  {
    id: "2",
    type: "image",
    uri: images.slide1,
    time: "10:25 AM",
    sender: "user",
    text: "Here it is",
  },
  {
    id: "3",
    type: "text",
    text: "Hello, John! Just give me 5 min, please",
    time: "10:27 AM",
    sender: "elia",
  },
];

const MessageItem = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <>
      <View style={!isUser && styles.rowImg}>
        {!isUser && <Image source={images.girl} style={styles.profileImg} />}
        <View
          style={[
            styles.messageContainer,
            isUser ? styles.userMessage : styles.eliaMessage,
          ]}
        >
          <CustomText
            label={message.text}
            fontSize={18}
            color={isUser ? Color.black : Color.white}
          />
          {message.type === "image" && (
            <Image source={message.uri} style={styles.messageImage} />
          )}
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: !isUser ? "flex-start" : "flex-end",
          paddingLeft: isUser ? 0 : 40,
        }}
      >
        <Image source={icons.doubleTick} style={styles.doubleTick} />
        <CustomText
          label={message.time}
          alignSelf={isUser ? "flex-end" : "flex-start"}
          marginLeft={5}
          fontSize={14}
          color={Color.grey20}
        />
      </View>
    </>
  );
};

const ChatDetailsScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MessageHeader
        name="Elia Ana"
        profileImage={images.girl}
        onBackPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <FlatList
          data={messages}
          renderItem={({ item }) => <MessageItem message={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.messagesList}
        />
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <TextInput
              placeholder="Type your message here"
              placeholderTextColor={Color.grey20}
              style={{ width: "80%", fontSize: 18 }}
            />
            <Image source={icons.attachment} style={styles.sendIcon} />
          </View>

          <TouchableOpacity
            style={styles.sendButton}
            onPress={() => navigation.navigate("Drawer")}
          >
            <Image source={icons.send} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  messagesList: {
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: Color.messageBodyColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 10,
  },
  eliaMessage: {
    alignSelf: "flex-start",
    backgroundColor: Color.primary,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
  },
  messageText: {
    fontSize: 16,
  },
  messageImage: {
    // width: "100%",
    width: 250,
    height: "90%",
    resizeMode: "contain",
    marginTop: 10,
  },
  messageTime: {
    fontSize: 12,
    color: "#999",
    // marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sendButton: {
    backgroundColor: Color.primary,
    borderRadius: 10,
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  profileImg: {
    height: 35,
    width: 35,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 10,
  },
  rowImg: { flexDirection: "row", alignItems: "flex-end", marginTop: 10 },
  doubleTick: {
    height: 16,
    width: 16,
  },
});

export default ChatDetailsScreen;
