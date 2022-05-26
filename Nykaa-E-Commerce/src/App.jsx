import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import Dashboard from "./components/dashboard/Dashboard";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIqgVIUgOpstpknVP42ytZNI0BMrheUOs",
  authDomain: "nykaafashion-20212022.firebaseapp.com",
  projectId: "nykaafashion-20212022",
  storageBucket: "nykaafashion-20212022.appspot.com",
  messagingSenderId: "580591227300",
  appId: "1:580591227300:web:e0d357d8e6d21718cc3131",
  measurementId: "G-E4XPVEQJQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Product' component={Product} />
        <Route path='/Cart' component={Cart} />
        <Route path='/ProductList' component={ProductList} />
        <Route path='/Home' component={Navbar} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/Registration' component={Registration}/>
<Route path='/Facebook' component={() => { 
     window.location.href = 'https://mui.com/material-ui/getting-started/templates/dashboard/'; 
     return null;
}}/>
 <Route path='/Instagram' component={() => { 
     window.location.href = 'https://mui.com/material-ui/getting-started/templates/dashboard/'; 
     return null;
}}/>
 <Route path='/Twitter' component={() => { 
     window.location.href = ''; 
     return null;
}}/>
<Route path='/GitHup' component={() => { 
     window.location.href = 'https://github.com/Inman2004/nykaa-imman/tree/main/Nykaa-E-Commerce'; 
     return null;
}}/>
      </Switch>
    </Router>
  );
  }

export default App;