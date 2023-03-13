import React from 'react';
import {Routes, Route} from "react-router-dom";
import TaskPage from "./pages/TasksPage/TaskPage";
import SingleTaskPage from "./pages/SingleTaskPage/SingleTaskPage";
import Layout from "./components/Layout/Layout";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage";

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route index element={<TaskPage/>}/>
            <Route path=':id' element={<SingleTaskPage />} />
            <Route path='create' element={<CreateTaskPage/>}/>
        </Route>
    </Routes>
  );
}

export default App;
