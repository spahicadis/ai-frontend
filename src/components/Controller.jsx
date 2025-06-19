import React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { getParkingData } from "../services/yoloAPI";

const Controller = () => {
  const [freeSlots, setFreeSlots] = useState(null);

  const handleGetParkingData = async () => {
    try {
      const response = await getParkingData();
      setFreeSlots(response);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <h1 className="font-semibold text-2xl">Dohvatite sve podatke</h1>
      <Button
        className="self-start"
        variant="contained"
        onClick={handleGetParkingData}
      >
        Dohvati
      </Button>
      {freeSlots && (
        <div className="w-full flex flex-col gap-3">
          <h2 className="font-semibold text-2xl">Podaci sa parkinga:</h2>
          <h3>Broj slobodnih mjesta: {freeSlots}</h3>
        </div>
      )}
    </div>
  );
};

export default Controller;
