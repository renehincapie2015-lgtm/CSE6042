import React, { useState, useEffect } from 'react'
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  Table,
  Button,
  Spinner,
  Input,
} from 'reactstrap'
import ProductoModal from './ProductoModal'

// Importamos el servicio
import {
  getProductos,
  createProducto,
  updateProducto,
  deleteProducto,
} from './productosService'

const Productos = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Modal
  const [modalOpen, setModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState(null)

  // Formulario
  const [form, setForm] = useState({ nombre: '', categoria: '', valor: '' })
  const toggleModal = () => setModalOpen(!modalOpen);

  // Búsqueda y orden
  const [search, setSearch] = useState('')
  const [sortColumn, setSortColumn] = useState('id')
  const [sortOrder, setSortOrder] = useState('asc')

  useEffect(() => {
    cargarProductos()
  }, [])

  const cargarProductos = async () => {
    try {
      setLoading(true)
      const data = await getProductos()
      setProductos(data)
      setLoading(false)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleNuevo = () => {
    setEditingProduct(null)
    setForm({ nombre: '', valor: '', categoria: '', stock: '' })
    toggleModal()
  }

  const handleEditar = (producto) => {
    setEditingProduct(producto)
    setForm({
      nombre: producto.nombre,
      valor: producto.valor,
      categoria: producto.categoria,
      stock: producto.stock,
    })
    toggleModal()
  }

const handleGuardar = async () => {
  if (!form.nombre || !form.valor || !form.categoria || !form.stock) {
    alert('Todos los campos son obligatorios')
    return
  }

  try {
    const payload = {
      ...form,
      valor: Number(form.valor),
      categoria: Number(form.categoria),
      stock: Number(form.stock),
    }

    if (editingProduct) {
      await updateProducto(editingProduct.id, payload)
    } else {
      await createProducto(payload)
    }

    await cargarProductos()
    toggleModal()
  } catch (err) {
    setError(err.message)
  }
}


  const handleEliminar = async (id) => {
    if (window.confirm('¿Seguro que deseas eliminar el producto ' + id + '?')) {
      try {
        const eliminado = await deleteProducto(id)
        alert(`Producto eliminado: ${eliminado.nombre}`)
        await cargarProductos()
      } catch (err) {
        setError(err.message)
      }
    }
  }

  // Ordenar
  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortOrder('asc')
    }
  }

  // Filtrar + ordenar
  const filtered = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase())
  )

  const sorted = [...filtered].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortOrder === 'asc' ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortOrder === 'asc' ? 1 : -1
    return 0
  })

  return (
    <Row>
      <Col xs={12}>
        <Card className="mb-4">
          <CardHeader className="d-flex justify-content-between align-items-center">
            <strong>📦 CRUD de Productos</strong>
            <Button color="primary" onClick={handleNuevo}>
              ➕ Nuevo Producto
            </Button>
          </CardHeader>
          <CardBody>
            {/* Buscador */}
            <Input
              type="text"
              placeholder="🔎 Buscar por nombre..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="mb-3"
            />

            {loading && (
              <div className="text-center">
                <Spinner color="primary" />
              </div>
            )}
            {error && <p className="text-danger">{error}</p>}
            {!loading && !error && (
              <Table striped hover responsive bordered>
                <thead color="dark">
                  <tr>
                    <th
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSort('id')}
                    >
                      ID {sortColumn === 'id' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                    </th>
                    <th
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSort('nombre')}
                    >
                      Nombre {sortColumn === 'nombre' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                    </th>
                    <th
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSort('valor')}
                    >
                      Valor ($) {sortColumn === 'valor' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                    </th>
                    <th
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSort('categoria')}
                    >
                      Categoría {sortColumn === 'categoria' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                    </th>
                    <th
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSort('stock')}
                    >
                      Stock {sortColumn === 'stock' ? (sortOrder === 'asc' ? '⬆️' : '⬇️') : ''}
                    </th>
                    <th style={{ width: '120px', textAlign: 'center' }}>
                      Acciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.nombre}</td>
                      <td>${p.valor}</td>
                      <td>{p.categoria}</td>
                      <td>{p.stock}</td>
                      <td className="text-center">
                        <Button
                          size="sm"
                          color="info"
                          className="me-1"
                          onClick={() => handleEditar(p)}
                        >
                          ✏️
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => handleEliminar(p.id)}
                        >
                          🗑
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </CardBody>
        </Card>
      </Col>

      {/* Modal externo */}
      <ProductoModal
        isOpen={modalOpen}
        toggle={toggleModal}
        onSave={handleGuardar}
        form={form}
        setForm={setForm}
        editingProduct={editingProduct}
      />
    </Row>
  )
}

export default Productos;