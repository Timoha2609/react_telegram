import { Dialog } from 'primereact/dialog'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react'

export const ModalAdd = ({ product, onChange, visible, setVisible }) => {
  const [helicopterid, setHelicopterid] = useState('')
  const [helicoptertitle, setHelicoptertitle] = useState('')
  const [helicopterdescription, setHelicopterdescription] = useState('')
  const [helicopterprice, setHelicopterprice] = useState('')
  

  const saveVertolet= () => {  
  const NewVertolet={
        id:helicopterid,
        title: helicoptertitle,
        price:helicopterprice,
        description:helicopterdescription
  } 
  onChange(NewVertolet);
  };
  
  return (
    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
      <label>ID</label>
      <InputText value={helicopterid} onChange={(e) => setHelicopterid(e.target.value)} />
      <label>Title</label>
      <InputText value={helicoptertitle} onChange={(e) => setHelicoptertitle(e.target.value)} />
      <label>Цена</label>
      <InputText value={helicopterprice} onChange={(e) => setHelicopterprice(e.target.value)} />
      <label>description</label>
      <InputText value={helicopterdescription} onChange={(e) => setHelicopterdescription(e.target.value)} />
      <Button label="Добавить" onClick={saveVertolet} />
    </Dialog>
  )
}
