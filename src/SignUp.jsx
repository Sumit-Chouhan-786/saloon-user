import axios from "axios";
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = async () => {
        console.log(name, email, password, phone);

        const response = await axios.post(
            "https://saloon-backend-ep2b.onrender.com/user/signup",
            {
                name,
            email,
            password,
                phone,
            }
        );

        console.log("response", response);

        if (response.status === 200) {
            navigate("/login");
        } else {
            window.alert("error creating user");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center lg:py-16 py-8 mb-10">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>SignUp</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Name
                            <input
                                type="text"
                                className="grow"
                                placeholder="Hello"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>
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
                        <label className="input input-bordered flex items-center gap-2">
                            Phone
                            <input
                                type="text"
                                className="grow"
                                placeholder="1234567890"
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <Link to="/login">Go to Login</Link>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Success
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
