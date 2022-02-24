import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Boutique from "./Containers/Boutique/Boutique";
import Mohair from "./Containers/Mohair/Mohair";
import Ferme from "./Containers/Ferme/Ferme";
import Visite from "./Containers/Visite/Visite";
import Contact from "./Containers/Contact/Contact";
import MentionsLegales from "./Containers/MentionsLegales/MentionsLegales";
import CGV from "./Containers/CGV/CGV";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Boutique} />
          <Route path="/le-mohair" exact component={Mohair} />
          <Route path="/la-ferme" exact component={Ferme} />
          <Route path="/visite-à-la-ferme" exact component={Visite} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Mentions-légales" exact component={MentionsLegales} />
          <Route path="/CGV" exact component={CGV} />
        </Switch>
        <Footer />
      </Router>
      <ScrollToTop smooth left />
    </>
  );
}

export default App;
