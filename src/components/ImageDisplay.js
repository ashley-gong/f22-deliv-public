import * as React from "react";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";

export default function ImageDisplay(image, url) {
  return (
    <div>
      {url !== null ? (
        <Box mt={2}>
          <img src={url} alt={image.name} height="250px" />
        </Box>
      ) : null}
    </div>
  );
}
