import { Colors, Fonts, Radius } from '@/constants/tokens';
import { Link } from 'expo-router';
import { Pressable, PressableProps, StyleSheet, Animated } from 'react-native';

const CustomButton = ({ text, ...props }: PressableProps & { text: string }) => {
	const animatedValue = new Animated.Value(100);
	const buttonColor = animatedValue.interpolate({
		inputRange: [0, 100],
		outputRange: [Colors.darkPrimary, Colors.primary],
	});

	const fadeIn = () => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(animatedValue, {
			toValue: 100,
			duration: 100,
			useNativeDriver: true,
		}).start();
	};

	return (
		<Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
			<Animated.View style={{ ...styles.button, backgroundColor: buttonColor }}>
				<Link href={'/catalogs'} style={styles.text}>
					{text}
				</Link>
			</Animated.View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		height: 62,
		borderRadius: Radius.r10,
	},
	text: {
		color: Colors.white,
		fontSize: Fonts.f16,
	},
});

export default CustomButton;
