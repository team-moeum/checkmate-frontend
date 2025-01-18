import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity } from "react-native";

interface NavItemProps {
  image: ImageSourcePropType;
  label: string;
  description?: string;
  onPress: () => void;
}

export const NavItem = ({ image, label, description, onPress }: NavItemProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
      {description && <Text style={styles.description}>{description}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    height: 108
  },
  image: {
    width: 40,
    height: 40
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: "#494F54",
    textAlign: "center"
  },
  description: {
    fontSize: 14,
    color: "#A6ABAF",
    textAlign: "center"
  }
});
