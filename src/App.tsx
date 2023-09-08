import React, { useMemo, useState } from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext, ApplicationContext, Items } from './context';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Basket from './components/Basket';
import Summary from './components/Summary';
import Addons from './components/Addons';
import ThankYou from './components/ThankYou';

interface Props {
  items: Items;
}

function App({ items }: Props) {
  const [boxen, setBoxen] = useState(1);
  const [basket, setBasket] = useState<ApplicationContext['basket']>([{}]);
  const [addons, setAddons] = useState<ApplicationContext['addons']>({});

  const ctx: ApplicationContext = useMemo(() => {
    const updateBoxen = (boxen: number): void => {
      setBoxen(boxen);
      const updatedBasket = [...basket];
      updatedBasket.length = boxen;
      for (let i = 0; i < boxen; ++i) {
        updatedBasket[i] ??= {};
      }

      setBasket(updatedBasket);
    };

    const updateBasket = (box: number, group: string, value: number): void => {
      const updatedBasket = [...basket];
      if (value) {
        updatedBasket[box][group] = value;
      } else {
        delete updatedBasket[box][group];
      }

      setBasket(updatedBasket);
    };

    const updateAddon = (id: number, value: number): void => {
      const updatedAddons = { ...addons };
      updatedAddons[id] = value;
      setAddons(updatedAddons);
    };

    return {
      items,
      boxen,
      basket,
      addons,
      updateBoxen,
      updateBasket,
      updateAddon,
    }
  }, [items, boxen, basket, addons]);

  return (
    <AppContext.Provider value={ctx}>
      <Router>
        <Container fluid>
          <Header />
          <Routes>
            <Route path='/basket' element={<Basket />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/summary' element={<Summary />} />
            <Route path='/addons' element={<Addons />} />
            <Route path='/thank-you' element={<ThankYou />} />
            <Route path='/' element={<Home boxen={boxen} onNumberChanged={ctx.updateBoxen} />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
