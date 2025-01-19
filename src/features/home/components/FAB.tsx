import { StyleSheet, TouchableOpacity, View } from "react-native";
import AddIcon from "assets/icons/add.svg";

export const FAB = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={onPress}>
        <AddIcon width={32} height={32} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#00CC51",
    alignItems: "center",
    justifyContent: "center",
    // iOS shadow
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.25,
    shadowRadius: 16
    // Android shadow
  }
});
