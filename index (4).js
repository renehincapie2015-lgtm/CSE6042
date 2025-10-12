import React, { Fragment, Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { login } from "../../../utils/auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    usuario: "",
    clave: "",
    error: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();
    this.setState({ error: null });

    const { usuario, clave } = this.state;
    const esClaveValida = (clave) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(clave);

    if (usuario.length < 4 || usuario.length > 20) {
      this.setState({ error: "Usuario entre 4 y 20 caracteres" });
      return;
    }

    if (clave.length > 72) {
      this.setState({ error: "Clave hasta 72 caracteres" });
      return;
    }

    if (!esClaveValida(clave)) {
      this.setState({ error: "La clave debe tener al menos una mayúscula, una minúscula y un número." });
      return;
    }

    try {
      await login(this.state.usuario, this.state.clave);
      this.props.navigate("/main");
    } catch (err) {
      this.setState({ error: "Nombre o clave incorrecto o Sesión expirada. Por favor inicia sesión nuevamente." });
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
            <Col lg="8" md="12" className="h-100 d-flex bg-white justify-content-center align-items-center">
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4 className="mb-0">
                  <div>Bienvenido de nuevo,</div>
                  <span>Por favor inicia sesión en tu cuenta.</span>
                </h4>
                <h6 className="mt-3">
                  ¿No tienes cuenta?{" "}
                  <Link
                    to="/register"
                    className="text-primary">
                    Regístrate ahora
                  </Link>
                </h6>
                <Row className="divider" />
                <div>
                  <Form onSubmit={this.handleLogin}>
                    <Row>
                      <Col md={6}>
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
                      <Col md={6}>
                        <FormGroup>
                          <Label for="clave">Contraseña</Label>
                          <Input
                            type="password"
                            name="clave"
                            id="clave"
                            placeholder="Tu contraseña..."
                            value={this.state.clave}
                            onChange={this.handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
                    <Row className="divider" />
                    <div className="d-flex align-items-center">
                      <div className="ms-auto">
                        <Link
                          to="/forgot-password"
                          className="btn-lg btn btn-link">
                          Recuperar contraseña
                        </Link>{" "}
                        <Button color="primary" size="lg" type="submit">
                          Ingresar
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

export default Login;