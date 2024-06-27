const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");

const uploadFile = async() => {
    const storageAccount = "fileuploadstor1";
    const sastoken = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwlacupiytfx&se=2024-06-27T02:49:07Z&st=2024-06-26T18:49:07Z&spr=https&sig=xW8HefQClYKYZ65RPxb4iLaLM4JjLcfygjZPKC1%2B8lk%3D"

    const blobService = new BlobServiceClient (`https://${storageAccount}.blob.core.windows.net/?${sastoken}`);

    const containerClient = blobService.getContainerClient('upload');
    await containerClient.createIfNotExists({
        access: 'container'
    })

    const blobClient  = containerClient.getBlockBlobClient(this.state.file.name);

    const options = {blobHTTPHeaders: {blobContainerType: this.state.file.type}};

    await blobClient.uploadBrowserData(this.state.file, options)
}

export default uploadFile;