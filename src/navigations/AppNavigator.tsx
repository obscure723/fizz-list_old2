import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import { colors } from 'app/src/config';

const MyTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: colors.baseColor
	},
};

export default () => {
	return (
		<NavigationContainer theme={MyTheme}>
			<MainNavigator />
		</NavigationContainer>
	)
};