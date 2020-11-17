import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import { Splash } from 'app/src/screens';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator<MainTabParamList>();

const MainNavigator = () => {

	return (
		<Stack.Navigator
			mode='modal'
			headerMode='none'
		>
			<Stack.Screen
				name='Splash'
				options={{headerShown: false}}
			>
				{(props) => <Splash navigation={props.navigation} />}
			</Stack.Screen>

			<Stack.Screen
				name='BottomNavigator'
				options={{headerShown: false}}
			>
				{() => <BottomNavigator />}
			</Stack.Screen>
		</Stack.Navigator>
	)

}

export default MainNavigator;