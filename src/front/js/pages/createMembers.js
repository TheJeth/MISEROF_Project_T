import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link, useParams } from "react-router-dom";

//create your first component
export const CreateMembers = () => {
  const { store, actions } = useContext(Context);
  const user = store.user;
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [tel, setTel] = useState();
  const [description, setDescription] = useState();

  const [picture, setPicture] = useState();
  const [imageSizeError, setImageSizeError] = useState(false);
  const [file, setFile] = useState();
  const [previewURL, setPreviewURL] = useState();

  useEffect(() => {
    if (!file) return;
    let temp = URL.createObjectURL(file);
    setPreviewURL(temp);
  }, [file]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    let file_size = files[0].size;

    if (file_size <= 100000) {
      setImageSizeError(false);
      setFile(files[0]);
      setPicture(files[0]);
    } else {
      setImageSizeError(true);
    }
  };

  return (
    <div className="form">
      <img
        src="https://i.ibb.co/4j8Gs4q/banner.jpg"
        height="75px"
        width="100%"
      />
      <div className="mb-3">
        <h1 className="text-center">Register Members</h1>
      </div>
      <div className="row">
        <div className="col-2">
          <img height="200px" className="rounded-circle" src={previewURL} />
          <p className="col-3 ps-0" for="picture">
            <b>Select Picture</b>
          </p>

          <input
            type="file"
            className="rounded-circle"
            name="myImage"
            accept="image/png, image/gif, image/jpeg, image/bmp, image/svg+xml, image/webp"
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleImageUpload(e);
              } else {
                <img
                  height="200px"
                  className="rounded-circle"
                  src="https://i.ibb.co/1qXfdp0/user.png"
                />;
              }
            }}
          />
        </div>
        <div
          className="jumbotron justify-content-center text-end mx-auto col"
          style={{ width: "450px" }}
        >
          <div class="form-group row"></div>
          <div className="mb-3 row">
            <p htmlFor="formGroupExampleInput2" className="col-3 ps-0">
              <b>First Name:</b>
            </p>

            <input
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              type="text"
              className="form-control col"
              id="formGroupExampleInput2"
              placeholder="Enter your first name here"
            ></input>
          </div>

          <div className="mb-3 row">
            <p htmlFor="formGroupExampleInput2" className="col-3 ps-0">
              <b>Last Name:</b>
            </p>
            <input
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
              type="text"
              className="form-control col"
              id="formGroupExampleInput2"
              placeholder="Enter your last name here"
            ></input>
          </div>

          <div className="mb-3 row">
            <p htmlFor="formGroupExampleInput2" className="col-3 ps-0">
              <b>Email:</b>
            </p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="form-control col"
              id="formGroupExampleInput2"
              placeholder="Enter your email address here"
            ></input>
          </div>

          <div className="mb-3 row">
            <p htmlFor="formGroupExampleInput2" className="col-3 ps-0">
              <b>Tel:</b>
            </p>
            <input
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              type="text"
              className="form-control col"
              id="formGroupExampleInput2"
              placeholder="Enter your Telephone here"
            ></input>
          </div>

          <div className="mb-3 row">
            <p htmlFor="formGroupExampleInput2" className="col-3 ps-0">
              <b>Description</b>
            </p>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control col"
              id="formGroupExampleInput2"
              placeholder="A Short description of the member here"
            ></input>
          </div>

          <div classNameName="button">
            <button
              className="btn btn-primary"
              onClick={() =>
                actions.addMembers(
                  first_name,
                  last_name,
                  email,
                  tel,
                  description,
                  picture
                )
              }
            >
              Create Members{" "}
            </button>
            <Link
              type="button"
              to={"/admin"}
              className="btn btn-primary  justify-content-center"
            >
              Back to Admin page
            </Link>
            <Link
              type="button"
              to={"/"}
              className="btn btn-primary  justify-content-center"
            >
              Cancel
            </Link>
            <Link
              type="button"
              to={"/"}
              className="btn btn-primary justify-content-right"
            >
              Go to Home page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
