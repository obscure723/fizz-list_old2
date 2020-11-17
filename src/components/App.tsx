import React from 'react';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import AppNavigator from 'app/src/navigations/AppNavigator';
import { images } from 'app/src/config';

import store, { persistor } from 'app/src/stores';

const App: React.FC = () => {

	const [ready, setReady] = React.useState(false);

	const _loadResourcesAsync = async () => {
    	Promise.all([
			Asset.loadAsync(
				Object.keys(images).map(function (key) { return images[key] })
			),
			// Font.loadAsync(fonts),
    	]);
	};

	const _handleLoadingError = (error: Error) => {
		console.warn(error);
	};

	const _handleFinishLoading = () => {
		setReady(true)
	};

	return !ready ? (
		<AppLoading
			startAsync={_loadResourcesAsync}
			onError={_handleLoadingError}
			onFinish={_handleFinishLoading}
		/>
	) : (
			// <Provider store={store}>
			// 	<PersistGate loading={null} persistor={persistor}>
					<AppNavigator />
			// 	</PersistGate>
			// </Provider>
	);
}

export default App