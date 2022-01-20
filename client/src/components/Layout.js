import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import {
  AppBar,
  Avatar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      text: 'Home',
      icon: <HomeOutlinedIcon color='primary' />,
      path: '/'
    },
    {
      text: 'My Snippets',
      icon: <CodeOutlinedIcon color='primary' />,
      path: '/snippets'
    },
    {
      text: 'Create Snippet',
      icon: <AddCircleOutlineOutlinedIcon color='primary' />,
      path: '/snippet'
    }
  ];

  return (
    <Box
      sx={{
        display: 'flex'
      }}>
      <AppBar
        color='secondary'
        position='fixed'
        elevation={0}
        sx={{
          width: `calc(100% - ${drawerWidth}px) !important`
        }}>
        <Toolbar
          sx={{
            justifyContent: 'end'
          }}>
          <Typography>Name</Typography>
          <Avatar
            sx={{
              marginLeft: (theme) => theme.spacing(2)
            }}
          />
        </Toolbar>
      </AppBar>

      <Drawer sx={{ width: drawerWidth }} variant='permanent' anchor='left'>
        <Box>
          <Typography
            variant='h4'
            color='primary'
            sx={{ padding: (theme) => theme.spacing(2) }}>
            Code Snippet
          </Typography>
        </Box>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box sx={{ width: 100, padding: (theme) => theme.spacing(3) }}>
        <Box sx={{ postion: 'sticky' }}></Box>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
