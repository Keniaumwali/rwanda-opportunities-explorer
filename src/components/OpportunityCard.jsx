
import Button from "./Button";
import Badge from "./Badge";

function OpportunityCard({ opportunity, isSaved, onToggleSave }) {
  const {
    id,
    title,
    category,
    city,
    date,
    description,
    capacity,
    availableSeats,
    price,
    featured,
  } = opportunity;

  const formattedDate = new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  const isFullyBooked = availableSeats === 0;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      {/* Opportunity badges */}
      <div className="mb-4 flex flex-wrap gap-2">
        <Badge variant="default">{category}</Badge>

        {featured && (
          <Badge variant="info">Featured</Badge>
        )}

        {price === 0 && (
          <Badge variant="success">Free</Badge>
        )}

        {isFullyBooked && (
          <Badge variant="danger">Fully booked</Badge>
        )}
      </div>

      {/* Opportunity information */}
      <div className="flex-1">
        <h3 className="mb-2 text-xl font-bold text-gray-900">
          {title}
        </h3>

        <p className="mb-3 text-sm font-medium text-indigo-600">
          {city}, Rwanda
        </p>

        <p className="mb-4 text-sm leading-6 text-gray-600">
          {description}
        </p>

        <div className="space-y-2 border-t border-gray-100 pt-4 text-sm text-gray-600">
          <p>
            <span className="font-semibold text-gray-800">
              Date:
            </span>{" "}
            {formattedDate}
          </p>

          <p>
            <span className="font-semibold text-gray-800">
              Available places:
            </span>{" "}
            {availableSeats} / {capacity}
          </p>

          <p>
            <span className="font-semibold text-gray-800">
              Price:
            </span>{" "}
            {price === 0
              ? "Free"
              : `${price.toLocaleString("en-US")} RWF`}
          </p>
        </div>
      </div>

      {/* Save button */}
      <div className="mt-5 border-t border-gray-100 pt-4">
        <Button
          variant={isSaved ? "secondary" : "primary"}
          onClick={() => onToggleSave(id)}
          className="w-full"
        >
          {isSaved ? "♥ Unsave Opportunity" : "♡ Save Opportunity"}
        </Button>
      </div>
    </article>
  );
}

export default OpportunityCard;
