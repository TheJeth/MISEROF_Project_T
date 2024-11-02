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
  const [previewURL, setPreviewURL] = useState("");
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

  useEffect(() => {
    if (picture) {
      setPreviewURL(URL.createObjectURL(picture));
    }
  }, [picture]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100000) {
      setPicture(file);
    } else {
      alert("File size should be less than 100KB");
    }
  };

  const validateForm = () => {
    const newInvalidItems = [];
    if (!ValidateFirstName(formData.first_name)) newInvalidItems.push("firstName");
    if (!ValidateLastName(formData.last_name)) newInvalidItems.push("lastName");
    if (!ValidateEmail(formData.email)) newInvalidItems.push("email");
    if (!ValidatePhone(formData.tel)) newInvalidItems.push("phone");
    if (!ValidateTextArea(formData.description)) newInvalidItems.push("description");
    if (!ValidateImages(picture)) newInvalidItems.push("images");
    setInvalidItems(newInvalidItems);
    return newInvalidItems.length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await actions.addMembers({ ...formData, picture });
      if (result) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          tel: "",
          description: "",
        });
        setPicture(null);
        setPreviewURL("");
        alert("Member added successfully!");
      }
    }
  };

  return (
    <div className="form h-auto">
      <img src="https://i.ibb.co/4j8Gs4q/banner.jpg" height="75px" width="100%" alt="banner" />
      <h1 className="text-center">Register Members</h1>
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
          {previewURL && <img src={previewURL} alt="Preview" className="mt-2 rounded-circle" style={{ maxHeight: "200px" }} />}
          {invalidItems.includes("images") && <div className="text-danger">Please submit a picture for this member</div>}
        </div>
        {Object.entries(formData).map(([key, value]) => (
          <div className="mb-3" key={key}>
            <label htmlFor={key} className="form-label">{key.replace('_', ' ').charAt(0).toUpperCase() + key.slice(1)}</label>
            <input
              type={key === "email" ? "email" : key === "tel" ? "tel" : "text"}
              className="form-control"
              id={key}
              name={key}
              value={value}
              onChange={handleInputChange}
              required
            />
            {invalidItems.includes(key) && <div className="text-danger">Please enter a valid value</div>}
          </div>
        ))}
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
  );
};