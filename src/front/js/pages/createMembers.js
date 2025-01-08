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
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [invalidItems, setInvalidItems] = useState([]);

  const navigate = useNavigate();

  const token = sessionStorage.getItem("token")

  useEffect(() => {
    /*
    if (!token){
      navigate("/login");
    }
    */
    const authenticate = async () => {
      
      const authenticated = await actions.authenticate();
      if (!authenticated) {
        console.log("Authenticating...",authenticated)
      if (!token){
          navigate("/login");
        }
      }
    };
    authenticate();
  },[]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 100000) {
      setPicture(file);
      setPreviewURL(URL.createObjectURL(file));
    } else {
      alert("File size should be less than 100KB");
    }
  };

  /*
  const handleSubmit = async (e) => {
    e.preventDefault();
    setInvalidItems([]); // Reset invalid items

    // Validate all fields
    const isfirst_nameValid = ValidateFirstName(first_name, setInvalidItems);
    const islast_nameValid = ValidateLastName(last_name, setInvalidItems);
    const isEmailValid = ValidateEmail(email, setInvalidItems);
    const istelValid = ValidatePhone(tel, setInvalidItems);
    const isDescriptionValid = ValidateTextArea(description, setInvalidItems);
    const isPictureValid = ValidateImages(picture, setInvalidItems);

    if (isfirst_nameValid &&
        islast_nameValid &&
        isEmailValid &&
        istelValid &&
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

            const memberData = {
                first_name,
                last_name,
                email,
                tel,
                description,
                picture: pictureBase64
            };

            const result = await actions.addMembers(memberData);

            if (result) {
                // Reset all fields
                setFirst_name("");
                setLast_name("");
                setEmail("");
                setTel("");
                setDescription("");
                setPicture(null);
                setPreviewURL(null);
                setInvalidItems([]);
                alert("Member added successfully!");
            }
        } catch (error) {
            console.error("Error adding member:", error);
            alert(error.message || "Failed to add member. Please try again.");
        }
    } else {
        alert("Please correct the invalid fields before submitting.");
    }
};
*/


/*Claude Handlesubmit */

const handleSubmit = async (e) => {
  e.preventDefault();
  setInvalidItems([]); // Reset invalid items

  // Validate all fields
  const isfirst_nameValid = ValidateFirstName(first_name, setInvalidItems);
  const islast_nameValid = ValidateLastName(last_name, setInvalidItems);
  const isEmailValid = ValidateEmail(email, setInvalidItems);
  const istelValid = ValidatePhone(tel, setInvalidItems);
  const isDescriptionValid = ValidateTextArea(description, setInvalidItems);
  const isPictureValid = ValidateImages(picture, setInvalidItems);

  if (isfirst_nameValid &&
      islast_nameValid &&
      isEmailValid &&
      istelValid &&
      isDescriptionValid &&
      isPictureValid) {
      try {
          const memberData = {
              first_name,
              last_name,
              email,
              tel,
              description,
              picture: picture // Send the raw file
          };

          const result = await actions.addMembers(memberData);

          if (result) {
              // Reset all fields
              setFirst_name("");
              setLast_name("");
              setEmail("");
              setTel("");
              setDescription("");
              setPicture(null);
              setPreviewURL(null);
              setInvalidItems([]);
              alert("Member added successfully!");
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
          <h1 className="adminTitle">Register Members</h1>
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
                value={first_name}
                onChange={(e) => setFirst_name(e.target.value)}
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
                value={last_name}
                onChange={(e) => setLast_name(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {invalidItems.includes("email") && <div className="text-danger">Please enter a valid email</div>}
            </div>

            <div className="mb-3">   
              <label htmlFor="tel" className="form-label">tel</label>
              <input
                type="tel"
                className="form-control"
                id="tel"
                name="tel"
                value={tel}
                onChange={(e) => setTel(e.target.value)}
                required
              />
              {invalidItems.includes("tel") && <div className="text-danger">Please enter a valid tel number</div>}
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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