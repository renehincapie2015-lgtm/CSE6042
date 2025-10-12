import React, { Fragment, useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody } from "reactstrap";

import DataTable from 'react-data-table-component';

import PageTitle from "../../../Layout/AppMain/PageTitle";

function DataTableBasic() {
  const [categoria, setCategoria] = useState("");

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
    fetch('http://localhost:3003/categorias')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener la categoria');
        }
        return response.json();
      })
      .then(data => setCategoria(data))
      .catch(error => console.error(error));
  }, []);

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Categorias"
                subheading="Clasificacion de categorias."
                icon="pe-7s-medal icon-gradient bg-tempting-azure"/>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <DataTable data={categoria}
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