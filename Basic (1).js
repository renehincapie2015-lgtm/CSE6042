import React, { Fragment, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody } from "reactstrap";

import DataTable from 'react-data-table-component';

import PageTitle from "../../../Layout/AppMain/PageTitle";

function DataTableBasic() {
  const [formap, setFormaP] = useState("");

  const columns = [
      {
        name: "Id",
        id: "id",
        selector: row => row.id,
        sortable: true,
      },
      {
        name: "Nombre",
        selector: row => row.nombre,
        sortable: true,
      },
    ];

  useEffect(() => {
    fetch('http://localhost:3005/formaspago')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener la forma de pago');
        }
        return response.json();
      })
      .then(data => setFormaP(data))
      .catch(error => console.error(error));
  }, []);

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Formas de Pago"
                subheading="Tarjetas, pasarelas de pago, banca electronica."
                icon="pe-7s-medal icon-gradient bg-tempting-azure"/>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <DataTable data={formap}
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