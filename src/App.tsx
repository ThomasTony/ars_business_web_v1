
import Layout from './layouts/Layout'
import Home from './pages/Home'
import './App.css'

// Styles
import './assets/css/plugins/fontawesome.css'
import './assets/css/plugins/magnifying-popup.css'
import './assets/css/plugins/metismenu.css'
import './assets/css/plugins/odometer.css'
// import './assets/css/plugins/swiper.css'
import './assets/css/vendor/bootstrap.min.css'

import './assets/css/style.css'

export default function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
