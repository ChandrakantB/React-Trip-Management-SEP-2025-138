import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import TripForm from "../components/TripForm.jsx";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { initialTrips } from "../data/trips.js";

export default function EditTrip() {
  const { id } = useParams();
  const [trips, setTrips] = useLocalStorage("trips", initialTrips);
  const navigate = useNavigate();

  const trip = useMemo(() => trips.find(t => String(t.id) === String(id)), [trips, id]);

  if (!trip) {
    return <div className="rounded-xl border bg-white p-6">Trip not found.</div>;
  }

  const handleSubmit = (data) => {
    setTrips(prev => prev.map(t => (t.id === trip.id ? { ...t, ...data } : t)));
    navigate("/trips");
  };

  return <TripForm mode="edit" initialValues={trip} onSubmit={handleSubmit} />;
}
