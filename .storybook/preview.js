import { ThemeProvider, createTheme } from '@mui/material/styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const theme = createTheme({
  palette: {
    primary: { 
      main: '#3fDAE5',
    },
    secondary: {
      main: '#3AED05',
    }
  }
})

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];