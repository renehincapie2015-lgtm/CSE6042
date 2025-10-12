import React, { Fragment, Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { recoverPassword } from "../../../utils/auth";
import { Link } from "react-router-dom";

export default class ForgotPassword extends Component {
  state = {
    usuario: "",
    error: null,
    success: null,
  };

  handleChange = (e) => {
    this.setState({ usuario: e.target.value });
  };

  handleRecover = async (e) => {
    e.preventDefault();
    this.setState({ error: null, success: null });

    if (this.state.usuario.length < 4 || this.state.usuario.length > 20) {
      this.setState({ error: "Usuario entre 4 y 20 caracteres" });
      return;
    }

    try {
      await recoverPassword(this.state.usuario);
      this.setState({
        success: "Contraseña restablecida a 'Temporal123'. Redirigiendo al login...",
      });
      setTimeout(() => {
        this.props.navigate("/login");
      }, 3000);
    } catch (err) {
      this.setState({ error: "Usuario no encontrado o error en el servidor" });
      setTimeout(() => {
        this.props.navigate("/login");
      }, 3000);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="h-100">
          <Row className="h-100 g-0">
            <Col lg="4" className="d-none d-lg-block">
              <div className="slider-light">
              </div>
            </Col>
            <Col lg="8" md="12"
              className="h-100 d-flex bg-white justify-content-center align-items-center">
              <Col lg="6" md="8" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4>
                  <div>¿Olvidaste tu contraseña?</div>
                  <span>Usa el formulario para recuperarla.</span>
                </h4>
                <div>
                  <Form onSubmit={this.handleRecover}>
                    <Row form>
                      <Col md={12}>
                        <FormGroup>
                          <Label for="usuario">Usuario</Label>
                      <Input
                        type="text"
                        name="usuario"
                        id="usuario"
                        placeholder="Tu usuario..."
                        value={this.state.usuario}
                        onChange={this.handleChange}
                        required
                      />
                        </FormGroup>
                      </Col>
                    </Row>
                    {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
                    {this.state.success && <Alert color="success">{this.state.success}</Alert>}
                    <div className="mt-4 d-flex align-items-center">
                      <h6 className="mb-0">
                        <Link
                          to="/login"
                          className="text-primary">
                          Inicia sesión
                        </Link>
                      </h6>
                      <div className="ms-auto">
                        <Button color="primary" size="lg">
                          Recuperar contraseña
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
