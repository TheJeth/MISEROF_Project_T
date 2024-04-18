const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
      	    user: null,
    },
	users: [],

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

			  getUser: async () => {
				const response = await fetch(process.env.BACKEND_URL + "/api/login")
				const data = await response.json()
				setStore({ users: data })
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
				  setStore({ token: data.access_token, user: data.user });
				  return true;
				} catch (error) {
				  console.log("There was error !!!", error);
				}
			  },

			  addMembers: async (first_name, last_name, email, phone, address) => {
				const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(
						{
							first_name: first_name,
							last_name: last_name,	
							email: email,
							tel: tel,
							picture: picture,
							agenda_slug: "jethro_agenda"
						}),
					headers: {
						"Content-Type": "application/json"
					},
				})
				const data = await response.json();
			},

			  getProfile : async(first_name, last_name, email, picture,id) => {
				const opts = {
				  method: "GET",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					first_name : first_name,
					last_name : last_name,
                    email : email,
					picture: picture,
                    id : id
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


			  updateProfile : async(first_name, last_name, email, picture,id) => {
				const opts = {
				  method: "PUT",
				  headers: {
					"Content-Type": "application/json",
				  },
				  body: JSON.stringify({
					first_name : first_name,
					last_name : last_name,
                    email : email,
					picture: picture,
                    id : id
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
