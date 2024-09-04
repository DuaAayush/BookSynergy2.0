import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/circles.png";
import useStyles from "./styles";
// import NavLink from "react-bootstrap";
// import { NavLink } from "react-bootstrap";

const Navbar = ({ totalItems }) => {
  const classes = useStyles();

  return (
    <div className="h-[90px] flex items-center">
      <AppBar position="fixed" className={`${classes.appBar} h-[100px] flex justify-center`} color="inherit" >
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            variant="h5"
            className={`${classes.title} h-[50px]`}
            color="inherit"
          >
            <img
              src={logo}
              alt="Book Store App"
              height="20px"
              className={`${classes.image} h-[60px]`}
            />
            <div>BookSynergy</div>
          </Typography>


          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton
              component={Link}
              to="/cart"
              aria-label="Show cart items"
              color="inherit"
            >
              <Badge className="flex flex-center gap-[10px]" badgeContent={totalItems} color="secondary">
               <NavLink to='/Login'> <p className="font-bold ">Login</p></NavLink>
                <ShoppingCart />
              </Badge>



            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
