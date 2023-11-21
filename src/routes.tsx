import { GameDetailPage } from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: 'games/:id',
				element: <GameDetailPage />,
			},
		],
	},
]);

export default router;
