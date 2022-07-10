import { createTheme } from '@nextui-org/react';
import { primary, primaryDark } from '../../constants/Colors';

const theme = {
    theme: {
        colors: {
            primary: primary,
            selection: primary,
            primaryShadow: primary,
            primaryDark: primaryDark,
            link: primary,
            primarySolidHover: primaryDark,
        },
        fonts: {
            sans: "'Rail Alphabet','Johnston Sans', 'Univers', 'Segoe UI', 'Roboto'",
        },
    },
};
export const lightTheme: any = createTheme({
    type: 'light',
    ...theme,
});
export const darkTheme: any = createTheme({
    type: 'dark',
    ...theme,
});
