import { createContext, useState } from 'react';

export const TrailerContext = createContext();

export const TrailerProvider = ({ children }) => {
	const [video, setVideo] = useState(
		JSON.parse(window.localStorage.getItem('videos')),
	);

	return (
		<TrailerContext.Provider value={{ video, setVideo }}>
			{children}
		</TrailerContext.Provider>
	);
};
