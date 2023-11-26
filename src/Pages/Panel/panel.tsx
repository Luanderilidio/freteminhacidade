import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ArrowRight,
  CaretLeft,
  List as ListIcon,
  Truck,
  Stack,
  Eye,
} from "phosphor-react";
import { Avatar, Badge, Menu, MenuItem } from "@mui/material";
import NewFreight from "../../Components/NewFreight";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ViewFreight from "../../Components/ViewFreight";
import axios from "axios";
import { useQuery } from "react-query";
import { useAuth } from "../../context/userLogin";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = Boolean(anchorEl);
  const clickOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const clickCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


    const { data, isLoading, isError, error } = useQuery(
      "freights",
      async () => {
        return axios
          .get(`http://localhost:3000/estudants?id_user=${user?.id}`)
          .then((response) => response.data);
      },
      {
        retry: 3,
        refetchOnWindowFocus: false,
      }
    );

    console.log("lenght",data.length)

  function PageToggle(page: number) {
    switch (page) {
      case 0:
        return <NewFreight />;
        break;
      case 1:
        return <ViewFreight />;

      default:
        break;
    }
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <ListIcon size={25} weight="bold" />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Painel do Ponto Gastronomico
          </Typography>
          <IconButton onClick={clickOpenMenu}>
            <Avatar src={faker.image.avatar()} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={clickCloseMenu}
          >
            <MenuItem
              onClick={() => {
                clickCloseMenu();
                navigate("/");
              }}
            >
              <ListItemIcon>
                <LogoutIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Sair</ListItemText>
              <Typography variant="body2" color="text.secondary"></Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <CaretLeft /> : <ArrowRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Divider />
        <List>
          <ListItem
            onClick={() => setPage(0)}
            className="!cursor-pointer"
            disablePadding
            secondaryAction={
              <div className="bg-[#25D366]/50 py-[6px] px-2 rounded-md relative">
                <p className="text-[#005A09] leading-none text-xs font-bold">
                  Free
                </p>
              </div>
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Badge color="secondary" overlap="circular" badgeContent="+">
                  <Truck size={25} weight="regular" />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={
                  <p className="text-sm font-bold opacity-90">Novo Ponto</p>
                }
              />
            </ListItemButton>
          </ListItem>
          <ListItem
            onClick={() => setPage(1)}
            className="!cursor-pointer"
            disablePadding
            secondaryAction={
              <Eye size={25} className="opacity-30" weight="bold" />
            }
          >
            <ListItemButton>
              <ListItemIcon>
                <Badge color="secondary" overlap="circular" badgeContent={data?.length}>
                  <Stack size={25} height="bold" />
                </Badge>
              </ListItemIcon>
              <ListItemText
                primary={
                  <p className="text-sm font-bold opacity-90">Meus Pontos</p>
                }
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {PageToggle(page)}
      </Main>
    </Box>
  );
}
