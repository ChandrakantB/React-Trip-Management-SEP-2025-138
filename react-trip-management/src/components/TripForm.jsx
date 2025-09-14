import { useForm } from "react-hook-form";

export default function TripForm({ onSubmit, initialValues = {}, mode = "create" }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border max-w-xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">{mode === "create" ? "Create New Trip" : "Edit Trip"}</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Destination</label>
          <input
            {...register("destination", { required: "Destination is required" })}
            placeholder="e.g., Jaipur"
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination.message}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Start Date</label>
            <input type="date" {...register("startDate", { required: "Start date is required" })} className="w-full border rounded-lg px-3 py-2" />
            {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">End Date</label>
            <input type="date" {...register("endDate", { required: "End date is required" })} className="w-full border rounded-lg px-3 py-2" />
            {errors.endDate && <p className="text-red-500 text-sm mt-1">{errors.endDate.message}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Price ($)</label>
          <input
            type="number"
            {...register("price", { required: "Price is required", min: { value: 1, message: "Must be > 0" } })}
            placeholder="e.g., 1500"
            className="w-full border rounded-lg px-3 py-2"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Status</label>
          <select {...register("status", { required: "Status is required" })} className="w-full border rounded-lg px-3 py-2">
            <option value="PLANNED">Planned</option>
            <option value="ONGOING">Ongoing</option>
            <option value="COMPLETED">Completed</option>
          </select>
          {errors.status && <p className="text-red-500 text-sm mt-1">{errors.status.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Notes</label>
          <textarea {...register("notes")} placeholder="Any details..." className="w-full border rounded-lg px-3 py-2" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
          {mode === "create" ? "Add Trip" : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
