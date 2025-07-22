import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axios from "axios";

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";
    const res = await axios.post(url, { email, password });
    // Gérer la connexion (stockage token, redirection, etc.)
  };
  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h5">{isLogin ? "Connexion" : "Inscription"}</Typography>
      <TextField label="Email" value={email} onChange={e => setEmail(e.target.value)} fullWidth sx={{ mb: 2 }} />
      <TextField label="Mot de passe" type="password" value={password} onChange={e => setPassword(e.target.value)} fullWidth sx={{ mb: 2 }} />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {isLogin ? "Se connecter" : "S'inscrire"}
      </Button>
      <Button color="secondary" onClick={() => setIsLogin(!isLogin)} sx={{ ml: 2 }}>
        {isLogin ? "Créer un compte" : "Déjà inscrit ?"}
      </Button>
    </Box>
  );
}