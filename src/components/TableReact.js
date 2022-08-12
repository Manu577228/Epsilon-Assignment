import React, { useState } from 'react'
import MockData from './MockData.json'

function TableReact() {

const [data, setData] = useState(MockData);
const [order, setOrder] = useState("ASC");

const sorting = (col) => {
    if(order === "ASC"){
    const sorted = [...data].sort((a,b) =>
    a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted);
    setOrder("DSC");
}

if(order === "DSC"){
    const sorted = [...data].sort((a,b) =>
    a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
    );
    setData(sorted);
    setOrder("ASC");
}
}

  return (
    <div className='container'>
        <table className='table table-bordered'>
            <thead>
                <th onClick={()=>sorting("name")}>Name</th>
                <th onClick={()=>sorting("price")}>Price</th>
                <th onClick={()=>sorting("category")}>Category</th>
            </thead>
            <tbody>
                {data.map((d)=>(
                    <tr key={d.id}>
                        <td>{d.name}</td>
                        <td>{d.price}</td>
                        <td>{d.category}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default TableReact