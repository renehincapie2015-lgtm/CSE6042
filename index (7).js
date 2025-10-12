import React, { Fragment, Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { register } from "../../../utils/auth";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    usuario: "",
    clave: "",
    claveRep: "",
    error: null,
    success: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegister = async (e) => {
    e.preventDefault();
    this.setState({ error: null, success: null });

    const { usuario, clave, claveRep } = this.state;
    const esClaveValida = (clave) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/.test(clave);

    if (usuario.length < 4 || usuario.length > 20) {
      this.setState({ error: "Usuario entre 4 y 20 caracteres" });
      return;
    }

    if (clave.length > 72) {
      this.setState({ error: "Clave hasta 72 caracteres" });
      return;
    }

    if (clave !== claveRep) {
      this.setState({ error: "Las contraseñas no coinciden" });
      return;
    }

    if (!esClaveValida(clave)) {
      this.setState({ error: "La clave debe tener al menos una mayúscula, una minúscula y un número." });
      return;
    }

    try {
      await register(usuario, clave);
      this.setState({ success: "Usuario creado correctamente. Redirigiendo al login..." });
      setTimeout(() => {
        this.props.navigate("/login");
      }, 2000);
    } catch (err) {
      this.setState({ error: "No se pudo registrar el usuario" });
      setTimeout(() => {
        this.props.navigate("/login");
      }, 2000);
    }
  };

  render() {
    return (
      <Fragment>
        <div className="h-100">
          <Row className="h-100 g-0">
            <Col lg="7" md="12" className="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
              <Col lg="9" md="10" sm="12" className="mx-auto app-login-box">
                <div className="app-logo" />
                <h4>
                  <div>Bienvenido,</div>
                  <span>
                    Solo toma unos <span className="text-success">segundos</span> crear tu cuenta
                  </span>
                </h4>
                <div>
                  <Form onSubmit={this.handleRegister}>
                    <Row>
                      <Col md={6}>
                        <FormGroup>
                          <Label for="usuario"><span className="text-danger">*</span> Usuario</Label>
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
                          <Label for="clave"><span className="text-danger">*</span> Contraseña</Label>
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
                      <Col md={6}>
                        <FormGroup>
                          <Label for="claveRep"><span className="text-danger">*</span> Repetir contraseña</Label>
                          <Input
                            type="password"
                            name="claveRep"
                            id="claveRep"
                            placeholder="Repite tu contraseña..."
                            value={this.state.claveRep}
                            onChange={this.handleChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    {this.state.error && <Alert color="danger">{this.state.error}</Alert>}
                    {this.state.success && <Alert color="success">{this.state.success}</Alert>}
                    <div className="mt-4 d-flex align-items-center">
                      <h5 className="mb-0">
                        ¿Ya tienes cuenta?{" "}
                        <Link
                          to="/login"
                          className="text-primary">
                          Inicia sesión
                        </Link>
                      </h5>
                      <div className="ms-auto">
                        <Button color="primary" className="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">
                          Crear cuenta
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </Col>
            </Col>
            <Col lg="5" className="d-lg-flex d-xs-none">
              <div className="slider-light">
              </div>
            </Col>
          </Row>
        </div>
      </Fragment>
    );
  }
}
