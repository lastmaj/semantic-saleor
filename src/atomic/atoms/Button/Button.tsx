import React from "react";
import { Button } from "semantic-ui-react";
import { Iprops } from "./types";

/*
export const Btn = ({ label, ...props }) => {
  return (
    <Button color="olive" {...props}>
      {label}
    </Button>
  );
};

export const Btn: React.FC<IProps> = ({

})

*/

export const Btn = ({ label, ...props }: Iprops) => {
  return (
    <Button color="olive" {...props}>
      {label}
    </Button>
  );
};
