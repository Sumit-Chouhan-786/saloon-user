import axios from "axios";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditAppointments() {
    const location = useLocation();
    const navigator = useNavigate();
    const appointment = location.state?.appointment;

    const [appointmentData, setAppointmentData] = React.useState({
        appointmentId: appointment?._id || "",
        staff: appointment?.staff || "",
        name: appointment?.name || "",
        Date: appointment?.Date
            ? new Date(appointment.Date).toISOString().split("T")[0]
            : "",
        startTime: appointment?.startTime || "",
        endTime: appointment?.endTime || "",
        description: appointment?.description || "",
        duration: appointment?.duration || "",
    });

    const handleClick = async () => {
        // const { email, appointmentId, date, startTime, endTime } = req.body;
        console.log("appointmentData", appointmentData);

        const res = await axios.put(
            "https://saloon-backend-ep2b.onrender.com/user/appointment/update",
            {
                email: localStorage.getItem("email"),
                appointmentId: appointmentData.appointmentId,
                date: appointmentData.Date,
                startTime: appointmentData.startTime,
                endTime: appointmentData.endTime,
                description: appointmentData.description,
                duration: appointmentData.duration,
            }
        );

        console.log("res", res);

        if (res.status === 200) {
            alert("Appointment updated successfully");
            navigator("/history");
        }
    };

    return (
        <>
            <div className="flex justify-center items-center lg:py-16 py-8 mb-10">
                <div className="w-[60vw] flex flex-col items-center justify-center gap-10">
                    <div>Book appointments</div>
                    <div>
                        <label className="input input-bordered flex items-center gap-2">
                            Staff name
                            <input
                                type="text"
                                value={appointmentData.staff}
                                readOnly
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Service
                            <input
                                type="text"
                                value={appointmentData.name}
                                readOnly
                            />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            Date
                            <input
                                type="date"
                                value={
                                    new Date(appointmentData.Date)
                                        .toISOString()
                                        .split("T")[0]
                                }
                                onChange={(e) => {
                                    const newDate = e.target.value;
                                    setAppointmentData((prev) => ({
                                        ...prev,
                                        Date: newDate,
                                    }));
                                    console.log("Updated Date:", newDate); // Confirm date updates
                                }}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Start Time
                            <input
                                type="time"
                                value={appointmentData.startTime}
                                onChange={(e) => {
                                    const durationInMinutes =
                                        appointmentData.duration
                                            ? parseInt(
                                                  appointmentData.duration,
                                                  10
                                              ) * 60
                                            : 0;

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

                                    setAppointmentData({
                                        ...appointmentData,
                                        startTime: e.target.value,
                                        endTime: `${endHours
                                            .toString()
                                            .padStart(2, "0")}:${minutesLeft
                                            .toString()
                                            .padStart(2, "0")}`,
                                    });
                                }}
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            End Time
                            <input
                                type="time"
                                value={appointmentData.endTime}
                                readOnly
                            />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            Description
                            <input
                                className="grow"
                                type="text"
                                placeholder="any description"
                                value={appointmentData.description}
                                onChange={(e) =>
                                    setAppointmentData({
                                        ...appointmentData,
                                        description: e.target.value,
                                    })
                                }
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            className="btn btn-success"
                            onClick={handleClick}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditAppointments;
