import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { BlobServiceClient } from "@azure/storage-blob";

const UploadFile = () => {
    const [data, setData] = useState({
        files: [],
    });

    const handleUploadFile = (e) => {
        const file = e.target.files[0];

        setData((prevData) => ({
            ...prevData,
            files: [...prevData.files, file]
        }));
    };

    const handleDeleteProductImage = (index) => {
        console.log('files index: ', index);

        const newProductImage = [...data.files];
        newProductImage.splice(index, 1);

        setData((prevData) => ({
            ...prevData,
            files: [...newProductImage]
        }));
    };

    const handleUploadFileToStorage = async () => {
        const storageAccount = "fileuploadstor1";
        const sastoken = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupiytfx&se=2024-06-27T11:24:52Z&st=2024-06-27T03:24:52Z&spr=https&sig=noMi4ZDDBOzuAG4pMs7gxHZ9Yrhzmz3SLrid11CAnyU%3D";
        const blobService = new BlobServiceClient(`https://${storageAccount}.blob.core.windows.net/?${sastoken}`);
        const containerClient = blobService.getContainerClient('upload');
        await containerClient.createIfNotExists({
            access: 'container'
        });

        for (const file of data.files) {
            const blobClient = containerClient.getBlockBlobClient(file.name);
            const options = { blobHTTPHeaders: { blobContentType: file.type } };
            await blobClient.uploadBrowserData(file, options);
            console.log(`Uploaded ${file.name} successfully`);
        }

        // Clear files after upload
        setData({
            files: [],
        });
    };
    

    console.log('data: ', data);

    return (
        <div>
            <div>
                <label htmlFor="image">Upload File: </label>
                <div
                    className="p-2 bg-slate-100 border rounded h-36 w-full flex justify-center items-center"
                    required
                >
                    <label htmlFor="uploadImageInput">
                        <div className="text-slate-500 justify-center items-center flex-col flex gap-2 cursor-pointer">
                            <span className="text-5xl">
                                <FaUpload />
                            </span>
                            <p className="text-lg">Upload Product Image</p>
                            <input type="file" id="uploadImageInput" className="hidden" onChange={handleUploadFile} />
                        </div>
                    </label>
                </div>
                <div className='flex gap-5'>
                    {data.files.length > 0 ? (
                        data.files.map((file, index) => (
                            <div key={index} className="relative group">
                                <div className='bg-slate-100 border p-4' >{file.name}</div>
                                <div>
                                    <IoCloseCircleOutline className='top-0 right-0 absolute cursor-pointer bg-red-600 rounded-full text-white hidden group-hover:block'
                                        onClick={() => handleDeleteProductImage(index)} />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>Upload your file</div>
                    )}
                </div>
                <button className="p-4 rounded-full bg-red-500 w-40 text-center justify-center items-center h-16 text-xl text-white" onClick={handleUploadFileToStorage}>Upload File</button>
            </div>
        </div>
    );
};

export default UploadFile;
