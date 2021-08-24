import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import Header from "../components/Header";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage("books", []);
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <Switch>
            <Route
              render={(props) => (
                <BooksList {...props} books={books} setBooks={setBooks} />
              )}
              path="/"
              exact={true}
            />
            <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
