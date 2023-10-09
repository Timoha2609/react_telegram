import './speedDialButton.css'
import React, {useState} from 'react'
import { SpeedDial } from 'primereact/speeddial';
import { Dialog } from 'primereact/dialog';
import { InputText } from "primereact/inputtext";
import { InputNumber } from 'primereact/inputnumber';
        

export const SpeedDialButton = (products) => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [value, setValue] = useState(0);
  const [value1, setValue1] = useState(0);

  const actionItems = [
    { icon: 'pi pi-pencil', command: () => {setVisible1(true)} },
    { icon: 'pi pi-cart-plus', command: () => {setVisible2(true)} },
    { icon: 'pi pi-trash', command: () => {setVisible3(true)} }
  ];

// const addHelecopter=(data)=>{
//     products.push(data)
// }

// const deleteHelecopter=(id)=>{
//     products=products.filter(item=>item.id!==id)
// }

// const updateHelecopter=(id,data)=>{
//     products=products.map(item=>{
//         if(item.id===id){
//             return data
//         }
//         return item
//     })
// }

  return (
    <div>
      <SpeedDial model={actionItems} visible={visible} onShow={() => setVisible(true)} onHide={() => setVisible(false)} className='speedButton' />
      <div className="card flex justify-content-center">
            <Dialog header="Redaction" visible={visible1} modal={false} style={{ width: '50vw' }} onHide={() => setVisible1(false)}>
            <div className="flex flex-column gap-2">
            <label htmlFor="number-input">ID</label>
            <InputNumber id="id" value={value} onValueChange={(e) => setValue(e.value)} />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="title">title</label>
                <InputText id="title"/>
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="description">description</label>
                <InputText id="description"/>
            </div>
            <div className="flex flex-column gap-2">
            <label htmlFor="number-input">Price</label>
            <InputNumber id="Price" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            </Dialog>
            <Dialog header="Dobavit" visible={visible2} modal={false} style={{ width: '50vw' }} onHide={() => setVisible2(false)}>
            <div className="flex flex-column gap-2">
            <label htmlFor="number-input">ID</label>
            <InputNumber id="id" value={value} onValueChange={(e) => setValue(e.value)} />
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="title">title</label>
                <InputText id="title"/>
            </div>
            <div className="flex flex-column gap-2">
                <label htmlFor="description">description</label>
                <InputText id="description"/>
            </div>
            <div className="flex flex-column gap-2">
            <label htmlFor="number-input">Price</label>
            <InputNumber id="Price" value={value1} onValueChange={(e) => setValue1(e.value)} />
            </div>
            </Dialog>
            <Dialog header="Udalit" visible={visible3} modal={false} style={{ width: '50vw' }} onHide={() => setVisible3(false)}>
            <div className="flex flex-column gap-2">
            <label htmlFor="number-input">ID</label>
            <InputNumber id="id" value={value} onValueChange={(e) => setValue(e.value)} />
            </div>
            </Dialog>
        </div>
    </div>

  )
}