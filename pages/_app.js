import "@fortawesome/fontawesome-svg-core/styles.css"
import '../styles/globals.css'
import 'purecss/build/pure-min.css'
import 'purecss/build/grids-responsive-min.css'
import 'highlight.js/styles/night-owl.css'

import Layout from '../components/layout'
import { config } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout pageProps>
        <Component {...pageProps} />
    </Layout>
  )
  
}

export default MyApp
