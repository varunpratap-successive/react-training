import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Link, Outlet } from "react-router-dom";

const sidebarItems = [
  { itemname: "Header", link: "/header" },
  { itemname: "AboutUs", link: "/aboutus" },
  { itemname: "Footer", link: "/footer" },
];

const SideNav = () => {
  const [open, setOpen] = React.useState(false);

  const DrawerList = (
    <Box sx={{ width: 260 }} role="presentation" onClick={() => setOpen(false)}>
      <List>
        {sidebarItems.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link to={text.link}>{text.itemname}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {DrawerList}
      </Drawer>
      {/* When the drawer is open it displays the content in the <Drawer> component. 
      When the drawer is closed, the onClose function sets the open state to false to close the drawer. */}
      <Outlet />
    </div>
  );
};
export default SideNav;
