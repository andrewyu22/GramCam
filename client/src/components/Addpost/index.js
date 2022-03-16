import React, { useState } from "react";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";
import { ALL_POST } from "../../utils/queries";

function Addpost() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [Img, setImg] = useState(null);
  const [caption, setCaption] = useState("");
  const [newPost] = useMutation(ADD_POST, {
    refetchQueries: [ALL_POST],
  });

  const handleInputChange = (event) => {
    setCaption(event.target.value);
  };

  const previewImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setImg(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImg(readerEvent.target.result);
    };
  };

  const addPost = async () => {
    const uploadImg = ref(storage, `/image/${Img.name}`);
    try {
      await uploadString(uploadImg, selectedImg, "data_url").then(
        async (snapshot) => {
          const downloadUrl = await getDownloadURL(uploadImg);
          console.log(downloadUrl);

          await newPost({
            variables: { postImg: downloadUrl, caption: caption },
          });

          setCaption("");
          setImg(null);
          setSelectedImg(null);
          // window.location.reload();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="modal fade"
      id="addPostModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Upload a Photo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {selectedImg ? (
              <img
                src={selectedImg}
                alt="previewImg"
                className="img-fluid mb-4"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/dc/No_Preview_image_2.png"
                alt="previewImg"
                className="img-fluid mb-4"
              />
            )}
            <div
              className="file-upload-wrapper"
              data-mdb-file-upload="file-upload"
            >
              <input
                type="file"
                className="file-upload"
                onChange={previewImage}
              />
            </div>
            <div className="form-outline mt-3 border">
              <input
                type="text"
                id="formControlLg"
                className="form-control form-control-lg"
                onChange={handleInputChange}
                value={caption}
              />
              <label className="form-label" htmlFor="formControlLg">
                Caption
              </label>
            </div>
          </div>
          <div className="modal-footer">
            <button
              disabled={!selectedImg}
              data-mdb-toggle="modal"
              type="button"
              className="btn btn-primary"
              onClick={addPost}
            >
              Add Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addpost;
