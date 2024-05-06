import { Members } from "../pages/members";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			activities :[],//that is a storage space to save all the activities fetched from the backend
			members : [], //that is a storage space to save all the activities fetched from the backend
			users: [],
			testimonies:[]

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

			verifyUser: async (email) => {
				console.log("email", email);

				const opts = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: email,
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
					console.log("This comes from backend", data);
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}
			},

			login: async (email, password) => {
				console.log("email", email);
				console.log("password", password);
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

						return false;
					}
					const data = await resp.json();
					console.log("This comes from backend", data);
					sessionStorage.setItem("token", data.access_token);

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

			createActivities: async (description,start_date,end_date,responsible) => {
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
						responsible :responsible						
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
					console.log("This comes from backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, user: data.user });
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

			addMembers: async (
				first_name,
				last_name,
				email,
				tel,
				description,
				picture
			  ) => {
				let data = JSON.stringify({
				  first_name: first_name,
				  last_name: last_name,
				  email: email,
				  tel: tel,
				  description: description,
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
					process.env.BACKEND_URL + "/api/members",
					opts
				  );
				  if (resp.status != 200) {
					let errorMsg = await resp.json();
					alert("An error occured while submitted the new member: "+errorMsg.msg)
					return false;
				  }
				  const respBody = await resp.json();
				  console.log("This comes from backend", respBody);
				  sessionStorage.setItem("token", respBody.access_token);
				  setStore({ token: respBody.access_token, user: respBody.user });
				  return true;
				
			  },   
			getMembers: () => {
				fetch(process.env.BACKEND_URL + "/api/members")
				    .then((response) => response.json())
					.then((data) => {
                        console.log(data);
                        setStore({ members: data.members });
                    })
			},

			postTestimony: async (full_name,description,dateTestimony) => {
				const opts = {
					method: "POST",

					headers: {
						"Content-Type": "application/json",
						
					},
					body: JSON.stringify({
						full_name: full_name,
						description: description,
						dateTestimony: dateTestimony				
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
					console.log("This comes from backend", data);
					//sessionStorage.setItem("token", data.access_token);
					//setStore({ token: data.access_token, user: data.user });
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
                        setStore({ members: data.testimonies });
                    })
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
					console.log("This comes from backend", data);
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
					console.log("This comes from backend", data);
					sessionStorage.setItem("token", data.access_token);
					setStore({ token: data.access_token, user: data.user });
					return true;
				} catch (error) {
					console.log("There was error !!!", error);
				}
			}


		}
	};
};

export default getState;