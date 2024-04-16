const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
      	    user: null,
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
		}
	};
};

export default getState;
