import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PhaDo from "../components/Services/phado";
import Thumua from "../components/Services/thumua";
import TieuHuyHoSo from "../components/Services/tieuhuyhoso";
import XuLyChatThai from "../components/Services/xulychatthai";
import XuLyChatThaiThuyTinh from "../components/Services/xulychatthaithuytinh";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/phado", element: <PhaDo /> },
      { path: "/thumua", element: <Thumua /> },
      { path: "/tieuhuyhoso", element: <TieuHuyHoSo /> },
      { path: "/xulychatthai", element: <XuLyChatThai /> },
      { path: "/xulychatthaithuytinh", element: <XuLyChatThaiThuyTinh /> },
    ],
  },
]);
