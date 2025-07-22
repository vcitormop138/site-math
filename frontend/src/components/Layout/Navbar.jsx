import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MathCours
        </Typography>
        <Button color="inherit" component={Link} to="/">Accueil</Button>
        <Button color="inherit" component={Link} to="/courses">Cours</Button>
        <Button color="inherit" component={Link} to="/profile">Profil</Button>
        <Button color="inherit" component={Link} to="/admin">Admin</Button>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;