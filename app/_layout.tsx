import { Colors } from '@/constants/tokens';
import { Sora_400Regular, Sora_600SemiBold, useFonts } from '@expo-google-fonts/sora';
import { SplashScreen, Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
	const insets = useSafeAreaInsets();
	const [fontsLoaded, error] = useFonts({ Sora_600SemiBold, Sora_400Regular });

	useEffect(() => {
		if (fontsLoaded) {
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	useEffect(() => {
		if (error) {
			throw error;
		}
	}, [error]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<StatusBar barStyle="light-content" />
			<Stack
				screenOptions={{
					headerShown: false,
					contentStyle: {
						backgroundColor: Colors.black,
						paddingTop: insets.top,
						paddingBottom: insets.bottom + 43,
					},
				}}
			/>
		</SafeAreaProvider>
	);
};

export default RootLayout;
