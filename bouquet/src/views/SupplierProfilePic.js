import './App.scss';
import '../components/login.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/button';
import { useNavigate } from 'react-router-dom';

function SuppliersProfile() {
    const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;
    const modifiedUrl = process.env.REACT_APP_API_MODIFIED_URL;
    const [supplierImage, setSupplierImage] = useState(null);
    const [file, setFile] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (!selectedFile) return;

        const reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const width = 200;
                const scaleFactor = width / img.width;
                canvas.width = width;
                canvas.height = img.height * scaleFactor;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
                canvas.toBlob((blob) => {
                    const file = new File([blob], selectedFile.name, {
                        type: 'image/jpeg',
                        lastModified: Date.now(),
                    });
                    setFile(file);
                }, 'image/jpeg', 1);
            };
        };
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);
        console.log(file);

        try {
            const res = await axios.post(`${modifiedUrl}/image/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(res.data);
            setSupplierImage(res.data.imageUrl);
            console.log(supplierImage);
            navigate(`/suppliersRegister/${res.data._id}`);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1 className='pageTitle titleMargin'>Register</h1>
            <h2 className='pageTitle'> Please add a profile picture </h2>
            <form onSubmit={handleUpload}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">    
                    <Button text="Add picture" />
                </button>
            </form>
        </div>
    );
}

export default SuppliersProfile;
