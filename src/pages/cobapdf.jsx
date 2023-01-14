import React from "react";
import axios from 'axios';
import { saveAs } from 'file-saver';
import { useState } from "react";

const CobaPdf = () =>{
    const [name, setName] = useState("");
    const [receiptId, setReceiptId] = useState("");
    const [price1, setPrice1] = useState("");
    const [price2, setPrice2] = useState("");

    const createAndDownloadPdf = () => {
        axios.post('http://localhost:5100/create-pdf', {
            name, receiptId, price1, price2
        })
          .then(() => axios.get('http://localhost:5100/fetch-pdf', { responseType: 'blob' }))
          .then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
    
            saveAs(pdfBlob, 'newPdf.pdf');
          })  
      }

    return(
        <div className="App">
        <input type="text" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
        <input type="number" placeholder="Receipt ID" name="receiptId" onChange={(e)=>setReceiptId(e.target.value)} />
        <input type="number" placeholder="Price 1" name="price1" onChange={(e)=>setPrice1(e.target.value)} />
        <input type="number" placeholder="Price 2" name="price2" onChange={(e)=>setPrice2(e.target.value)} />
        <button onClick={()=> createAndDownloadPdf()}>Download PDF</button>
      </div>
    )
}
export default CobaPdf;