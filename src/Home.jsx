import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleAppointment = () => {
        navigate("/appointments");
    };

    const handleHistory = () => {
        navigate("/history");
    };

    return (
        <>
            <div className="flex  justify-center items-center h-[100vh]">
                <div className="w-[50vw] flex items-center justify-center gap-10">
                    <button
                        className="btn btn-primary"
                        onClick={handleAppointment}
                    >
                        Book appintments
                    </button>
                    <button className="btn btn-primary" onClick={handleHistory}>
                        History
                    </button>
                </div>
            </div>
        </>
    );
}

export default Home;
