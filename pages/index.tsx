import type { NextPage } from 'next'
import { useHover } from '@mantine/hooks';
import {HeroTitle} from './components/HeroHeader';
import Features from './components/Features';
import Faq from './components/faq';
import Footer from './components/Footer';
import Header from './components/Headers';
import Menu from './components/Menu-cards';
import Switch from './components/light-dark-switch';

const Home: NextPage = () => {
  const { hovered, ref } = useHover();

  return (
    <>
    <Switch/>
    <Header user={{
        name: 'landing test mantine',
        image: ''
      }} tabs={['home', 'features', 'test', 'test2']}/>
    <HeroTitle/>
    <Features/>
    <Menu/>
    <Faq/>
    <Footer links={[]}/>
    </>
  );
}

export default Home
