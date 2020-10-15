// Packages
import React from 'react';

// Store
import store from './redux/store';

// Components
import { Provider } from 'react-redux';
import Field from './components/field';
import List from './components/list';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<List />
			<hr />
			<Field />
		</Provider>
	);
};

export default App;
