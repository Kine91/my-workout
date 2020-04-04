import * as React from "react";
import { Link } from "react-router-dom";

export interface Props {
  children?: React.ReactNode
  text: string;
  click: () => void;
}

export interface State {
  text: string;
  click: () => void;
}

export default class Button extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      text: props.text,
      click: props.click
    }
  }

  render() {
    return (
      <button onClick="{(event) => this.state.click()}">
        {this.state.text}
      </button>
    )
  }
}
