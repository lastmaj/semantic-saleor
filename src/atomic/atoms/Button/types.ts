import { ButtonProps } from "semantic-ui-react";

export interface Iprops extends _semanticUIReact.ButtonProps {
    label?: string;
    [args: string]: any;   
}
