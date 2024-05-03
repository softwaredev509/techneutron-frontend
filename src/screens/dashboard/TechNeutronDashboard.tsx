import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  Typography,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  Dashboard as DashboardIcon,
  AccountBalanceWallet as WalletIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  Work as WorkIcon,
  AssignmentInd as AssignmentIndIcon,
} from "@mui/icons-material";

const DashboardWithPersistentDrawer: React.FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <>
      <Drawer
        variant="persistent"
        anchor="left"
        open={openDrawer}
        onClose={handleDrawerClose}
        sx={{
          width: 240, // Width adjustment for full variant
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240, // Width adjustment for full variant
            boxSizing: "border-box",
          },
        }}
      >
        <div>
          <IconButton onClick={handleDrawerClose} sx={{ ml: 1, mt: 1 }}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          <ListItem
            button
            component={Link}
            to="/dashboard"
            onClick={handleDrawerClose}
          >
            <Tooltip title="Dashboard" placement="right">
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
            </Tooltip>
            <Typography variant="inherit">Dashboard</Typography>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/payslip"
            onClick={handleDrawerClose}
          >
            <Tooltip title="Payment Slip" placement="right">
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
            </Tooltip>
            <Typography variant="inherit">Payment Slip</Typography>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/recruitment-form"
            onClick={handleDrawerClose}
          >
            <Tooltip title="Recruitment Form" placement="right">
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
            </Tooltip>
            <Typography variant="inherit">Recruitment Form</Typography>
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/appraisal-form"
            onClick={handleDrawerClose}
          >
            <Tooltip title="Appraisal Form" placement="right">
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
            </Tooltip>
            <Typography variant="inherit">Appraisal Form</Typography>
          </ListItem>
        </List>
        <Typography variant="caption" align="center" sx={{ my: 2 }}>
          Techneutron360
        </Typography>
      </Drawer>
      {!openDrawer && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{ p: 5, ml: 5 }} // Adjust padding and margin
        >
          <MenuIcon />
        </IconButton>
      )}
      {/* Your existing dashboard content */}
    </>
  );
};

export default DashboardWithPersistentDrawer;
