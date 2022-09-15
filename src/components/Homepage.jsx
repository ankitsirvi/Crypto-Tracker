import React from 'react';
// that will formet our numbers or string
import millify from 'millify';     
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components'

const { Title } = Typography; 

const Homepage = () => {
  // caling the data from the useGetCryptosQuery
    const { data, isFetching } = useGetCryptosQuery();             
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...';

  return (
      <>
       {/* Typography.title ko title hi likunge qki uper define kr dya h eslie */}
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row>
        {/* means it will take 12 spaces */}
         <Col span ={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
         <Col span ={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
         <Col span ={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
         <Col span ={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
         <Col span ={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
          <Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Title>
          <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <Cryptocurrencies simplified />  
      {/* // Render to show */}
      <div className="home-heading-container">
          <Title level={2} className="home-list">Latest Crypto News</Title>
          <Title level={3} className="show-more"><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />    
       {/* Render to show */}
      </>
  )
} 

export default Homepage


// fecting real time from rapid api using redux toolkit