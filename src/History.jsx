import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function History() {
    const navigator = useNavigate();
    const [appointments, setAppointments] = useState([]);
    const [oldAppointments, setOldAppointments] = useState([]);
    const [cancelledAppointments, setCancelledAppointments] = useState([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await axios.get(
                "http://localhost:3000/user/appointments",
                {
                    headers: {
                        email: localStorage.getItem("email"),
                    },
                }
            );

            console.log("response", response.data.appointments);
            setAppointments(response.data.appointments);

            const upcoming = response.data.appointments.filter(
                (appointment) => {
                    const date = new Date(appointment.Date);
                    const currentDate = new Date();

                    return (
                        date > currentDate && appointment.status !== "cancelled"
                    );
                }
            );

            const old = response.data.appointments.filter((appointment) => {
                const date = new Date(appointment.Date);
                const currentDate = new Date();

                return date < currentDate && appointment.status !== "cancelled";
            });

            const cancelled = response.data.appointments.filter(
                (appointment) => {
                    return appointment.status === "cancelled";
                }
            );

            setUpcomingAppointments(upcoming);
            setCancelledAppointments(cancelled);
            setOldAppointments(old);
        };

        fetchAppointments();
    }, []);

    const handleCancel = async (appointment) => {
        const response = await axios.put(
            `http://localhost:3000/user/appointment/cancel`,
            {
                email: localStorage.getItem("email"),
                appointmentId: appointment._id,
            }
        );

        console.log("response", response);

        if (response.status === 200) {
            window.alert("Appointment cancelled successfully");
            window.location.reload();
        } else {
            window.alert("Error cancelling appointment");
        }
    };

    return (
        <>
            <div className="flex items-center justify-center flex-col h-[100vh]">
                <div className="w-[70vw] flex flex-col items-center justify-center gap-10">
                    <div>All appointments history</div>
                    <div>
                        <div>Upcoming</div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Staff</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upcomingAppointments.map((appointment) => (
                                        <tr key={appointment._id}>
                                            <td>{appointment._id}</td>
                                            <td>{appointment.Date}</td>
                                            <td>{appointment.startTime}</td>
                                            <td>{appointment.endTime}</td>
                                            <td>{appointment.staff}</td>
                                            <td>
                                                <button
                                                    className="btn btn-success"
                                                    onClick={() => {
                                                        navigator(
                                                            "/edit-appointment",
                                                            {
                                                                state: {
                                                                    appointment,
                                                                },
                                                            }
                                                        );
                                                    }}
                                                >
                                                    Reschedule
                                                </button>
                                                <button
                                                    className="btn btn-danger"
                                                    onClick={() => {
                                                        handleCancel(
                                                            appointment
                                                        );
                                                    }}
                                                >
                                                    Cancel
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div>old</div>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Date</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Staff</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {oldAppointments.map((appointment) => (
                                        <tr key={appointment._id}>
                                            <td>{appointment._id}</td>
                                            <td>{appointment.Date}</td>
                                            <td>{appointment.startTime}</td>
                                            <td>{appointment.endTime}</td>
                                            <td>{appointment.staff}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div>Cancelled</div>
                        <div>
                            {/*  where appointment . status is cancelled */}

                            <div className="overflow-x-auto">
                                <table className="table">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Date</th>
                                            <th>Start Time</th>
                                            <th>End Time</th>
                                            <th>Staff</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cancelledAppointments.map(
                                            (appointment) => (
                                                <tr key={appointment._id}>
                                                    <td>{appointment._id}</td>
                                                    <td>{appointment.Date}</td>
                                                    <td>
                                                        {appointment.startTime}
                                                    </td>
                                                    <td>
                                                        {appointment.endTime}
                                                    </td>
                                                    <td>{appointment.staff}</td>
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;
