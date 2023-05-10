import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Error from "./Error";
import App from "./App";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router