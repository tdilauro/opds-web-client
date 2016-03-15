import * as React from "react";
import { popupStyle } from "./styles";

export default class LoadingIndicator extends React.Component<any, any> {
  render(): JSX.Element {
    let loadingStyle = popupStyle(300);

    return (
      <h1 className="loading" style={loadingStyle}>Loading</h1>
    );
  }
}