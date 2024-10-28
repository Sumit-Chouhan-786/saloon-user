import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function History() {
    const navigator = useNavigate();
    const [oldAppointments, setOldAppointments] = useState([]);
    const [cancelledAppointments, setCancelledAppointments] = useState([]);
    const [upcomingAppointments, setUpcomingAppointments] = useState([]);
    useEffect(() => {
        const fetchAppointments = async () => {
            const response = await axios.get(
                "https://saloon-backend-ep2b.onrender.com/user/appointments",
                {
                    headers: {
                        email: localStorage.getItem("email"),
                    },
                }
            );

            console.log("response", response.data.appointments);

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
            `https://saloon-backend-ep2b.onrender.com/user/appointment/cancel`,
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
        <div className="flex items-center justify-center flex-col bg-white text-black font-medium py-16">
          <div className="w-[70vw] flex flex-col items-center justify-center gap-10">
            <div className="text-2xl font-abril">All appointments history</div>
            <div className="w-full">
              <div>Upcoming</div>
              <div className="overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead className="text-black">
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
                      <tr className="text-black" key={appointment._id}>
                        <td>{appointment._id}</td>
                        <td>{appointment.Date}</td>
                        <td>{appointment.startTime}</td>
                        <td>{appointment.endTime}</td>
                        <td>{appointment.staff}</td>
                        <td>
                          <button
                            className="btn btn-success"
                            onClick={() => {
                              navigator("/edit-appointment", {
                                state: {
                                  appointment,
                                },
                              });
                            }}
                          >
                            Reschedule
                          </button>
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              handleCancel(appointment);
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
            <div className="w-full">
              <div>old</div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="text-black">
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
                      <tr className="text-black"    key={appointment._id}>
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
            <div className="w-full">
              <div>Cancelled</div>
              <div>
                {/*  where appointment . status is cancelled */}
                <div className="overflow-x-auto">
                  <table className="table">
                    {/* head */}
                    <thead className="text-black">
                      <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Staff</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cancelledAppointments.map((appointment) => (
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
            </div>
          </div>
        </div>
      </>
    );
}

export default History;
