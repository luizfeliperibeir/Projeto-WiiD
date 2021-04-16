import { MuiThemeProvider, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import './App.css';
import Main from './Pages/PageMain/M';
import Login from './Pages/PageLogin/L';
import getMuiTheme from './Constants/Thm/Thm';

const App = () => {
	const [isAutenticaded, setIsAutenticaded] = useState(false);
	const [darkMode, setDarkMode] = useState(false);

	return (
		<MuiThemeProvider theme={getMuiTheme(darkMode)}>
			<Paper>
				{isAutenticaded ? (
					<Main
						darkMode={darkMode}
						handleDarkMode={() => {
							setDarkMode(!darkMode);
						}}
					/>
				) : (
					<Login onLogin={() => setIsAutenticaded(!isAutenticaded)} />
				)}
			</Paper>
		</MuiThemeProvider>
	);
};

export default App;