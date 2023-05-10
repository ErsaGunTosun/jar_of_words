import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, [])
    return (
        <div>Error</div>
    )
}

export default Error