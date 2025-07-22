import React from "react";
import { Button } from "@mui/material";
import axios from "axios";

export default function PaymentButton() {
  const handlePay = async () => {
    const res = await axios.post("/api/subscription/create-checkout-session");
    window.location.href = res.data.url; // Redirige vers Stripe
  };
  return (
    <Button variant="contained" color="secondary" onClick={handlePay}>
      S'abonner (accès complet + sans pub)
    </Button>
  );
}