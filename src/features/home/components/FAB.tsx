import { Text, TouchableOpacity, View } from "react-native";

export const FAB = ({ onPress }: { onPress: () => void }) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text>Button</Text>
      </TouchableOpacity>
    </View>
  );
};
