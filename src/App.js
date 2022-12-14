import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';  
// import Navbar from './components/Navbar'       // yeh index.js se aah rha h mtlb different way mh display hoga
// import Exchanges from './components/Exchanges'
// import Homepage from './components/Homepage'
// import Cryptocurrencies from './components/Cryptocurrencies';
// import News from './components/News';
// import CryptoDetails from './components/CryptoDetails';
// import './App.css'


const App = () => {
  return (
    <div className="app">
         <div className="navbar"> 
              <Navbar />
         </div>
         <div className="main">
               <Layout>
                <div className="routes">
                    <Switch>
                       <Route exact path="/">
                           <Homepage />
                       </Route>
                       <Route exact path="/exchanges">
                            <Exchanges />  
                       </Route>
                       <Route exact path="/cryptocurrencies">
                            <Cryptocurrencies />  
                       </Route>
                       <Route exact path="/crypto/:coinId">
                            <CryptoDetails />  
                       </Route>
                       <Route exact path="/news">
                             <News />
                       </Route>
                    </Switch>
                </div>
               </Layout>
         
         <div className="footer">
             <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Cryptoverse <br />
              All rights reserverd
             </Typography.Title>
             <Space>
                 <Link to="/">Home</Link>
                 <Link to="/Exchanges">Exchanges</Link>
                 <Link to="/News">News</Link>
             </Space>
           </div>
         </div>
    </div>
  );
}

export default App
