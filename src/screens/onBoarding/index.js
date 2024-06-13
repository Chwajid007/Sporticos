import React, { useState, useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Color, FontFamily, images } from "../../theme";
import CustomText from "../../components/CustomText";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Wherever You Are Health Is Number One",
    subtitle: "There is no instant way to a healthy life",
    image: images.sliderImg,
    buttonText: "Next",
  },
  {
    id: "2",
    title: "Wherever You Are Health Is Number One",
    subtitle: "There is no instant way to a healthy life",
    image: images.sliderImg,
    buttonText: "Next",
  },
  {
    id: "3",
    title: "Wherever You Are Health Is Number One",
    subtitle: "There is no instant way to a healthy life",
    image: images.sliderImg,
    buttonText: "Get Started",
  },
];

const Slide = ({ item }) => (
  <View style={styles.slide}>
    <Image source={item.image} style={styles.image} />
    <LinearGradient
      colors={[
        "rgba(33, 42, 56, 0)",
        "rgba(33, 42, 56, 0.5)",
        "rgba(33, 42, 56, 1)",
      ]}
      style={styles.overlay}
    >
      <View style={{ height: "80%", justifyContent: "flex-end" }}>
        <CustomText
          label={item.title}
          fontFamily={FontFamily.barlowMedium}
          fontSize={24}
          textAlign="center"
          color={Color.white}
          alignSelf="center"
          width="80%"
        />
        <CustomText
          label={item.subtitle}
          textAlign="center"
          color={Color.white}
          alignSelf="center"
          width="80%"
          marginTop={20}
        />
      </View>
    </LinearGradient>
  </View>
);

const OnboardingSlider = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }) => {
    return <Slide item={item} />;
  };

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setActiveSlide(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
      />
      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              {
                backgroundColor:
                  index === activeSlide ? Color.yellowPrim : Color.black,
              },
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (activeSlide < slides.length - 1) {
            setActiveSlide(activeSlide + 1);
          } else {
            navigation.navigate("AuthSelction");
          }
        }}
      >
        <Text style={styles.buttonText}>
          {activeSlide === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.black,
  },
  slide: {
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  overlay: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: Color.white,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  subtitle: {
    color: Color.white,
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: Color.yellowPrim,
    height: 56,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    width: "90%",
    alignSelf: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  pagination: {
    position: "absolute",
    bottom: 130,
    flexDirection: "row",
    alignSelf: "center",
    width: 65,
    backgroundColor: Color.yellowPrim,
    borderRadius: 5,
    height: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 20,
    height: 3,
    borderRadius: 5,
  },
});

export default OnboardingSlider;
