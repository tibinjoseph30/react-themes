import { Route, Routes } from "react-router-dom";
import ThemeOnePage from "./pages/ThemeOnePage";

const AppRouter = ()=> {
    return (
        <Routes>
            <Route path="/" element={<ThemeOnePage/>}/>
        </Routes>
    )
}

export default AppRouter;