import { PaletteOptions } from "@mui/material/styles"
declare module "@mui/material/styles" {

  export interface PaletteOptions {
    qintot?: PaletteColorOptions;
    primary?: PaletteColorOptions;
    secondary?: PaletteColorOptions;
    error?: PaletteColorOptions;
    warning?: PaletteColorOptions;
    info?: PaletteColorOptions;
    success?: PaletteColorOptions;
    mode?: PaletteMode;
    tonalOffset?: PaletteTonalOffset;
    contrastThreshold?: number;
    common?: Partial<CommonColors>;
    grey?: ColorPartial;
    text?: Partial<TypeText>;
    divider?: string;
    action?: Partial<TypeAction>;
    background?: Partial<TypeBackground>;
    getContrastText?: (background: string) => string;
  }
}
