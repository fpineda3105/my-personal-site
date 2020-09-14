import Head from 'next/head'
import Link from 'next/link'
import {BASE_URI} from '../components/utils/meta'

export default function About( {meta} ) {
    return (
        <div className="content pure-u-1 pure-u-md-3-4">
             <Head>
                <title>{meta.titlePage}</title>                
            </Head>  
            <div className="about-me">
                <p >
                    Hola, soy un apasionado y pragmático constructor de software en constante aprendizaje con 8 años de experiencia en distintos proyectos.
                    He liderado equipos de desarrollo y participado en la creación de software de principio a fin, de API's y siempre pensando en un buen diseño. 
                    Inclinación hacia la arquitectura e implementación a nivel de Backend pero también poseo conocimientos de tecnologías FrontEnd.
                    He creado flujos de integración continua, liberación y despliegue de componentes utilizando contenedores (Docker) y orquestador de contenedores (Kubernetes) 
                    en ambientes Cloud (Azure / IBM Cloud).
                    Actualmente ubicado en Lima - Perú, he creado mi sitio personal con la intención de compartir conocimiento y mis intereses 
                    relacionados con la construcción de software utilizando las buenas prácticas, nuevas tecnologías y Cloud computing. Estudié Ciencias de la Computación en la Universidad
                    Central de Venezuela y aparte de programar me gusta una buena arepa, leer, jugar baloncesto (fanático de los Lakers), ver series, 
                    bailar (me gusta la salsa), el café, etc. Eres libre de contactarme y espero que sea provechoso el 
                    conocimiento que pueda compartir.                    
                </p>                
            </div>
            <Link href="/">
                        <a>← volver</a>
                    </Link>
        </div>
    )
}


export async function getStaticProps() {
    return {
        props: {
            meta : {
                titlePage : "About me | Fernando Pineda",
                title: "About",
                url: BASE_URI + "/about-me",                
            }
        }
    }
}



