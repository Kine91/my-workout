import * as React from "react";
import { Container, Row, Col } from "reactstrap";

export interface Props {
  children?: React.ReactNode
}

export interface State {
}

export default class Footer extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <footer>
        <Container fluid={true}>
          <span>Copyright 2020 by Tomasz Kuchne</span>
        </Container>
      </footer>
    )
  }
}
