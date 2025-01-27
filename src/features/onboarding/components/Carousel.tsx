import React, { useState, useEffect } from "react";
import { Animated, View, Text, StyleSheet, Dimensions } from "react-native";

interface ICarousel {
  items: {
    title1: string;
    highlight1: string;
    highlight2: string;
    title2: string;
  }[];
  gap: number;
  pageWidth: number;
}

const CarouselComponent = ({ items, gap, pageWidth }: ICarousel) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = new Animated.Value(0);
  const totalItems = items.length;

  const extendedItems = [...items, ...items, ...items];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % totalItems);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [totalItems]);

  useEffect(() => {
    Animated.spring(scrollX, {
      toValue: -(activeIndex + 1) * (pageWidth + gap),
      useNativeDriver: true
    }).start();
  }, [activeIndex]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flexDirection: "row",
          transform: [{ translateX: scrollX }]
        }}
      >
        {extendedItems.map((item, index) => (
          <View key={index} style={{ width: pageWidth, marginHorizontal: gap / 2 }}>
            <Text style={styles.title}>
              {item.title1} <Text style={styles.highlight}>{item.highlight1}</Text>
            </Text>
            <Text style={styles.title}>
              <Text style={styles.highlight}>{item.highlight2}</Text> {item.title2}
            </Text>
          </View>
        ))}
      </Animated.View>

      {/* 페이지 인디케이터 */}
      <View style={styles.indicatorWrapper}>
        {items.map((_, index) => (
          <View
            key={`indicator_${index}`}
            style={[
              styles.indicator,
              { backgroundColor: index === activeIndex ? "#262626" : "#dfdfdf" }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center"
  },
  highlight: {
    color: "#00CC51"
  },
  indicatorWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 4
  }
});

export default CarouselComponent;
