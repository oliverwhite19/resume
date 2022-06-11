import { createTheme, theme } from '@nextui-org/react';
import { lightCode, lightCodeLight, lightPrimary, lightPrimaryDark, lightSelection } from '../../constants/Colors';
import { getColor } from './getColor';

export const lightTheme: any = createTheme({
    type: 'light',
    theme: {
        colors: {
            primary: getColor(lightPrimary, theme.colors.primary.value),
            selection: getColor(lightSelection, theme.colors.selection.value),
            code: getColor(lightCode, theme.colors.code.value),
            codeLight: getColor(lightCodeLight, theme.colors.codeLight.value),
            primaryShadow: getColor(lightPrimary, theme.colors.primary.value),
            primaryDark: getColor(lightPrimaryDark, theme.colors.primary.value),
            link: getColor(lightPrimary, theme.colors.primary.value),
            primarySolidHover: getColor(lightPrimaryDark, theme.colors.primary.value),
        },
        fonts: {
            sans: "'Rail Alphabet','Johnston Sans', 'Univers', 'Segoe UI', 'Roboto'",
        },
    },
});