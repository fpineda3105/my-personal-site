import Head from 'next/head'
import SideBar from './sidebar/sideBar'

export const siteTitle = 'Fernando Pineda';

export default function Layout({children}) {     
    return (        
        <div id="layout" className="pure-g">
            <Head>            
                <meta name="og:title" content={siteTitle} />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <link rel="icon" href="/favicon.png" />
                <meta name="description" content="Sitio personal de Fernando Pineda para compartir conocimiento acerca de Construcción de Software usando buenas prácticas"></meta>
            </Head>
            <SideBar />
            {children}                                 
        </div>  
    );
}