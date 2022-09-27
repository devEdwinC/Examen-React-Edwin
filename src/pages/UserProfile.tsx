import { Avatar, Divider, Grid, IconButton, ListItem, ListItemIcon, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import * as React from 'react'
import useUser from "../hooks/useUser";
import { useUserTypes } from "../types/types";

export const UserProfile = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { setLoggedIn, user } = useUser() as useUserTypes;
    const settings = [user.user, 'Cerrar sesión'];


    const handleSettings = (index: number) => {
        const SETTING_CONTENT: any = {
            0: () => setAnchorElUser(null),
            1: () => setLoggedIn(false),
        };
        const DEFAULT = <h6>Unknown step.</h6>;
        return SETTING_CONTENT[index]() || DEFAULT;
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting, i) => (
                    <MenuItem key={setting} onClick={() => { handleSettings(i) }}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};

export default UserProfile;