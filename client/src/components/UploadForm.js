import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import axios from 'axios'


const CLOUDINARY_UPLOAD_PRESET = 'ow0bc9il';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/du9uhypnc/upload';


class UploadForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl:''
        };
        this.onImageDrop = this.onImageDrop.bind(this);
    }
    
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        this.handleImageUpload  (files[0]);
    }
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file',file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== ''){
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }
    render() {
        return (

        

        <div>
        <div className="FileUpload">
    
         </div>

        <div>
        {this.state.uploadedFileCloudinaryUrl === '' ? null :
        <div>
            <p> {this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
    </div> }
            </div>
            </div>
        


        );
    }
}

<Dropzone
    multiple={false}
    accept="image/*"
    onDrop={this.onImageDrop}>
    <p> Drop an image or click to select a file to upload. </p>
</Dropzone>


export default UploadForm;