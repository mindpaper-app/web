import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

import Login from "./pages/Login"
import Register from "./pages/Register"

import SelectNote from "./pages/SelectNote"
import NoteEditor from "./pages/NoteEditor"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="app" element={<ProtectedRoute />}>
            <Route index element={<SelectNote />} />
            <Route path=":id" element={<NoteEditor />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
