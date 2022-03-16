import React, { useState } from "react";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { useMutation } from "@apollo/client";
import { UPDATE_PROFILE } from "../../utils/mutations";
import { ALL_POST, GET_USER } from "../../utils/queries";

function EditProfile({ avatar }) {
  const [currentImg, setCurrentImg] = useState("");
  const [updateUser] = useMutation(UPDATE_PROFILE, {
    refetchQueries: [ALL_POST, GET_USER],
  });
  const newImage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setCurrentImg(readerEvent.target.result);
    };
  };
  const updateProfile = async () => {
    const uploadImg = ref(storage, `/profile/test.png`);
    try {
      await uploadString(uploadImg, currentImg, "data_url").then(
        async (snapshot) => {
          const downloadUrl = await getDownloadURL(uploadImg);
          await updateUser({
            variables: { avatarImg: downloadUrl },
          });

          setCurrentImg("");
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="modal fade"
      id="updateModal"
      tabIndex="-1"
      aria-labelledby="updateModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <div className="modal-header">
            <h5 className="modal-title" id="updateModalLabel">
              Update Your Profile!
            </h5>
            <button
              type="button"
              className="btn-close"
              data-mdb-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {currentImg ? (
              <img
                src={currentImg}
                alt="currentImg"
                className="img-fluid mb-4"
              />
            ) : (
              <img src={avatar} alt="currentImg" className="img-fluid mb-4" />
            )}
            <div
              className="file-upload-wrapper"
              data-mdb-file-upload="file-upload"
            >
              <input type="file" className="file-upload" onChange={newImage} />
            </div>
          </div>
          <div className="modal-footer">
            <button
              data-mdb-toggle="modal"
              type="button"
              className="btn btn-primary"
              onClick={updateProfile}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
