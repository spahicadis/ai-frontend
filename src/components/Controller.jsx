import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const Controller = () => {
  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="font-semibold text-2xl">Dohvatite sve podatke</h1>
      <Button className="self-start" variant="contained">
        Dohvati
      </Button>
    </div>
  );
};

export default Controller;
