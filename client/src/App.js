import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Addpost from "./components/Addpost";
import AllPost from "./pages/AllPost";
import Profile from "./pages/Profile";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header>
            <Nav></Nav>
          </header>
          <Signup />
          <Login />
          <Addpost />
          <Routes>
            <Route path="/" element={<AllPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="*"
              element={
                <h1 className="text-center text-danger mt-5">WRONG PAGE!</h1>
              }
            />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
