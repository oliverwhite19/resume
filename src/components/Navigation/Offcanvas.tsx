import { useUser } from '@auth0/nextjs-auth0';
import { Button, styled, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Menu from 'react-burger-menu/lib/menus/slide';
import { Category } from 'react-iconly';
import { useMediaQuery } from '../../hooks';
import { useScroll } from '../../hooks/useScroll';

// None of this can use stitches unfortunately
const styles = (theme) => ({
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '18px',
        top: '36px',
    },
    bmBurgerBars: {
        background: theme.theme.colors.primary.value,
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
        background: theme.theme.colors.backgroundContrast.value,
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
    bmOverlay: {
        top: 0,
    },
});

const ButtonGroup = styled(Button.Group, {
    width: '100%',
    '& > a': {
        width: '100%',
        borderRadius: '2px',
    },
});

const AuthButtons = styled('div', {
    margin: '$3',
    width: '100%',
    '& > a': {
        borderRadius: '2px',
    },
});

const NavbarButton = ({ title, url }: { title: string; url: string }) => {
    const router = useRouter();
    return (
        <Button as="a" href={url} bordered={router.pathname !== url} color="primary">
            {title}
        </Button>
    );
};
const MobileWrapper = styled('div', {
    width: '100%',
    transition: 'top 0.3s',
    background: '$backgroundContrast',
    zIndex: '$3',
    position: 'absolute',
    borderBottom: '3px solid $backgroundContrast',
    variants: {
        visible: {
            true: {
                top: 0,
                position: 'fixed',
            },
            false: {
                top: '-60px',
            },
        },
    },
    '> div': {
        margin: 0,
    },
});

const MobileMenu = ({ children }) => {
    const { scrollDirection } = useScroll();

    return <MobileWrapper visible={scrollDirection !== 'up'}>{children}</MobileWrapper>;
};

const Offcanvas = () => {
    const theme = useTheme();
    const router = useRouter();
    const { user } = useUser();
    const isTabletOrMobile = useMediaQuery(1000);
    const authButtons = user ? (
        <Button as="a" shadow color="warning" bordered href={`/api/auth/logout?returnTo=${router.pathname}`}>
            Logout
        </Button>
    ) : (
        <Button as="a" shadow color="success" href={`/api/auth/login?returnTo=${router.pathname}`}>
            Login
        </Button>
    );
    const buttons = (
        <ButtonGroup vertical={!isTabletOrMobile}>
            <NavbarButton title="Resume" url="/" />
            <NavbarButton title="Exchange" url="/exchange" />
            <NavbarButton title="Linktree" url="/linktree" />
        </ButtonGroup>
    );
    return isTabletOrMobile ? (
        <MobileMenu>{buttons}</MobileMenu>
    ) : (
        <Menu
            customBurgerIcon={<Category set="light" primaryColor={theme.theme.colors.primary.value} />}
            styles={styles(theme)}
            noOverlay={false}
            disableOverlayClick={false}
        >
            {buttons}
            <AuthButtons>{authButtons}</AuthButtons>
        </Menu>
    );
};

export default Offcanvas;
