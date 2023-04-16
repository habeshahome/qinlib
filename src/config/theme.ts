import deepmerge from 'deepmerge';
import { Theme } from '@mui/material'
// import { PaletteAugmentColorOptions } from '@mui/material/styles/createPalette';
import createTheme from '@mui/material/styles/createTheme';
// src/themes/dark.theme.js
import { blue, blueGrey, cyan, green, lightGreen, red } from "@mui/material/colors";
import { PaletteOptions } from '@mui/material/styles/createPalette';
import { ThemeOptions } from '@mui/material/styles/createTheme';
const bblTheme = createTheme({
    mode: 'light',
    palette: {
        qintot: red
    },
})

export const darkTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#100350",
        },
        secondary: {
            main: '#eabe06',
        },

    },
    components: {
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {},
            }
        },
        MuiInputLabel: {
            defaultProps: {
                shrink: true,
            }
        }
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: green["500"],
        },
        secondary: {
            main: cyan["500"],
        },
        background: {
            default: blueGrey["500"],
            paper: blueGrey["500"],
        },
    },
});

/**
 * Generate a theme base on the options received.
 * @param options Takes an incomplete theme object and adds the missing parts.
 * @param args Deep merge the arguments with the about to be returned theme.
 * @returns A complete, ready-to-use theme object.
 */
export default function leapThemeBuilder(options?: ThemeOptions, ...args: object[]): Theme {

    const finalOptions: ThemeOptions = deepmerge(options = {}, {})
    return createTheme(finalOptions, ...args)
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
            light: '#000000',
            dark: '#000000',
            contrastText: '#000000',
        },
        secondary: {
            main: '#000000',
            light: '#000000',
            dark: '#000000',
            contrastText: '#000000',
        },
    },
})
/*
theme.palette = {
    primary: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    secondary: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    error: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    warning: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    info: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    success: {
        main: '#000000',
        light: '#000000',
        dark: '#000000',
        contrastText: '#000000',
    },
    grey: {
        50: '#000000',
        100: '#000000',
        200: '#000000',
        300: '#000000',
        400: '#000000',
        500: '#000000',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        A100: '#000000',
        A200: '#000000',
        A400: '#000000',
        A700: '#000000',
    },
    text: {
        primary: '#000000',
        secondary: '#000000',
        disabled: '#000000',
    },
    divider: '#000000',
    background: {
        paper: '#000000',
        default: '#000000',
    },
    action: {
        active: '#000000',
        activatedOpacity: 0.24,

        hover: '#000000',
        hoverOpacity: 0.08,

        focus: '#000000',
        focusOpacity: 0.12,

        selected: '#000000',
        selectedOpacity: 0.16,

        disabled: '#000000',
        disabledBackground: '#000000',
        disabledOpacity: 0.38,
    },
    tonalOffset: 0.2,
    mode: 'light',
    contrastThreshold: 3,
    common: {
        black: '#000000',
        white: '#000000',
    },
    getContrastText: (background: string) => '',
    augmentColor: (options: PaletteAugmentColorOptions) => (
        { 
            main: '', 
            light: '', 
            dark: '', 
            contrastText: '' 
        }
        ),
}

theme.typography = {
    fontFamily: 'IBM Plex Sans, Helvetica, Arial, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
        fontFamily: 'IBM Plex Sans, Helvetica, Arial, sans-serif',
        fontWeight: 300,
        fontSize: '6rem',
        lineHeight: 1,
        letterSpacing: '-0.01562em',
    },
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {},
    body2: {},
    button: {},
    caption: {},
    overline: {},
    htmlFontSize: 16,
    pxToRem: (px: number) => '',
}

theme.components = {
    MuiButton: {
        defaultProps: {},
        styleOverrides: { 
            root: { textTransform: 'none' } 
        },
    },
    MuiCssBaseline: { },
    MuiDialog: { },
    MuiDialogActions: { },
    MuiDialogContent: { },
    MuiDialogContentText: { },
    MuiDialogTitle: { },
    MuiDivider: { },
    MuiDrawer: { },
    MuiFab: { },
    MuiFilledInput: { },
    MuiFormControl: { },
    MuiFormControlLabel: { },
    MuiFormGroup: { },
    MuiFormHelperText: { },
    MuiFormLabel: { },
    MuiGrid: { },
    MuiIcon: { },
    MuiIconButton: { },
    MuiInput: { },
    MuiInputAdornment: { },
    MuiInputBase: { },
    MuiInputLabel: { },
    MuiLinearProgress: { },
    MuiLink: { },
    MuiList: { },
    MuiListItem: { },
    MuiListItemButton: { },
    MuiListItemIcon: { },
    MuiListItemSecondaryAction: { },
    MuiListItemText: { },
    MuiMenu: { },
    MuiMenuItem: { },
    MuiMobileStepper: { },
    MuiOutlinedInput: { },
    MuiPagination: { },
    MuiPaginationItem: { },
    MuiPaper: { },
    MuiPopover: { },
    MuiRadio: { },
    MuiRating: { },
    MuiScopedCssBaseline: { },
    MuiSelect: { },
    MuiSlider: { },
    MuiSnackbar: { },
    MuiSnackbarContent: { },
    MuiStep: { },
    MuiStepButton: { },
    MuiStepConnector: { },
    MuiStepContent: { },
    MuiStepIcon: { },
    MuiStepLabel: { },
    MuiStepper: { },
    MuiSvgIcon: { },
    MuiSwitch: { },
    MuiTab: { },
    MuiTable: { },
    MuiTableBody: { },
    MuiTableCell: { },
    MuiTableContainer: { },
    MuiTableFooter: { },
    MuiTableHead: { },
    MuiTablePagination: { },
    MuiTableRow: { },
    MuiTableSortLabel: { },
    MuiTabs: { },
    MuiTextField: { },
    MuiToggleButton: { },
    MuiToggleButtonGroup: { },
    MuiToolbar: { },
    MuiTooltip: { },
    MuiTypography: { },
}

theme.shape = {
    borderRadius: 4,
}

// theme.breakpoints = { 
//     keys: ['xs', 'sm', 'md', 'lg', 'xl'],
//     values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
//     up: (key: string) => '',
//     down: (key: string) => '',
//     between: (start: string, end: string) => '',
//     only: (key: string) => '',
//     width: (key: string) => '',
// }

// theme.spacing = (factor: number) => '',

// theme.transitions = {
//     easing: { 
//         easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
//         easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
//         easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
//         sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
//     },
//     duration: {
//         shortest: 150,
//         shorter: 200,
//         short: 250,
//         standard: 300,
//         complex: 375,
//         enteringScreen: 225,
//         leavingScreen: 195,
//     },
//     create: (props: string | string[], options?: { easing?: string, duration?: string }) => '',
//     getAutoHeightDuration: (height: number) => '',
// }

theme.zIndex = { 
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    fab: 1600,
}

theme.direction = 'ltr'
theme.mixins = {
    toolbar: {
        minHeight: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
            minHeight: 48,
        },
        '@media (min-width:600px)': {
            minHeight: 64,
        },
    },
    
}
*/