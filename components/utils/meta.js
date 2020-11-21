import Head from 'next/head'
export const BASE_URI = "https://fpinedadev.com";

const DEFAULT_DESCRIPTION = "Fernando Pineda apasionado por el aprendizaje continuo, la construcción de software y la innovación";
const DEFAULT_TITLE = "Fernando Pineda"

export default function Meta( {props} ) {    
    return (
        <Head>            
            <meta name="og:title" property="og:title" content={props?.title ? props.title : DEFAULT_TITLE} />
            <meta property="og:url" content={`${props?.url ? props.url : BASE_URI}`}></meta>
            <meta name="author" content="Fernando Pineda"></meta>
            <meta property="og:image" content={props?.image ? props.image : ""}></meta>
            <meta property="og:site_name" content="Fernando Pineda"></meta>
            <meta property="og:type" content={props?.contentType ? props.contentType : "profile"}></meta>
            <meta name="og:description" property="og:description" content={props?.description ? props.description : DEFAULT_DESCRIPTION}></meta>
            <meta name="twitter:card" content="summary" />            
            <meta name="twitter:url" content={`${props?.url ? props.url : BASE_URI}`}></meta>
            <meta name="twitter:title" content={props?.title ? props.title : DEFAULT_TITLE }></meta>
            <meta name="twitter:description" property="og:description" content={props?.description ? props.description : DEFAULT_DESCRIPTION}></meta>
            <meta name="twitter:site" content="@_fpineda"></meta>
            <meta name="twitter:creator" content="@_fpineda"></meta>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
            <link rel="canonical" href={`${props?.url ? props.url : BASE_URI}`}></link>
            <link rel="icon" href="/favicon.png" />
            <meta name="description" content={props?.description ? props.description : DEFAULT_DESCRIPTION}></meta>
        </Head>
        
    );
    
}