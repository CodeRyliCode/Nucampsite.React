import React, { Component } from "react";
import Main from "./components/MainComponent";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";

const store = ConfigureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<div className="App">
						<Main />
					</div>
				</BrowserRouter>
			</Provider>
		);
	}
}

//json-server -H 0.0.0.0 --watch db.json -p 3001 -d 2000
export default App;
