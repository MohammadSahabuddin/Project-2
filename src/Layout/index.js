//Layout
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';

const index = ({ activePage, children }) => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <Header activePage={activePage} />
      {children}
      <Footer />
    </Box>
  );
};

export default index;
