import '../styles/globals.css'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import '@fortawesome/fontawesome-free/js/all.min.js'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
