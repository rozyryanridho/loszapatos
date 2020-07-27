import Head from 'next/head'
import Footer from '../components/footer.js'
import Menu from '../components/menu.js';


export default function Layout(props) {
    return(
        <div>
          <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css"/>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossOrigin="anonymous"></script>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <link rel="stylesheet" href="external/style.css"/>
            <title>Los Zapatos</title>

          </Head>
      
          <div>
                <section>
                <Menu/>
                    <div>
                        {props.children}
                    </div>
                </section>
                <Footer/>
            <script src="external/nav.js"></script>
          </div>
        </div>
    )
}