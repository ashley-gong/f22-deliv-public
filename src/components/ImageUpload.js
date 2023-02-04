import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState, useEffect } from "react";
import ImageDisplay from "./ImageDisplay";

export default function ImageUpload({ type, entry }) {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (image) {
      setImageUrl(URL.createObjectURL(image));
    }
  }, [image]);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    console.log({ image });
    console.log({ imageUrl });
  };

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
              handleImage(e);
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
        <ImageDisplay url={imageUrl} />
      </div>
    ) : null;

  return <div>{uploadButton}</div>;
}
