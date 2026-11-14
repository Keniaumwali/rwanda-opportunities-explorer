
import { useState } from "react";
import Button from "./Button";

const initialFormData = {
  title: "",
  category: "Technology",
  city: "Kigali",
  date: "",
  description: "",
  capacity: "",
  price: "0",
};

function AddOpportunityForm({ onAddOpportunity }) {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const title = formData.title.trim();
    const description = formData.description.trim();
    const capacity = Number(formData.capacity);
    const price = Number(formData.price);

    if (!title || !description || !formData.date) {
      setError("Please complete all required fields.");
      return;
    }

    if (!Number.isInteger(capacity) || capacity < 1) {
      setError("Capacity must be a whole number greater than zero.");
      return;
    }

    if (!Number.isFinite(price) || price < 0) {
      setError("Price cannot be negative.");
      return;
    }

    const selectedDate = new Date(`${formData.date}T00:00:00`);

    if (Number.isNaN(selectedDate.getTime())) {
      setError("Please enter a valid date.");
      return;
    }

    const newOpportunity = {
      id: Date.now(),
      title,
      category: formData.category,
      city: formData.city,
      date: formData.date,
      description,
      capacity,
      availableSeats: capacity,
      price,
      featured: false,
    };

    onAddOpportunity(newOpportunity);
    setFormData(initialFormData);
    setError("");
  }

  return (
    <section
      id="add-opportunity"
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          Add a New Opportunity
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Share an event, workshop, training, or community opportunity.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* Title */}
          <div className="md:col-span-2">
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Opportunity Title
            </label>

            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter opportunity title"
              required
              maxLength={100}
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="new-category"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Category
            </label>

            <select
              id="new-category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Community">Community</option>
              <option value="Career">Career</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label
              htmlFor="new-city"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              City
            </label>

            <select
              id="new-city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            >
              <option value="Kigali">Kigali</option>
              <option value="Musanze">Musanze</option>
              <option value="Huye">Huye</option>
              <option value="Rubavu">Rubavu</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label
              htmlFor="new-date"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Date
            </label>

            <input
              id="new-date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Capacity */}
          <div>
            <label
              htmlFor="capacity"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Total Capacity
            </label>

            <input
              id="capacity"
              name="capacity"
              type="number"
              min="1"
              step="1"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="e.g. 50"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Price (RWF)
            </label>

            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="1"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-semibold text-gray-700"
            >
              Description
            </label>

            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe this opportunity..."
              rows="4"
              required
              maxLength={500}
              className="w-full resize-y rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
            />
          </div>
        </div>

        {/* Validation message */}
        {error && (
          <p
            role="alert"
            className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        <div className="flex justify-end">
          <Button type="submit">
            Add Opportunity
          </Button>
        </div>
      </form>
    </section>
  );
}

export default AddOpportunityForm;
