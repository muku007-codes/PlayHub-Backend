import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs'


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;

        // upload the file on cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: 'auto'
        })
        // file was successfully uploaded
        console.log("File is Uploaded", responce.url);
        return responce;
    } catch (error) {
        // remove the locally saved temp file as upload opration got failed
        fs.unlinkSync(localFilePath);
        return null;
    }
}

export { uploadOnCloudinary };