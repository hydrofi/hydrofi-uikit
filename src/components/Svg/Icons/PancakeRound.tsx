import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 200 200" {...props}>
      <image width={200} height={200} href="/images/hdgn.png" />
    </Svg>
  );
};

export default Icon;
