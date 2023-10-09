import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export const ModalAdd = ({ product, onChange, visible, setVisible }) => {
  const [helicopterName, setHelicopterName] = useState('')
  const [helicopterType, setHelicopterType] = useState('')

  
  return (
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
      <label>Имя</label>
      <InputText value={helicopterName} onChange={(e) => setHelicopterName(e.target.value)} />
      <label>Тип</label>
      <InputText value={helicopterType} onChange={(e) => setHelicopterType(e.target.value)} />
    </Dialog>
  )
}
