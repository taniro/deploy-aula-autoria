import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Contato from "./Contato";
import Erro from "./Erro";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Noticias from "./Noticias";

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/noticias">
					<Noticias />
				</Route>
				<Route path="/contato">
					<Contato />
				</Route>
				<Route path="*">
					<Erro />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
