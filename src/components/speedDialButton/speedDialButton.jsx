import './speedDialButton.css'
import React, { useState } from 'react'
import { SpeedDial } from 'primereact/speeddial';
import { ModalDelete } from '../Modals/ModalDelete';
import { ModalAdd } from '../Modals/ModalAdd';
import { ModalEdit } from '../Modals/ModalEdit';

export const SpeedDialButton = ({products,updateProducts}) => {
  const [visible, setVisible] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleEdit, setVisibleEdit] = useState(false);


  console.log(products)
  const actionItems = [
    { icon: 'pi pi-pencil', command: () => {setVisibleEdit(true)} },
    { icon: 'pi pi-cart-plus', command: () => { setVisibleAdd(true) } },
    { icon: 'pi pi-trash', command: () => { setVisibleDelete(true)} }
  ];

  const addHelicopter = (data) => {
    products.push(data)
  }

  const deleteHelicopter = (helicopterId) => {
  const updatedProducts = products.filter(item => item.id !== helicopterId)
   console.log(`${helicopterId} внутри speed` )
   console.log(typeof(helicopterId))
   updateProducts(updatedProducts);
  }

  const updateHelicopter = (id, data) => {
    products = products.map(item => {
      if (item.id === id) {
        return data
      }
      return item
    })
  }

  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className={'speedButton'} />
      <ModalDelete visible={visibleDelete} setVisible={setVisibleDelete} product={products} onChange={deleteHelicopter} />
      <ModalAdd visible={visibleAdd} setVisible={setVisibleAdd} product={products} onChange={addHelicopter} />
      <ModalEdit visible={visibleEdit} setVisible={setVisibleEdit} product={products} onChange={updateHelicopter} />
    </div>
  )
}
