import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <div>
      <Link to="/async">async로 이동</Link>
      <Link to="/calculator">계산기로 이동</Link>
      <Link to="/counter">카운터</Link>
    </div>
    hoilzz 의 home 입니다
  </div>
);

export default Home;
