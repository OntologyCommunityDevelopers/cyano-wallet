import * as React from "react";
import { RouterProps } from "react-router";
import { withProps } from "../../compose";
import { Props, SignupView } from "./signupView";

const enhancer = (Component: React.ComponentType<Props>) => (props: RouterProps) =>
  withProps(
    {
      handleCreate: () => {
        props.history.push("/create");
      },
      handleImport: () => {
        props.history.push("/import");
      },
      handleLedger: () => {
        props.history.push("/ledger/signup");
      },
      handleRestore: () => {
        props.history.push("/restore");
      }
    },
    injectedProps => <Component {...injectedProps} />
  );

export const Signup = enhancer(SignupView);
