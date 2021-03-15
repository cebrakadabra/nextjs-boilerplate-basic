import React from 'react';
import Router from 'next/router'
import Head from "next/head";
import NProgress from 'nprogress';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import '../styles/main.less';

// module.hot.dispose event not being called on local dev causes css loss from time to time
// https://github.com/sheerun/extracted-loader/issues/11
if (module.hot) {
    module.hot.addStatusHandler(status => {
        if (typeof window !== "undefined" && status === "ready") {
            window.__webpack_reload_css__ = true;
        }
    });
}

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start();
});
Router.events.on('routeChangeComplete', (url) => {
    NProgress.done();
    window.gtag('config', 'G-QMRLT52N44', {
        page_path: url,
    });
});
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({Component, pageProps}) {

    return (
        <>
            <Head>
                <title>relax-tax.at - Einfach steuern erklären | in Österreich</title>
                <script type='application/ld+json'
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Organization",
                            "url": "https://www.relax-tax.at",
                            "logo": "https://www.relax-tax.at/v2/relax-tax.at-wort-bildmarke.png"
                        }),
                    }}
                />
                <meta charSet="utf-8"/>
                <meta name="viewport" content="initial-scale=1.0" width="device-width"/>
                <link rel="icon" type="image/png" href="/v2/favicon.png"/>
                <meta name="keywords" content="Steuerausgleich, Steuerausgleich Österreich, Steuerausgleich Österreich App, Steuer Ausgleich, Steuererklärung, Steuererklärung Österreich, Finanzamt Österreich, relaxtax, einfach steuern erklären, steuerapp, steuer app" />
                <meta name="description"
                      content="Steuerausgleich in Österreich per App. Schluss mit Kennzahlen in Finanz Online. In wenigen Minuten einfach Steuern erklären in Österreich und automatisch beim Finanzamt in Österreich einreichen."/>
                <meta property="og:title" content="relax-tax.at - Einfach steuern erklären"/>
                <meta property="og:summary"
                      content="Steuerausgleich in Österreich per App. Schluss mit Kennzahlen in Finanz Online und Papierkram. relax-tax.at App ermöglicht es einfach per Fragebogen, ohne Vorwissen einen Steuerausgleich beim Finanzamt Österreich vollautomatisch einzureichen. Neben dem smarten Fragebogen, stellen wir auch mehrere Upload Möglichkeiten zur Verfügung. Wir bieten rund um Service, sodass der Steuerausgleich in Österreich einen Schritt in Richtung Digitalisierung macht."/>
                <meta property="og:description"
                      content="Schluss mit Kennzahlen in Finanz Online. In wenigen Minuten einfach Steuern erklären in Österreich und automatisch beim Finanzamt in Österreich einreichen."/>
                <meta property="og:url" content="https://www.relax-tax.at/"/>
                <meta property="og:type" content="product"/>
                <meta property="og:image" content="https://www.relax-tax.at/v2/relax-tax-sharing-image-de.jpg"/>
                <meta property="og:image:width" content="896"/>
                <meta property="og:image:height" content="360"/>
                <meta property="twitter:image" content="https://www.relax-tax.at/v2/relax-tax-sharing-image-de.jpg"/>
                <meta property="twitter:card" content="photo"/>
                <meta property="twitter:image:width" content="896"/>
                <meta property="twitter:image:height" content="360"/>

                {/* Global site tag (gtag.js) - Google Analytics --> */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-QMRLT52N44" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'G-QMRLT52N44', {
                                page_path: window.location.pathname,
                            });
                        `,
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp;
