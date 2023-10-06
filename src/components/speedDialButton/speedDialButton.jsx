import './speedDialButton.css'
import React, {useState} from 'react'
import { SpeedDial } from 'primereact/speeddial';

        

export const SpeedDialButton = (products) => {
  const [visible, setVisible] = useState(false);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => { } },
    { icon: 'pi pi-cart-plus', command: () => { } },
    { icon: 'pi pi-trash', command: () => { } }
  ];

const addHelecopter=(data)=>{
    products.push(data)
}

const deleteHelecopter=(id)=>{
    products=products.filter(item=>item.id!==id)
}

const updateHelecopter=(id,data)=>{
    products=products.map(item=>{
        if(item.id===id){
            return data
        }
        return item
    })
}

console.log(products)

  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className='speedButton' />
    </div>
  )
}