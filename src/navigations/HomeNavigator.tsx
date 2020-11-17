import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Home } from 'app/src/screens';

const Stack = createStackNavigator<HomeNavigatorParamList>();

export default () => {

	return (
		<Stack.Navigator
			initialRouteName="Home"
			headerMode="none"
		>
			<Stack.Screen
				name="Home"
				options={{ headerShown: false }}
			>
				{() => <Home />}
			</Stack.Screen>
		</Stack.Navigator>
	)

}