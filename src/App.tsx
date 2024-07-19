import { Outlet } from 'react-router-dom';
import { Footer, Header, Layout } from './components';

export const App: React.FC = () => (
  <Layout
    header={<Header />}
    main={<Outlet />}
    footer={<Footer />}
  />
);
