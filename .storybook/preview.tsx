import React from "react";
import { DecoratorFn } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from '../src/config/theme'
import { useMemo } from "react";
import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'
/** fonts for MUI */
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/material-icons';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const qintotTheme = createTheme({palette: { primary: green }})

export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Global theme for components",
    defaultValue: "qintot",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { 
          value: "qintot", 
          left: "☀️", 
          title: "qintot" 
        },
        { 
          value: "dark", 
          left: "🌙", 
          title: "website" 
        },
      ],
    },
  },
};

// Add your theme configurations to an object that you can
// pull your desired theme from.
const THEMES = {
  qintot: qintotTheme,
  dark: darkTheme,
};


export const withMuiTheme: DecoratorFn = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["qintot"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];