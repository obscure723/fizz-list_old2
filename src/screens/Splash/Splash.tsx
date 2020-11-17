import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<MainTabParamList, 'Splash'>;
interface Props {
  navigation: NavigationProp;
}

const component: React.FC<Props> = ({ navigation }) => {

	React.useEffect(() => {

		setTimeout(
			() => {
				navigation.replace('BottomNavigator')
			},
			1500,
		)
  	}, [])

	return (
		<View>
			<Text>Splash</Text>
		</View>
	)

}

export default component;