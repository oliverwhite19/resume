import { createTheme, theme } from '@nextui-org/react';
import { darkCode, darkCodeLight, darkPrimary, darkPrimaryDark, darkSelection } from '../../constants';
import { getColor } from './getColor';

export const darkTheme: any = createTheme({
    type: 'dark',
    theme: {
        colors: {
            primary: getColor(darkPrimary, theme.colors.primary.value),
            selection: getColor(darkSelection, theme.colors.selection.value),
            code: getColor(darkCode, theme.colors.code.value),
            codeLight: getColor(darkCodeLight, theme.colors.codeLight.value),
            primaryShadow: getColor(darkPrimary, theme.colors.primary.value),
            primaryDark: getColor(darkPrimaryDark, theme.colors.primary.value),
            link: getColor(darkPrimary, theme.colors.primary.value),
            primarySolidHover: getColor(darkPrimaryDark, theme.colors.primary.value),
        },
        fonts: {
            sans: "'Rail Alphabet','Johnston Sans', 'Univers', 'Segoe UI', 'Roboto'",
        },
    },
});
