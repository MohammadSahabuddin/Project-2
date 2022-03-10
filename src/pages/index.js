//Fonts
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';

//Package
import { Container } from '@mui/material';

//Layout
import Layout from 'Layout';

//SEO
import Seo from 'Utils/Seo';

//Components
import Hero from 'Components/Home/Hero';
import Works from 'Components/Works/Works';
import Codef from 'Components/Codef/Codef';
import Brand from 'Components/Brand/Brand';
import Matter from 'Components/Matter/Matter';

export default function Home() {
  return (
    <Layout activePage="home">
      <Seo title="Code Forest 24" />
      <Container maxWidth={false} disableGutters component="section">
        <Hero />
        <Works />
        <Codef />
        <Brand />
        <Matter />
      </Container>
    </Layout>
  );
}
