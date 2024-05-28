import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ValidateEmail,
  ValidatePhone,
  ValidateFirstName,
  ValidateLastName,
  ValidateImages,
  ValidateTextArea,
} from "../store/validators";

//create your first component
export const CreateMembers = () => {
  const { store, actions } = useContext(Context);
  const [first_name, setFirst_name] = useState("");
  const [invalidItems, setInvalidItems] = useState([]);
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [imageSizeError, setImageSizeError] = useState(false);
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState("");
  const [previewURL, setPreviewURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authenticate = async () => {
      let authenticated = await actions.authenticate();
      if (!authenticated) {
        navigate("/login");
      }
    };
    authenticate();
  }, []);

  useEffect(() => {
    if (!picture) return;
    let temp = URL.createObjectURL(picture);
    setPreviewURL(temp);
  }, [picture]);

  const handleImageUpload = (event) => {
    const files = event.target.files;

    let file_size = files[0].size;

    if (file_size <= 100000) {
      setImageSizeError(false);
      setPicture(files[0]);
    } else {
      setImageSizeError(true);
    }
  };

  const handleSubmit = async () => {
    let isPhoneValid = ValidatePhone(tel, setInvalidItems);
    let isEmailValid = ValidateEmail(email, setInvalidItems);

    let isFirstNameValid = ValidateFirstName(first_name, setInvalidItems);
    let isLastNameValid = ValidateLastName(last_name, setInvalidItems);
    let isDescriptionValid = ValidateTextArea(description, setInvalidItems);
    let isPictureValid = ValidateImages(picture, setInvalidItems);

    if (
      isEmailValid &&
      isPhoneValid &&
      isFirstNameValid &&
      isLastNameValid &&
      isDescriptionValid &&
      isPictureValid
    ) {
      let result = await actions.addMembers(
        first_name,
        last_name,
        email,
        tel,
        description,
        picture
      );

      if (result) {
        setFirst_name("");
        setLast_name("");
        setEmail("");
        setTel("");
        setDescription("");
        setPicture("");
        document.getElementById("pictureInput").value = "";
        setImageSizeError(false);
        setPreviewURL("");
      } else {
        console.log("There was an error attempting to create the member!");
      }
    }
  };

  return (
    <div className="form h-auto">
      <img
        src="https://i.ibb.co/4j8Gs4q/banner.jpg"
        height="75px"
        width="100%"
      />
      <button onClick={() => console.log(invalidItems)}>click here</button>
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
            id="pictureInput"
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
          {invalidItems.includes("images") && (
            <label className="error-label text-dark">
              Please submit a picture for this member
            </label>
          )}
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
            {invalidItems.includes("firstName") && (
              <label className="error-label text-dark">
                Please enter a valid value
              </label>
            )}
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
            {invalidItems.includes("lastName") && (
              <label className="error-label text-dark">
                Please enter a valid value
              </label>
            )}
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
            {invalidItems.includes("email") && (
              <label className="error-label text-dark">
                Please enter a valid value
              </label>
            )}
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
            {invalidItems.includes("phone") && (
              <label className="error-label text-dark">
                Please enter a valid value
              </label>
            )}
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
            {invalidItems.includes("description") && (
              <label className="error-label text-dark">
                Please enter a valid value
              </label>
            )}
          </div>
      <div className="row">
        <div classNameName="button">
              <div className="col">
                <button className="btn btn-primary" onClick={handleSubmit}>
                  Create Members{" "}
                </button>
              </div>
              <div className="col">
                      <Link
                    type="button"
                    to={"/admin"}
                    className="btn btn-primary  justify-content-center">
                    Back to Admin page
                  </Link>
              </div>
              <div className="col">
                  <Link
                    type="button"
                    to={"/"}
                    className="btn btn-primary  justify-content-center"
                  >
                    Cancel
                  </Link>
              </div>
              <div className="col">
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
      </div>
    </div>
  );
};