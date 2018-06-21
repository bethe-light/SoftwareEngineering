import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const BasicExample = () => (
//     <Router>
//         <div>
//             <ul>
//                 <li>
//                     <Link to="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link to="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link to="/topics">Topics</Link>
//                 </li>
//             </ul>
//             <hr />
//
//             <Route exact path="/" component={Home} />
//             <Route path="/about" component={About} />
//             <Route path="/topics" component={Topics} />
//         </div>
//     </Router>
// );
//
// const Home = () => (
//     <div>
//         <h2>Home</h2>
//     </div>
// );
//
// const About = () => (
//     <div>
//         <h2>About</h2>
//     </div>
// );
//
// const Topics = ({ match }) => (
//     <div>
//         <h2>Topics</h2>
//         <ul>
//             <li>
//                 <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/components`}>Components</Link>
//             </li>
//             <li>
//                 <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//             </li>
//         </ul>
//
//         <Route path={`${match.url}/:topicId`} component={Topic} />
//         <Route
//             exact
//             path={match.url}
//             render={() => <h3>Please select a topic.</h3>}
//         />
//     </div>
// );
//
// const Topic = ({ match }) => (
//     <div>
//         <h3>{match.params.topicId}</h3>
//     </div>
// );
const Header = () =>
<header className="header">
    <nav>
        <ul id="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/logout">Logout</Link></li>
        </ul>
    </nav>
</header>;
const Footer = ()=>
    <footer>
        2018 @copy Soft Engineer by React.
    </footer>;
const BaseLayout = () => (
    <div className="base">
        <Header/>
        <div className="container">
            <Route path="/" exact component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/logout" component={LogoutPage} />
        </div>
        <Footer/>
    </div>
);

const HomePage = ()  => <div>This is HomePage.</div>;
const LogoutPage = () => <div>This is LogoutPage</div>
const LoginPage = () => <div>This is a Login Page</div>;
const App = () =>
        <Router>
            <BaseLayout/>
        </Router>;

export default App;
