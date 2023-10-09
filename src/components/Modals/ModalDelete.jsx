import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export const ModalDelete = ({ product, onChange, visible, setVisible }) => {
  const [helicopterId, setHelicopterId] = useState('')
  const saveID= () => {  
    onChange(helicopterId);
    console.log(helicopterId)
  };

  return (
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
      <label>ID</label>
      <InputText value={helicopterId} onChange={(e) => setHelicopterId(e.target.value)} />
      <Button label="Удалить" onClick={saveID} />
    </Dialog>
  )
}
