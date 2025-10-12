import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  Label,
  Input,
  FormText
} from "reactstrap";

const ProductoModal = ({ isOpen, toggle, onSave, form, setForm, editingProduct }) => {
  const [errors, setErrors] = useState({})

  const validate = () => {
    let newErrors = {}

    if (!form.nombre || form.nombre.trim() === '') {
      newErrors.nombre = 'El nombre es obligatorio'
    }
    if (form.valor === '' || isNaN(form.valor)) {
      newErrors.valor = 'El valor debe ser un número'
    } else if (form.valor <= 0) {
      newErrors.valor = 'El valor debe ser mayor que 0'
    }
    if (form.categoria === '' || isNaN(form.categoria)) {
      newErrors.categoria = 'La categoría debe ser un número'
    } else if (form.categoria <= 0) {
      newErrors.valor = 'La categoría debe ser mayor que 0'
    }
    if (form.stock === '' || isNaN(form.stock)) {
      newErrors.stock = 'El stock debe ser un número'
    } else if (form.stock <= 0) {
      newErrors.stock = 'El stock debe ser mayor que 0'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // true si no hay errores
  }

  const handleSave = () => {
    if (validate()) {
      onSave()
    }
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <strong>{editingProduct ? '✏️ Editar Producto' : '➕ Nuevo Producto'}</strong>
      </ModalHeader>
      <ModalBody>
        <Form>
          <Label for="Nombre">Nombre</Label>
          <Input
            className="mb-1"
            id="Nombre"
            placeholder="Nombre"
            value={form.nombre}
            invalid={!!errors.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          {errors.nombre && <FormText invalid>{errors.nombre}</FormText>}

          <Label for="Valor">Valor</Label>
          <Input
            className="mb-1"
            type="number"
            id="Valor"
            placeholder="Valor"
            value={form.valor}
            invalid={!!errors.valor}
            onChange={(e) => setForm({ ...form, valor: Number(e.target.value) })}
          />
          {errors.valor && <FormText invalid>{errors.valor}</FormText>}

          <Label for="Categoria">Categoría</Label>
          <Input
            className="mb-1"
            id="Categoria"
            placeholder="Categoría"
            value={form.categoria}
            invalid={!!errors.categoria}
            onChange={(e) => setForm({ ...form, categoria: e.target.value })}
          />
          {errors.categoria && <FormText invalid>{errors.categoria}</FormText>}

          <Label for="Stock">Stock</Label>
          <Input
            className="mb-1"
            type="number"
            id="Stock"
            placeholder="Stock"
            value={form.stock}
            invalid={!!errors.stock}
            onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
          />
          {errors.stock && <FormText invalid>{errors.stock}</FormText>}
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
        <Button color="primary" onClick={handleSave}>
          Guardar
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default ProductoModal;