import React from 'react';
import {connect} from 'dva';
import HomeLayout from '../components/HomeLayout';

function Home({location, dispatch}) {
  return (
    <HomeLayout location={location} dispatch={dispatch}>
    </HomeLayout>
  );
}

export default Home;

