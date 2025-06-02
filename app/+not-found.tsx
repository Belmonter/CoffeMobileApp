import { Colors, FontFamily, Fonts } from '@/constants/tokens';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const UnmatchedCustom = () => {
	return (
		<View style={styles.container}>
			<Link style={styles.link} href={'/'}>
				На главную
			</Link>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	link: {
		fontSize: Fonts.f34,
		fontFamily: FontFamily.SoraSemiBold,
		textAlign: 'center',
		color: Colors.white,
	},
});

export default UnmatchedCustom;
