import { Button, styled, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Menu from 'react-burger-menu/lib/menus/slide';
import { Category } from 'react-iconly';

const styles = (theme) => ({
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '18px',
        top: '36px',
    },
    bmBurgerBars: {
        background: theme.theme.colors.primary,
    },
    bmBurgerBarsHover: {
        background: '#a90000',
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
    },
    bmCross: {
        background: '#bdc3c7',
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        top: 0,
        left: 0,
    },
    bmMenu: {
        background: theme.theme.colors.backgroundContrast,
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
    },
    bmMorphShape: {
        fill: '#373a47',
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em',
    },
    bmItem: {
        display: 'inline-block',
    },
});

const ButtonGroup = styled(Button.Group, {
    width: '100%',
    '& > a': {
        width: '100%',
        borderRadius: '2px',
    },
});

const Offcanvas = () => {
    const theme = useTheme();
    const router = useRouter();
    return (
        <Menu
            customBurgerIcon={<Category set="light" primaryColor={theme.theme.colors.primary.value} />}
            styles={styles(theme)}
            noOverlay
        >
            <ButtonGroup vertical color="primary">
                <Button as="a" href="/" bordered={router.pathname !== '/'}>
                    Resume
                </Button>
                <Button as="a" href="/exchange" bordered={router.pathname !== '/exchange'}>
                    Exchange
                </Button>
                <Button as="a" href="/linktree" bordered={router.pathname !== '/linktree'}>
                    Linktree
                </Button>
            </ButtonGroup>
        </Menu>
    );
};

export default Offcanvas;
