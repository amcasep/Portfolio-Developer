import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const CV = () => {

    const handleDownload = () => {

        const url = './AmparoCabezuelo-Lebenslauf.pdf';
        const fileName = 'AmparoCabezuelo-Lebenslauf.pdf'

        axios
            .get(url, { responseType: 'blob' })
            .then(response => {
                const href = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = href;
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            })
            .catch(error => console.error('Error downloading file:', error));
    };

    return (


        
        <div className="cv wrapper">
            <div className="sectionTextWrapper">
                <h1 className='title'>Curriculum Vitae</h1>
                <h1>📄</h1>
            </div>
            <div className="buttonsCV">
                <Link href="./AmparoCabezuelo-Lebenslauf.pdf" target="_blank">
                    <button onClick={() => { window.open('./AmparoCabezuelo-Lebenslauf.pdf', '_blank'); }}>VIEW CV <HiOutlineDocumentMagnifyingGlass  className='icon'/></button>
                    </Link>
                <button onClick={handleDownload}>DOWNLOAD CV <HiOutlineDocumentArrowDown className='icon'/></button>
                
            </div>

        </div>
    );
}

export default CV;