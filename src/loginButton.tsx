import React from "react";
import { useLogin } from "./loginHook";
import { LoginProps } from "./loginHook";

export const LoginButton = (props: LoginProps): JSX.Element => {
  const { onLoginCallback, ...rest } = props;
  const onButtonClick = useLogin({
    rdu: rest.rdu,
    cbu: rest.cbu,
    gooddollarlink: rest.gooddollarlink,
    onLoginCallback: onLoginCallback,
  });

  return <button {...rest} onClick={onButtonClick} />;
};
