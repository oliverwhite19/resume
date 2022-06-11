import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, globalStyle, Layout } from 'core';
import { authorImage, authorName, favicon } from 'core/constants';

import { data } from '../../_content/Header';

const TITLE = `${authorName}`;
export default class ResumeDocument extends Document {
    render() {
        globalStyle();
        return (
            <Html lang="ko">
                <Head>
                    {CssBaseline.flush()}

                    <link rel="icon" href={favicon.default.src} />
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta name="description" content={data.description} />
                    <meta name="keywords" content="resume,development,developer" />
                    <meta property="og:type" content="website" />
                    <meta property="og:locale" content="ko_KR" />
                    <meta property="og:title" content={TITLE} />
                    <meta property="og:description" content={data.description} />
                    <meta property="og:image" content={authorImage.default.src} />
                    <meta name="twitter:creator" content={authorName} />
                    <meta name="twitter:title" content={TITLE} />
                    <meta name="twitter:description" content={data.description} />
                    <meta name="twitter:image" content={authorImage.default.src} />
                </Head>
                <body>
                    <Layout>
                        <Main />
                        <Footer />
                    </Layout>
                    <NextScript />
                </body>
            </Html>
        );
    }
}
