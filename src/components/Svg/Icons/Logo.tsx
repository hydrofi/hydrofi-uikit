import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 128 117" {...props}>
      <image width={128} height={117} href="/images/swap-logo-mobile.png" />
    </Svg>
  );
};

export default Icon;
