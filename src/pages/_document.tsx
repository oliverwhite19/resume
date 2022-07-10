import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';

import { data } from '../../_content/Header';
import { authorImage, authorName, favicon } from '../constants/General';
import { globalStyle } from '../styles';

const TITLE = `${authorName}`;
export default class ResumeDocument extends Document {
    render() {
        globalStyle();
        return (
            <Html lang="en">
                <Head>
                    {CssBaseline.flush()}
                    <link rel="icon" href={favicon.default.src} />
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="description" content={data.description} />
                    <meta name="keywords" content="resume,development,developer" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="en_CA" />
                    <meta property="og:title" content={TITLE} />
                    <meta property="og:description" content={data.description} />
                    <meta property="og:image" content={authorImage.default.src} />
                    <meta name="twitter:creator" content={authorName} />
                    <meta name="twitter:title" content={TITLE} />
                    <meta name="twitter:description" content={data.description} />
                    <meta name="twitter:image" content={authorImage.default.src} />
                </Head>
                <body>
                    <script src="noflash.js" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
