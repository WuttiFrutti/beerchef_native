import React from "react";
import { configureFonts, DefaultTheme } from "react-native-paper";
import customFonts from "./Fonts";

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(customFonts),
  roundness: 20,
  colors: {
    ...DefaultTheme.colors,
    primary: "#285a84",
    accent: "#ef6f53",
    success: "#14B8A6",
    info: "#2196F3",
    warning: "#FFB020",
    error: "#D14343",
    text: "#2c2e32",
    disabled: "rgba(55, 65, 81, 0.48)",
    surface:"#ffffff"
  },
};

export default theme;