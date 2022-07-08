import { useUser } from '@auth0/nextjs-auth0';
import { Button, styled, useTheme } from '@nextui-org/react';
import { useRouter } from 'next/router';
import Menu from 'react-burger-menu/lib/menus/slide';
import { Category } from 'react-iconly';

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
        <Button as="a" href={url} bordered={router.pathname !== url}>
            {title}
        </Button>
    );
};

const Offcanvas = () => {
    const theme = useTheme();
    const router = useRouter();
    const { user } = useUser();
    return (
        <Menu
            customBurgerIcon={<Category set="light" primaryColor={theme.theme.colors.primary.value} />}
            styles={styles(theme)}
            noOverlay={false}
            disableOverlayClick={false}
        >
            <ButtonGroup vertical color="primary">
                <NavbarButton title="Resume" url="/" />
                <NavbarButton title="Exchange" url="/exchange" />
                <NavbarButton title="Linktree" url="/linktree" />
                <NavbarButton title="Messages" url="/messages" />
            </ButtonGroup>

            <AuthButtons>
                {user ? (
                    <Button
                        as="a"
                        shadow
                        color="warning"
                        bordered
                        href={`/api/auth/logout?returnTo=${router.pathname}`}
                    >
                        Logout
                    </Button>
                ) : (
                    <Button as="a" shadow color="success" href={`/api/auth/login?returnTo=${router.pathname}`}>
                        Login
                    </Button>
                )}
            </AuthButtons>
        </Menu>
    );
};

export default Offcanvas;
