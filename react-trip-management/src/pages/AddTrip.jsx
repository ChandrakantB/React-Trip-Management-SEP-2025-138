import { useNavigate } from "react-router-dom";
import TripForm from "../components/TripForm.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { initialTrips } from "../data/trips.js";

export default function AddTrip() {
  const [trips, setTrips] = useLocalStorage("trips", initialTrips);
  const navigate = useNavigate();

  const handleSubmit = (data) => {
    const id = trips.length ? Math.max(...trips.map(t => t.id)) + 1 : 1;
    setTrips([...trips, { id, ...data }]);
    navigate("/trips");
  };

  return (
    <div className="space-y-4">
      <TripForm mode="create" onSubmit={handleSubmit} />
    </div>
  );
}
