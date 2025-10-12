import React, { Fragment, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody } from "reactstrap";

import DataTable from 'react-data-table-component';

import PageTitle from "../../../Layout/AppMain/PageTitle";

function DataTableBasic() {
  const [administrador, setAdministrador] = useState("");

  const columns = [
      {
        name: "Id",
        id: "id",
        selector: row => row.id,
        sortable: true,
      },
      {
        name: "TipoId",
        selector: row => row.tipoDocumento,
        sortable: true,
      },
      {
        name: "NroId",
        selector: row => row.numeroDocumento,
        sortable: true,
      },
      {
        name: "Apellidos",
        selector: row => row.apellidos,
        sortable: true,
      },
      {
        name: "Nombres",
        selector: row => row.nombres,
        sortable: true,
      },
      {
        name: "Celular",
        selector: row => row.celular,
        sortable: true,
      },
    ];

  useEffect(() => {
    fetch('http://localhost:3002/administradores')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener el administrador');
        }
        return response.json();
      })
      .then(data => setAdministrador(data))
      .catch(error => console.error(error));
  }, []);

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Administradores"
                subheading="Tramitan los pedidos."
                icon="pe-7s-medal icon-gradient bg-tempting-azure"/>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <DataTable data={administrador}
                        columns={columns}
                        pagination 
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div> 
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
}

export default DataTableBasic;