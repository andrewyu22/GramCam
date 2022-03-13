import React, { useState } from "react";

function Addpost() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [caption, setCaption] = useState("");

  const handleInputChange = (event) => {
    setCaption(event.target.value);
    console.log(caption);
  };

  const previewImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedImg(readerEvent.target.result);
    };
  };

  return (
    <div
      class="modal fade"
      id="addPostModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content text-center">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Upload a Photo
            </h5>
            <button
              type="button"
              class="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {selectedImg ? (
              <img src={selectedImg} alt="previewImg" class="img-fluid mb-4" />
            ) : (
              <img
                src="https://static.wikia.nocookie.net/theallever/images/0/0a/THE_Preview_logo.jpg/revision/latest/scale-to-width-down/1000?cb=20201013032038"
                alt="previewImg"
                class="img-fluid mb-4"
              />
            )}
            <div class="file-upload-wrapper" data-mdb-file-upload="file-upload">
              <input type="file" class="file-upload" onChange={previewImage} />
            </div>
            <div class="form-outline mt-3 border">
              <input
                type="text"
                id="formControlLg"
                class="form-control form-control-lg"
                onChange={handleInputChange}
                value={caption}
              />
              <label class="form-label" for="formControlLg">
                Caption
              </label>
            </div>
          </div>
          <div class="modal-footer">
            <button
              data-mdb-toggle="modal"
              data-mdb-target="#addPostModal"
              type="button"
              class="btn btn-primary"
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
