import React, { useState } from "react";
import Landing from "./components/Landing";
import Auth from "./components/Auth/AuthIndex";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          {/* <Landing /> */}
          <Route exact path='/' component={Landing} />
          <Route exact path='/auth' component={Auth} />
        </div>
      </Router>
    </Provider>
  );
}

// App.propTypes = {
//   name: PropTypes.string
// };

// // Same approach for defaultProps too
// App.defaultProps = {
//   name: "Alan"
// };

export default App;
