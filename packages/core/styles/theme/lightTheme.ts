import { createTheme, theme } from '@nextui-org/react';
import { lightCode, lightCodeLight, lightPrimary, lightPrimaryDark, lightSelection } from '../../constants';
import { getColor } from './getColor';

export const lightTheme = createTheme({
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
            background: 'orange',
        },
        fonts: {
            sans: 'Frutiger;',
        },
    },
});
