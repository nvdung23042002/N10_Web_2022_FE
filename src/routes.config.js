import Home from "./Pages/Home";
import Booking from "./Pages/Booking";
import Layout from "./Layout";
import Payment from "./Pages/Payment"
import MovieDetails from "./Pages/MovieDetails";
import Ticket from "./Pages/Ticket";
import Seat from "./Pages/Booking/Seat"
import Login from "./Pages/Login";
import Authentication from "./guards/Authen";
import Signup from "./Pages/signup";
import Admin from "./Pages/Admin";
import AddFilm from "./Pages/Admin/FilmManagement/AddFilm"
import LayoutAdmin from "./LayoutAdmin";
const routes = [
  {
    path: "/booking",
    element:<Authentication><Layout component={Booking} /></Authentication> ,
  },
  {
    path: "/payment",
    element: <Layout component={Payment} />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/movie-details",
    element: <Layout component={MovieDetails} />
  },
  {
    path: "/ticket",
    element: <Layout component={Ticket} />
  },
  {
    path: "/booking/seat",
    element: <Layout component={Seat} />
  },
  {
    path: "/admin",
    element: <LayoutAdmin component={Admin} />
  },
  {
    path: "/admin/add-film",
    element: <LayoutAdmin component={AddFilm} />
  },
  {
    path: "/admin/edit-film/:id",
    element: <LayoutAdmin component={AddFilm} />
  },
  {
    path: "/",
    element: <Layout component={Home} />,
    label: "Home"
  },
  {
    path: "/login",
    element: <Login />,
    label: "Login"
  }

];
export default routes;
