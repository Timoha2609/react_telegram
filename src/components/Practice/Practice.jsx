import React, { useState} from "react";
import { Button } from "primereact/button";
import "./Practice.css";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Route, Routes } from 'react-router-dom';




export const Practice = () => {
  const [visible, setVisible] = useState(false);

  const show = () => {
    visible === true ? setVisible(false) : setVisible(true)
  };

  const click3 = () => {

  };

//   const columns = [
//     {field: 'id', header: 'ID'},
//     {field: 'name', header: 'Имя'},
//     {field: 'pain', header: 'Коэффициент боли'},
//     {field: 'difficulty', header: 'Коэффициент сложности'},
//     {field: 'chaos', header: 'Коэффициент хаоса'},
//     {field: 'beaty', header: 'Коэффициент красоты кода'},
//   ]

  const data = [
    {
      id: 1,
      name: 'Vue',
      pain: 0.3,
      difficulty: 0.6,
      chaos: 0.3,
      beaty: 0.7,
    },
    {
      id: 2,
      name: 'React',
      pain: 0.7,
      difficulty: 0.3,
      chaos: 1.0,
      beaty: 0.3,
    },
    {
      id: 3,
      name: 'Angular',
      pain: 1.0,
      difficulty: 0.5,
      chaos: 0.1,
      beaty: 0.05,
    },
    {
      id: 4,
      name: 'Django',
      pain: 0.4,
      difficulty: 0.5,
      chaos: 0.6,
      beaty: 0.2,
    },
    {
      id: 4,
      name: 'Node.js',
      pain: 1.0,
      difficulty: 1.0,
      chaos: 1.0,
      beaty: 0.0,
    },
    {
      id: 5,
      name: 'FastAPI',
      pain: 0.1,
      difficulty: 0.2,
      chaos: 0.2,
      beaty: 0.5,
    }
  ]
  
const formatpercentpain = (data) => {
    return `${data.pain*100}%`;
};

const formatperdifficulty = (data) => {
    return `${data.difficulty*100}%`;
};

const formatperchaos = (data) => {
    return `${data.chaos*100}%`;
};

const formatperbeaty = (data) => {
    return `${data.beaty*100}%`;
};

  return (
    <div>
      <Button
        onClick={show}
        label="Нажми на меня"
      />
      {visible === true &&
        <p>
            Hi
        </p>
      }
      {visible !== true &&
        <p>
            Да да я
        </p>
      }

        <div className="card">
            <DataTable value={data} tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" header="ID"></Column>
                <Column field="name" header="Имя"></Column>
                <Column field="pain" header="Коэффициент боли" body={formatpercentpain}></Column>
                <Column field="difficulty" header="Коэффициент сложности" body={formatperdifficulty}></Column>
                <Column field="chaos" header="Коэффициент хаоса" body={formatperchaos}></Column>
                <Column field="beaty" header="Коэффициент красоты кода" body={formatperbeaty}></Column>
            </DataTable>
        </div>
        
        <div className="butt">
        <Button label="/first"> </Button>
        <Button label="/second/fReact"> </Button>
        <Button label="?name=Vasya&age=20" onClick={click3}> </Button>
             </div>
       
    </div> 
    
    
  );
};
