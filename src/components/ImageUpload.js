import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";

export default function ImageUpload({ type }) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  const uploadButton =
    type === "button" ? (
      <div>
        <Button variant="contained" component="label" sx={{ "margin-top": 20 }}>
          Upload Image
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log({ image });
            }}
          />
        </Button>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          sx={{ "margin-top": 20 }}
        >
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => e.target.files[0]}
          />
          <PhotoCamera />
        </IconButton>
        {imageUrl && image && (
          <Box mt={2}>
            <img src={imageUrl} alt={image.name} height="250px" />
          </Box>
        )}
      </div>
    ) : type === "show" ? (
      <div>
        {imageUrl !== null ? (
          // <Box mt={2}>
          <img src={imageUrl} alt={image.name} height="250px" />
        ) : // </Box>
        null}
      </div>
    ) : null;

  return <div>{uploadButton}</div>;
}
