import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        name: string;
        colors: {
            primary: string;
            primaryColor: string;
            secondary: string;
            secondaryColor: string;
            basic: string;
            default: string;
            background: string;
            color: string;
        }
        defaults: {
            borderRadius: string
        }
    }
}