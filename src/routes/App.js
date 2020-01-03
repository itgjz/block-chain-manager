import React from 'react';
import { connect } from 'dva';

import Layout from '../components/Layout'

const App = (props) => {
  return (
    <Layout {...props} />
  )
}

export default connect(({ app, layout }) => ({ app, layout }))(App);
