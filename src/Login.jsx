import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = async () => {
        const response = await axios.post(
            "https://saloon-backend-ep2b.onrender.com/user/login",
            {
                email,
                password,
            }
        );

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
            <div className="flex justify-center items-center lg:py-16 py-8 mb-10 bg-black">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div className="text-white text-[50px] tracking-[0.5px] !leading-[135%]">Login</div>
                    <div className="w-full max-w-[400px] flex flex-col gap-4">
                        <label className="input input-bordered flex items-center gap-2">
                            Email
                            <input
                                type="text"
                                className="grow outline-none"
                                placeholder="a@a.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Password
                            <input
                            
                                type="text"
                                className="grow outline-none"
                                placeholder="********"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn transition-all duration-300 border-white text-white hover:text-yellow-400 hover:border-yellow-400"
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
