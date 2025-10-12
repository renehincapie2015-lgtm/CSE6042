import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

import FormInputGroupOverview from "./InputGroupOverview";

const InputGroups = (props) => {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition component="div" classNames="TabsAnimation" appear={true}
          timeout={0} enter={false} exit={false}>
          <Container fluid>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Datos Basicos</CardTitle>
                    <FormInputGroupOverview />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default InputGroups;
