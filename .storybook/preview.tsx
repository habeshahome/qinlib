import React from "react";
import { DecoratorFn } from "@storybook/react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme as themeOneTheme } from '../src/config/theme'
import { useMemo } from "react";
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


export const globalTypes = {
  theme: {
    name: "Theme",
    title: "Theme",
    description: "Global theme for components",
    defaultValue: "themeOne",
    toolbar: {
      icon: "paintbrush",
      dynamicTitle: true,
      items: [
        { 
          value: "themeOne", 
          left: "☀️", 
          title: "Emirates NBD Theme" 
        },
        { 
          value: "dark", 
          left: "🌙", 
          title: "Emirates Islamic Theme" 
        },
      ],
    },
  },
};

// Add your theme configurations to an object that you can
// pull your desired theme from.
const THEMES = {
  themeOne: themeOneTheme,
  dark: darkTheme,
};


export const withMuiTheme: DecoratorFn = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["themeOne"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withMuiTheme];