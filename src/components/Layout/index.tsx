import * as React from 'react'
import './index.scss'

// import Header from '../Header';
import Footer from '../../components/Footer/index'
import Side from '../../components/Side/index'

export default ({ children }: any) => (
  <div className="Layout__container">
    {/* <Header /> */}
    <div className="Layout__content">
      <Side />
      {children}
    </div>
    <Footer />
  </div>
)
