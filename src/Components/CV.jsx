import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom"
import { HiOutlineDocumentMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import Aos from 'aos';
import 'aos/dist/aos.css'
const CV = () => {
    useEffect(() => {
        Aos.init({ duration: 400 })
    }, [])
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
        
        <div className="cv wrapper" id='cv' data-aos='fade-up' data-aos-once="true">
            <div className="sectionTextWrapper">
                <h1 className='title'>Curriculum Vitae</h1>
                <h1>📄</h1>
            </div>
            <div className="buttonsCV">
                <Link to="./AmparoCabezuelo-Lebenslauf.pdf" target="_blank">
                    <button >VIEW CV <HiOutlineDocumentMagnifyingGlass  className='icon'/></button>
                    </Link>
                <button onClick={handleDownload}>DOWNLOAD CV <HiOutlineDocumentArrowDown className='icon'/></button>
                
            </div>
            {/* onClick={() => { window.open('./AmparoCabezuelo-Lebenslauf.pdf', '_blank'); }} */}
        </div>
    );
}

export default CV;