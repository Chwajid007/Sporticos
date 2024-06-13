import { StyleSheet, SafeAreaView, View, FlatList } from "react-native";
import React from "react";
import CustomText from "../../../components/CustomText";
import { Color, FontFamily } from "../../../theme";
import ChatRow from "./molecules/ChatRow";

const ChatScreen = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.container}>
        <CustomText
          label={"Chat"}
          fontSize={20}
          alignSelf={"center"}
          fontFamily={FontFamily?.barlowBold}
          marginBottom={30}
        />
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={() => <ChatRow />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
