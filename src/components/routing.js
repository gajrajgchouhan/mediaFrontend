import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from "../App";
import {NotFoundPage}  from '../views/error'
export default function Routing(){
    return (<BrowserRouter>
        <Routes>
        <Route
        path="/"
        element={<Navigate to="/articles" replace />}
        />
          <Route path="/articles" element={<App />}>
          </Route>
          <Route path="/academics" element={<App />}>
          </Route>
          <Route path="/spotlight" element={<App />}>
          </Route>
          <Route path="/instilife" element={<App />}>
          </Route>
          <Route path='/opinion' element={<App />}/>
          <Route path='/scitech' element={<App />}/>
          <Route path='/:id' element={<App />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>

      </BrowserRouter>);
}