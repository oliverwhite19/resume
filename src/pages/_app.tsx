import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { KBarProvider } from 'kbar';
import generateKbarAction from '../constants/KbarActions';
import { authorName } from '../constants/General';
import { darkTheme, lightTheme } from '../styles';
import Offcanvas from '../components/Navigation/Offcanvas';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Layout } from '../components/Layout';
import { Footer } from '../components/Footer';

const KbarComponent = dynamic(() => import('../components/Kbar'), {
    ssr: false,
});

export default function ResumeApp({ Component, pageProps }: AppProps) {
    return (
        <NextThemesProvider
            defaultTheme="system"
            attribute="class"
            value={{ light: lightTheme.className, dark: darkTheme.className }}
        >
            <UserProvider>
                <NextUIProvider>
                    <KBarProvider actions={generateKbarAction()}>
                        <Title />
                        <KbarComponent />
                        <Layout>
                            <Component {...pageProps} />
                            <Footer />
                        </Layout>
                        <Offcanvas />
                    </KBarProvider>
                </NextUIProvider>
            </UserProvider>
        </NextThemesProvider>
    );
}

function Title() {
    return (
        <Head>
            <title>{`${authorName}`}</title>
        </Head>
    );
}
