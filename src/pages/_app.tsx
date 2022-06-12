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
            <NextUIProvider>
                <KBarProvider actions={generateKbarAction()}>
                    <Title />
                    <KbarComponent />
                    <Component {...pageProps} />
                    <Offcanvas />
                </KBarProvider>
            </NextUIProvider>
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
