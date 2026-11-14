
function OpportunityFilters({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  availableOnly,
  onAvailableChange,
  savedOnly,
  onSavedChange,
  sortBy,
  onSortChange,
  onReset,
}) {
  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-900">
          Find Opportunities
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          Search and filter opportunities to find what interests you.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Search */}
        <div>
          <label
            htmlFor="opportunity-search"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Search
          </label>

          <input
            id="opportunity-search"
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by title or city..."
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {/* Category */}
        <div>
          <label
            htmlFor="category-filter"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Category
          </label>

          <select
            id="category-filter"
            value={category}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="All">All Categories</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Community">Community</option>
            <option value="Career">Career</option>
          </select>
        </div>

        {/* Sorting */}
        <div>
          <label
            htmlFor="sort-filter"
            className="mb-2 block text-sm font-semibold text-gray-700"
          >
            Sort By
          </label>

          <select
            id="sort-filter"
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          >
            <option value="date">Date (Earliest First)</option>
            <option value="title">Title (A–Z)</option>
            <option value="availableSeats">Available Places</option>
          </select>
        </div>
      </div>

      {/* Checkbox filters */}
      <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:gap-6">
        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={availableOnly}
            onChange={(event) => onAvailableChange(event.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          Available opportunities only
        </label>

        <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={savedOnly}
            onChange={(event) => onSavedChange(event.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          Saved opportunities only
        </label>

        <button
          type="button"
          onClick={onReset}
          className="text-left text-sm font-semibold text-indigo-600 transition hover:text-indigo-800 sm:ml-auto"
        >
          Reset Filters
        </button>
      </div>
    </section>
  );
}

export default OpportunityFilters;
