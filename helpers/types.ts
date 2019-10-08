export interface ColorType {
  name: string;
  hex: string;
  active?: boolean;
}

export interface PaletteType {
  name: string;
  colors: ColorType[];
  id?: string;
}
