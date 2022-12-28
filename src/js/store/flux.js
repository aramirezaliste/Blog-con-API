const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			areas: [],
			favoritos: [],
			detallesPersonaje: [],
			detallesAreas: [], 
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {

			getPersonajes: () => {
				fetch("https://pokeapi.co/api/v2/pokemon")
					.then(response => response.json())
					.then(data => setStore({ personajes: data.results }))
			},

			getAreas: () => {
				fetch("https://pokeapi.co/api/v2/location-area")
					.then(response => response.json())
					.then(data => setStore({ areas: data.results }))
			},

			getDetallesPersonaje: (nombre) => {
				console.log(nombre)
				fetch(nombre ? "https://pokeapi.co/api/v2/pokemon/" + nombre : "https://pokeapi.co/api/v2/pokemon/1")
					.then(response => response.json())
					.then(data => setStore({ detallesPersonaje: data }))
			},

			getDetallesAreas: (nombreArea) => {
				console.log(nombreArea)
				fetch(nombreArea ? "https://pokeapi.co/api/v2/location-area/" + nombreArea : "https://pokeapi.co/api/v2/location-area/15")
					.then(response => response.json())
					.then(data => setStore({ detallesAreas: data }))
			},

			addFavoritos: (nombre) => {
				const store = getStore();
				console.log(nombre + " En Favoritos");
				setStore({ favoritos: [...store.favoritos, nombre] })
			},

			deleteFavoritos: (nombre) => {
				const store = getStore();
				console.log(nombre + " Eliminado");
				setStore({
					favoritos: store.favoritos.filter((poke) => {
						return poke != nombre
					})
				})
			},


			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
