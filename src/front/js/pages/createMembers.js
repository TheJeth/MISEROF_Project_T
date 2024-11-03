import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/profile.css";
import { Link, useNavigate } from "react-router-dom";
import {
  ValidateEmail,
  ValidatePhone,
  ValidateFirstName,
  ValidateLastName,
  ValidateImages,
  ValidateTextArea,
} from "../store/validators";

export const CreateMembers = () => {
  const { actions } = useContext(Context);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    tel: "",
    description: "",
  });

  
  const [picture, setPicture] = useState(null);
  const [invalidItems, setInvalidItems] = useState([]);
  const [previewURL, setPreviewURL] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const authenticate = async () => {
      const authenticated = await actions.authenticate();
      if (!authenticated) {
        navigate("/login");
      }
    };
    authenticate();
  }, [actions, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100000) {
      setPicture(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      alert("File size should be less than 100KB");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidItems([]); // Reset invalid items
  
    // Validate all fields
    const isFirstNameValid = ValidateFirstName(firstName, setInvalidItems);
    const isLastNameValid = ValidateLastName(lastName, setInvalidItems);
    const isEmailValid = ValidateEmail(email, setInvalidItems);
    const isPhoneValid = ValidatePhone(phone, setInvalidItems);
    const isDescriptionValid = ValidateTextArea(description, setInvalidItems);
    const isPictureValid = ValidateImages(picture, setInvalidItems);
  
    if (isFirstNameValid && 
        isLastNameValid && 
        isEmailValid && 
        isPhoneValid && 
        isDescriptionValid && 
        isPictureValid) {
      try {
        // Convert picture to base64 if it exists
        let pictureBase64 = null;
        if (picture) {
          const reader = new FileReader();
          pictureBase64 = await new Promise((resolve) => {
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(picture);
          });
        }
  
        const result = await actions.addMembers({
          first_name: firstName,
          last_name: lastName,
          email: email,
          tel: phone,
          description: description,
          picture: pictureBase64
        });
        
        if (result) {
          // Reset all fields
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setDescription("");
          setPicture(null);
          setPreviewURL(null);
          setInvalidItems([]);
          alert("Member added successfully!");
        } else {
          throw new Error("Failed to add member");
        }
      } catch (error) {
        console.error("Error adding member:", error);
        alert(error.message || "Failed to add member. Please try again.");
      }
    } else {
      alert("Please correct the invalid fields before submitting.");
    }
  };

  useEffect(() => {
    return () => {
      if (previewURL) {
        URL.revokeObjectURL(previewURL);
      }
    };
  }, [previewURL]);

  return (
    <>
      <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" alt="banner" />
      <div className="container w-50 border shadow my-5">
        <div className="form h-100">
          <h1 className="text-center adminTitle">Register Members</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="pictureInput" className="form-label">Select Picture</label>
              <input
                id="pictureInput"
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {previewURL && (
                <img
                  src={previewURL}
                  alt="Preview"
                  className="mt-2 rounded-circle"
                  style={{ maxHeight: "200px" }}
                />
              )}
              {invalidItems.includes("images") && <div className="text-danger">Please submit a picture for this member</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="first_name" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
                required
              />
              {invalidItems.includes("first_name") && <div className="text-danger">Please enter a valid first name</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="last_name" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
                required
              />
              {invalidItems.includes("last_name") && <div className="text-danger">Please enter a valid last name</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {invalidItems.includes("email") && <div className="text-danger">Please enter a valid email</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="tel" className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                id="tel"
                name="tel"
                value={formData.tel}
                onChange={handleInputChange}
                required
              />
              {invalidItems.includes("tel") && <div className="text-danger">Please enter a valid phone number</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
              />
              {invalidItems.includes("description") && <div className="text-danger">Please enter a valid description</div>}
            </div>

            <div className="row">
              <div className="col">
                <button type="submit" className="btn btn-success">Create Member</button>
              </div>
              <div className="col">
                <Link to="/administrator" className="btn btn-success">Back to Admin page</Link>
              </div>
              <div className="col">
                <Link to="/" className="btn btn-success">Cancel</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};