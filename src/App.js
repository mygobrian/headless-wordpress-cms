import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    axiosheadlesswordpress();
  }, []);

  const axiosheadlesswordpress = async () => {
    await axios
      .get(
        "https://headlessio.000webhostapp.com/wp-json/wp/v2/pages/14/?_fields=acf"
      )
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        console.log(data);
        setPage(data);
      })
      .catch((error) => console.log(error));
  };

  if (!page) {
    return "Loading...";
  }

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page.acf.logo.url} className="App-logo" alt="logo" />
        <h1>
          {page.acf.welcome_slogan} <br />
          <br />
          <span className="underlined underline-clip">
            {page.acf.sub_slogan}
          </span>
        </h1>
      </header>
    </div>
  );
}

export default App;
