import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      red: string;
      green: string;
    },
    black: {
      normal: string;
      darker: string;
      lighter: string;
    },
    white: {
      normal: string;
      darker: string;
      lighter: string;
    },
  }
}