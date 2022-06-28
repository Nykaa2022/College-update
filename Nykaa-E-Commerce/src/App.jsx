import Product from "./pages/productid";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Registration from "./pages/Registration";
import Dashboard from "./components/dashboard/Dashboard";
import AddProduct from "./components/dashboard/addpro";
import Comments from "./components/Comments";
import Blog from "./blog/Blog";
import Newsletter from "./components/Newsletter";
function App() {
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Login' exact component={Login} />
        <Route path='/Register' component={Register} />
        <Route path='/Product/:id' component={Product} />
        <Route path='/Cart' component={Cart} />
        <Route path='/ProductList' component={ProductList} />
        <Route path='/Home' component={Navbar} />
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/AddProduct' component={AddProduct} />
        <Route path='/Registration' component={Registration}/>
        <Route path='/Comments' component={Comments}/>
        <Route path='/Blog' component={Blog}/>
        <Route path='/Newsletter' component={Newsletter}/>
<Route path='/Facebook' component={() => { 
     window.location.href = 'https://www.instagram.com'; 
     return null;
}}/>
 <Route path='/Instagram' component={() => { 
     window.location.href = 'https://www.instagram.com'; 
     return null;
}}/>
 <Route path='/Twitter' component={() => { 
     window.location.href = 'https://www.instagram.com'; 
     return null;
}}/>
<Route path='/GitHup' component={() => { 
     window.location.href = 'https://github.com/Inman2004/nykaa-imman/tree/main/Nykaa-E-Commerce'; 
     return null;
}}/>
<Route path='/Mail' component={() => { 
     window.location.href = 'mailto:nykaafashioncare'; 
     return null;
}}/>
      </Switch>
    </Router>
  );
  }

export default App;