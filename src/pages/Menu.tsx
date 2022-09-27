import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

interface MenuMobileProps {
    handleCloseNavMenu: (index: number) => void
}
const pages = ['Employees', 'Upload Images'];
export const MenuAppBar = ({ handleCloseNavMenu }:MenuMobileProps) => {
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, i) => (
                <Button
                    key={page}
                    onClick={() => {handleCloseNavMenu(i)}}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            ))}
        </Box>
    );
};

export default MenuAppBar;