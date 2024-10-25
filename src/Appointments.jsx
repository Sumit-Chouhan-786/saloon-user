import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Appointments() {
    const navigate = useNavigate();
    const [service, setService] = useState("");
    const [allServices, setAllServices] = useState([]);
    const [allStaff, setAllStaff] = useState([]);
    const [staffId, setStaffId] = useState("");
    const [loading, setLoading] = useState(false);

    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!localStorage.getItem("email")) {
            navigate("/login");
        }

        const fetchData = async () => {
            setLoading(true);
            const res = await axios.get(
                "http://localhost:3000/user/services-staff",
                {
                    headers: {
                        email: localStorage.getItem("email"),
                    },
                }
            );

            console.log("res", res);

            if (res.status === 200) {
                setAllServices(res.data.services);
                setAllStaff(res.data.staffs);
            }

            setLoading(false);

            console.log("res ", res.data);
        };

        fetchData();
    }, []);

    const handleClick = async () => {
        const response = await axios.post(
            "http://localhost:3000/user/appointment",
            {
                sName: service,
                email: localStorage.getItem("email"),
                staffId,
                date,
                startTime,
                endTime,
                description,
                price: 100,
            }
        );

        console.log("response", response);

        if (response.status === 200) {
            window.alert("Appointment booked");
            navigate("/history");
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Book appintments</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Staff name
                            <select
                                className="grow"
                                onChange={(e) => {
                                    setStaffId(e.target.value);
                                }}
                            >
                                <option value="">Select Staff</option>
                                {!loading &&
                                    allStaff?.map((staff) => (
                                        <option
                                            key={staff._id}
                                            value={staff._id}
                                        >
                                            {staff.name}
                                        </option>
                                    ))}
                            </select>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Service
                            <select
                                className="grow"
                                onChange={(e) => setService(e.target.value)}
                            >
                                <option value="">Select Service</option>
                                {!loading &&
                                    allServices?.map((service) => (
                                        <option
                                            key={service._id}
                                            value={service.name}
                                        >
                                            {service.name}
                                        </option>
                                    ))}
                            </select>
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Date
                            <input
                                type="date"
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Start Time
                            <input
                                type="time"
                                onChange={(e) => {
                                    const selectedService = allServices.find(
                                        (s) => s.name === service
                                    );
                                    const durationInMinutes = selectedService
                                        ? parseInt(
                                              selectedService.duration,
                                              10
                                          ) * 60
                                        : 0;

                                    console.log(
                                        "Duration in minutes:",
                                        durationInMinutes
                                    );

                                    setStartTime(e.target.value);

                                    const [hours, minutes] = e.target.value
                                        .split(":")
                                        .map(Number);
                                    const totalMinutes =
                                        hours * 60 +
                                        minutes +
                                        durationInMinutes;

                                    const endHours =
                                        Math.floor(totalMinutes / 60) % 24;
                                    const minutesLeft = totalMinutes % 60;

                                    setEndTime(
                                        `${endHours
                                            .toString()
                                            .padStart(2, "0")}:${minutesLeft
                                            .toString()
                                            .padStart(2, "0")}`
                                    );
                                }}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            End Time
                            <input type="time" value={endTime} readOnly />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Description
                            <input
                                className="grow"
                                type="text"
                                placeholder="any description"
                                onChange={(e) => setDescription(e.target.value)}
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

export default Appointments;
