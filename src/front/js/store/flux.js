import { Members } from "../pages/members";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			activities: [],//that is a storage space to save all the activities fetched from the backend
			members: [], //that is a storage space to save all the activities fetched from the backend
			users: [],
			testimonies: [],
			events: []

		},
		actions: {
			// Use getActions to call a function within a fuction

			syncTokenFromSessionStore: () => {
				const token = sessionStorage.getItem("token");
				console.log("Application just loaded synching the local storage");
				if (token && token != "" && token != undefined)
					setStore({ token: token });
			},

			logout: () => {
				sessionStorage.removeItem("token");
				console.log("Log out");
				setStore({ token: null });
				setStore({ user: null });
			},

			authenticate: async () => {
				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token"),
					},
				};

				const resp = await fetch(
					process.env.BACKEND_URL + "/api/authentication",
					opts
				);
				if (resp.status != 200) {
					console.log(resp.status);

					return false;
				}
				const data = await resp.json();
				return true;
			},

			forgotPasswordRequest: async (email) => {
				const opts = {
					method: "GET",
					headers: {

					}
				}
			},


			login: async (email, password) => {
				console.log("email", email);
				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
						password: password,
					}),
				};
				try {
					const resp = await fetch(
						process.env.BACKEND_URL + "/api/login",
						opts
					);
					if (resp.status != 200) {
						console.log(resp.status);

						return resp;
					}
					const data = await resp.json();
					
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token });
					return true;

				} catch (error) {
					console.log("There was error !!!", error);
				}
			},
			getUserInfo: async () => {

				try {
					let response = await fetch(process.env.BACKEND_URL + "/api/get-user-info", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: "Bearer " + sessionStorage.getItem("token")
						}
					})
					if (response.status != 200) {
						console.log(response.status);
						return false;
					} else {
						const data = await response.json();
						console.log(data);
						return data;
					}

				} catch (error) { console.log(error) }


			},

			createActivities: async (description, start_date, end_date, responsible) => {
				const opts = {
					method: "POST",

					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("token")
					},
					body: JSON.stringify({
						start_date: start_date,
						end_date: end_date,
						description: description,
						responsible: responsible
					}),

				};
				try {
					const resp = await fetch(
						process.env.BACKEND_URL + "/api/activities",
						opts
					);
					if (resp.status != 200) {
						console.log(resp.status);

						return false;
					}
					const data = await resp.json();
					
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, user: data.user });
					alert("Activity successfully created!");
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}

			},
			getActivities: () => {
				fetch(process.env.BACKEND_URL + "/api/activities")
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ activities: data.activities });
					})
			},

			addMembers: async (getStore, getActions, { first_name, last_name, email, tel, description, picture }) => {
				try {
					const formData = new FormData();
					formData.append("data", JSON.stringify({ first_name, last_name, email, tel, description }));
					if (picture) {
						formData.append("file", picture);
					}

					const resp = await fetch(`${process.env.BACKEND_URL}/api/members`, {
						method: "POST",
						headers: {
							Authorization: `Bearer ${sessionStorage.getItem("token")}`,
						},
						body: formData,
					});

					if (!resp.ok) {
						const errorData = await resp.json();
						throw new Error(errorData.msg || "Failed to add member");
					}

					const data = await resp.json();
					console.log("Response from backend:", data);

					// Update the store if necessary
					// getActions().fetchMembers(); // Assuming you have an action to fetch updated members list

					return true;
				} catch (error) {
					console.error("Error adding member:", error);
					alert(`An error occurred while adding the new member: ${error.message}`);
					return false;
				}
			},

			getMembers: () => {
				fetch(process.env.BACKEND_URL + "/api/members")
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ members: data.members });
					})
			},

			postTestimony: async (full_name, description) => {
				const opts = {
					method: "POST",

					headers: {
						"Content-Type": "application/json",

					},
					body: JSON.stringify({
						full_name: full_name,
						description: description,
					}),
				};
				try {
					const resp = await fetch(
						process.env.BACKEND_URL + "/api/testimony",
						opts
					);
					if (resp.status != 200) {
						console.log(resp.status);

						return false;
					}
					const data = await resp.json();
					
					alert("Thank you for posting your testimony");
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}

			},
			getTestimony: () => {
				fetch(process.env.BACKEND_URL + "/api/testimony")
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ testimonies: data.testimonies });

					})
					.catch((error) => {
						console.log(error);
					});
			},

			getProfile: async (first_name, last_name, email, picture, id) => {
				const opts = {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						picture: picture,
						id: id
					}),
				};
				try {
					const resp = await fetch(
						process.env.BACKEND_URL + "/api/login",
						opts
					);
					if (resp.status != 200) {
						console.log(resp.status);

						return false;
					}
					const data = await resp.json();
					
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, user: data.user });
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}
			},


			updateProfile: async (first_name, last_name, email, picture, id) => {
				const opts = {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						first_name: first_name,
						last_name: last_name,
						email: email,
						picture: picture,
						id: id
					}),
				};
				try {
					const resp = await fetch(
						process.env.BACKEND_URL + "/api/login",
						opts
					);
					if (resp.status != 200) {
						console.log(resp.status);

						return false;
					}
					const data = await resp.json();
					
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, user: data.user });
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}
			},


			addEvents: async (
				description,
				date,
				picture
			) => {
				let data = JSON.stringify({
					description: description,
					date: date,
					picture: picture,
				});

				const formData = new FormData();

				formData.append("data", data);

				formData.append("file", picture);

				const opts = {
					method: "POST",

					headers: {
						Authorization: "Bearer " + sessionStorage.getItem("token"),
					},
					body: formData,
				};
				const resp = await fetch(
					process.env.BACKEND_URL + "/api/events",
					opts
				);
				if (resp.status != 200) {
					let errorMsg = await resp.json();
					alert("An error occured while submitted this past event: " + errorMsg.msg)
					return false;
				}
				const respBody = await resp.json();
				sessionStorage.setItem("token", respBody.access_token);
				setStore({ token: respBody.access_token, user: respBody.user });
				alert("Past event added successfully");
				return true;

			},
			getEvents: () => {
				fetch(process.env.BACKEND_URL + "/api/events")
					.then((response) => response.json())
					.then((data) => {
						console.log(data);
						setStore({ events: data.events });
					})
			},

		}
	};
};

export default getState;