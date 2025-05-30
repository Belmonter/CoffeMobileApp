import { Colors, Fonts, Radius } from "@/constants/tokens";
import { Pressable, PressableProps, View, StyleSheet, Text } from "react-native";

const Button = ({text, ...props}: PressableProps & { text: string }) => {
  return (
    <Pressable {...props}>
      <View style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 62,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
  },
  text: {
    color: Colors.white,
    fontSize: Fonts.f16,
  }
})

export default Button;
