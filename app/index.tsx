import CustomButton from '@/components/CustomButton/CustomButton';
import { Colors, FontFamily, Fonts } from '@/constants/tokens';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Animated } from 'react-native';

const App = () => {
	const animatedValue = new Animated.Value(-80);

	const opacityValue = animatedValue.interpolate({
		inputRange: [-80, 0],
		outputRange: [0, 1],
	});

	useEffect(() => {
		Animated.timing(animatedValue, {
			toValue: 0,
			duration: 2000,
			useNativeDriver: true,
		}).start();
	});

	return (
		<ImageBackground
			source={require('../assets/images/coffee-background.jpg')}
			resizeMode="contain"
			style={styles.imageBackground}
		>
			<View style={styles.contentWrapper}>
				<LinearGradient
					style={styles.content}
					colors={['rgba(0,0,0,0)', '#000']}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
					locations={[0, 0.2673]}
				>
					<Animated.Text style={{ ...styles.title, transform: [{ translateY: animatedValue }], opacity: opacityValue }}>
						Одно из самых вкусных кофе в городе!
					</Animated.Text>
					<Text style={styles.subtitle}>Свежие зёрна, настоящая арабика и бережная обжарка</Text>
					<CustomButton style={styles.button} text="Начать" />
				</LinearGradient>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBackground: {
		...StyleSheet.absoluteFillObject,
		top: '-18%',
	},
	contentWrapper: {
		justifyContent: 'flex-end',
		flex: 1,
	},
	content: {
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: Fonts.f34,
		fontFamily: FontFamily.SoraSemiBold,
		textAlign: 'center',
		color: Colors.white,
	},
	subtitle: {
		marginTop: 8,
		maxWidth: 300,
		fontSize: Fonts.f14,
		fontFamily: FontFamily.SoraRegular,
		color: Colors.grey,
		textAlign: 'center',
	},
	button: {
		marginTop: 24,
		width: '100%',
	},
});

export default App;
