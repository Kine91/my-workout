import * as React from "react";
import { Container, Row, Col } from 'reactstrap';

export interface Props {
  children?: React.ReactNode
}

export interface State {
  isActive: boolean;
}


export default class Home extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      isActive: false
    }
  }

  toggleActive = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const styles = require('./Home.scss');
    return (
      <Container>
        <Row>
          <Col xs="6" className="text-center">
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6 <br /> dupa <br /> dupa</Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
          <Col>.col</Col>
        </Row>
        <Row>
          <Col xs="3">.col-3</Col>
          <Col xs="auto">
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
            <Row>
              <Col xs="6">.col-6</Col>
              <Col xs="6">.col-6</Col>
            </Row>
          </Col>
          <Col xs="3">.col-3</Col>
        </Row>
        <Row>
          <Col xs="6">.col-6</Col>
          <Col xs="6">.col-6</Col>
        </Row>
        <Row>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
          <Col sm="4">.col-sm-4</Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .order-sm-2 .offset-sm-1</Col>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>.col-sm-12 .col-md-6 .offset-md-3</Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm-auto .offset-sm-1</Col>
        </Row>
      </Container>
    )
  }
}
