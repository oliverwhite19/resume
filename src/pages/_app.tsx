import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { KBarProvider } from 'kbar';
import generateKbarAction from '../constants/KbarActions';
import { authorName } from '../constants/General';
import { darkTheme, lightTheme } from '../styles';
import Offcanvas from '../components/Navigation/Offcanvas';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';
import { NextUIProvider } from '@nextui-org/react';

const KbarComponent = dynamic(() => import('../components/Kbar'), {
    ssr: false,
});

export default function ResumeApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider
            defaultTheme="system"
            attribute="class"
            value={{ light: lightTheme.className, dark: darkTheme.className }}
        >
            <NextUIProvider>
                <UserProvider>
                    <KBarProvider actions={generateKbarAction()}>
                        <Title />
                        <KbarComponent />
                        <Offcanvas />
                        <Layout>
                            <Component {...pageProps} />
                            <Footer />
                        </Layout>
                    </KBarProvider>
                </UserProvider>
            </NextUIProvider>
        </ThemeProvider>
    );
}

function Title() {
    return (
        <Head>
            <title>{`${authorName}`}</title>
        </Head>
    );
}
