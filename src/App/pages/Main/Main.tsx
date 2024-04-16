import {Outlet} from "react-router-dom";

const Main =() => {
    return(
        <>
        <h1>Header</h1>
            <Outlet/>
        </>
    )
}
export default Main
