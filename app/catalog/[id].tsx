import { Colors } from '@/constants/tokens';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

const CoffeeCard = () => {
	const { id } = useLocalSearchParams();

	return (
		<View>
			<Text style={{ color: Colors.white }}>Catalog {id}</Text>
		</View>
	);
};

export default CoffeeCard;
