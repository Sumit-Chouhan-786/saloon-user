import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        const response = await axios.post("http://localhost:3000/user/login", {
            email,
            password,
        });

        console.log("response", response);

        if (response.status === 200) {
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            navigate("/home");
        } else {
            window.alert("Invalid email or password");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Login</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input
                                type="text"
                                className="grow"
                                placeholder="a@a.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Password
                            <input
                                type="text"
                                className="grow"
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
