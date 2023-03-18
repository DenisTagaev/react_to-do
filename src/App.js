import { Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Task from "./components/tasks/tasks";
import Form from "./components/forms/form";
import Help from "./components/help/Help";
import NotFound from "./components/not-found/Not-found";
import RemoveHelper from "./components/help/remove/remove-helper";
import AddHelper from "./components/help/add/add-helper";
import ChangeHelper from "./components/help/change/change-helper";

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            index
            element={
              <Task
                className="tasksContainer"
              />
            }
          />
          <Route
            path="/add"
            element={
              <Form className="formContainer"/>
            }
          />
          <Route path="/help" element={<Help />}>
            <Route path="add" element={<AddHelper />} />
            <Route path="remove" element={<RemoveHelper />} />
            <Route path="change" element={<ChangeHelper />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
