import "./App.css";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Addpost from "./components/Addpost";
import AllPost from "./pages/AllPost";
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
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Signup />
        <Login />
        <Addpost />
        <AllPost />
      </div>
    </ApolloProvider>
  );
}

export default App;
