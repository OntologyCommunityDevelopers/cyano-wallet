import { FormApi } from "final-form";
import * as React from "react";
import { Field, Form } from "react-final-form";
import { Button, Form as SemanticForm } from "semantic-ui-react";
import { Filler, LogoHeader, View } from "../../components";
import { required } from "../../utils/validate";

export interface Props {
  handleCancel: () => void;

  handleSubmit: (values: object, formApi: FormApi) => Promise<object>;
  loading: boolean;
  unboundOng: string;
}

export const WithdrawConfirmView: React.SFC<Props> = props => (
  <View orientation="column" fluid={true}>
    <View orientation="column" className="part gradient">
      <LogoHeader showLogout={true} showAccounts={true} title="OXG Withdrawal" />
      <View content={true} className="spread-around">
        <View>Confirm withdrawal of {props.unboundOng} OXG by unlocking your wallet.</View>
      </View>
    </View>
    <View orientation="column" fluid={true} content={true} className="spread-around">
      <Form
        onSubmit={props.handleSubmit}
        render={formProps => (
          <SemanticForm onSubmit={formProps.handleSubmit} className="signupForm">
            <View orientation="column">
              <label>Password</label>
              <Field
                name="password"
                validate={required}
                render={t => (
                  <SemanticForm.Input
                    onChange={t.input.onChange}
                    input={{ ...t.input, value: t.input.value }}
                    icon="key"
                    type="password"
                    placeholder={formProps.submitFailed ? "Wrong password" : "Password"}
                    error={t.meta.touched && t.meta.invalid}
                    disabled={props.loading}
                  />
                )}
              />
            </View>
            <Filler />
            <View className="buttons">
              <Button disabled={props.loading} loading={props.loading}>
                Withdraw
              </Button>
              <Button disabled={props.loading} onClick={props.handleCancel}>
                Cancel
              </Button>
            </View>
          </SemanticForm>
        )}
      />
    </View>
  </View>
);
