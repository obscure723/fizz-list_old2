import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { NeuButton } from "neumorphism-ui";

import { fontColor } from 'app/src/config';

import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

export default () => {
	return (
		<Tab.Navigator
			tabBarOptions={{
				showLabel: false
			}}
		>
			<Tab.Screen
				name="HomeNavigator"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ focused, size }) => (
						<NeuButton style={{ height: 50, width: 50, }} onPress={() => { }} >
							<Ionicons name="ios-list" size={size} color={focused ? fontColor.normal : fontColor.light} />
						</NeuButton>
					),
				}}
			/>

			<Tab.Screen
				name="SettingNavigator"
				component={HomeNavigator}
				options={{
					tabBarIcon: ({ focused, size }) => (
						<NeuButton style={{ height: 150, width: 150, borderRadius: 75 }} onPress={() => { }} >
							<Ionicons name="md-settings" size={size} color={focused ? fontColor.normal : fontColor.light} />
						</NeuButton>
					)
				}}
			/>
		</Tab.Navigator>
	)
}