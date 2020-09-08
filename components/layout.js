import Head from 'next/head'
import SideBar from '../components/sideBar'


export const siteTitle = 'Fernando Pineda';

export default function Layout({children}) { 
    
    return (        
        <div id="layout" className="pure-g">
            <Head>            
                <meta name="og:title" content={siteTitle} />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
                <link rel="icon" href="/favicon.png" />
                
            </Head>
            <SideBar />
            {children}                                 
        </div>  
    );
}