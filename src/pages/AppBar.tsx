import * as React from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { PersonalLogo, PersonalLogoMobile } from './PersonalLogo';
import MenuMobile from './MenuMobile';
import MenuAppBar from './Menu';
import { useNavigate } from "react-router-dom";
import UserProfile from './UserProfile';

const MainLayout = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (index: number) => {
    setAnchorElNav(null);
    const STEP_CONTENT: any = {
      0: () => navigate("/employees/list-employees"),
      1: () => navigate("/images/upload-image"),
    };

    const DEFAULT = <h6>Unknown step.</h6>;
    return STEP_CONTENT[index]() || DEFAULT;
  };

  return (
    <AppBar position="absolute">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PersonalLogo />
          <MenuMobile anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu} handleOpenNavMenu={handleOpenNavMenu} />
          <PersonalLogoMobile />
          <MenuAppBar handleCloseNavMenu={handleCloseNavMenu} />
          <UserProfile />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default MainLayout;