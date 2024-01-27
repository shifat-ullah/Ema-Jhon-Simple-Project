import { Outlet } from "react-router-dom";
import Header from "../headers/Header";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Shop></Shop> */}
        </div>
    );
};

export default Home;