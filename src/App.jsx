
import { useMemo, useState } from "react";

import seedOpportunities from "./data/seedOpportunities";

import Button from "./components/Button";
import Badge from "./components/Badge";
import OpportunityList from "./components/OpportunityList";
import OpportunityFilters from "./components/OpportunityFilters";
import AddOpportunityForm from "./components/AddOpportunityForm";

function App() {
  // Main opportunities data
  const [opportunities, setOpportunities] = useState(seedOpportunities);

  // Search and filter states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [savedOnly, setSavedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("date");

  // Saved opportunities
  const [savedIds, setSavedIds] = useState([]);

  // Demonstration states
  const [pageStatus, setPageStatus] = useState("ready");

  // Save or unsave an opportunity
  function handleToggleSave(id) {
    setSavedIds((previousIds) =>
      previousIds.includes(id)
        ? previousIds.filter((savedId) => savedId !== id)
        : [...previousIds, id]
    );
  }

  // Add a new opportunity
  function handleAddOpportunity(newOpportunity) {
    setOpportunities((previousOpportunities) => [
      newOpportunity,
      ...previousOpportunities,
    ]);

    setPageStatus("ready");
  }

  // Reset search and filters
  function handleResetFilters() {
    setSearch("");
    setCategory("All");
    setAvailableOnly(false);
    setSavedOnly(false);
    setSortBy("date");
  }

  // Apply all filters and sorting
  const filteredOpportunities = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    let results = opportunities.filter((opportunity) => {
      const matchesSearch =
        opportunity.title.toLowerCase().includes(searchTerm) ||
        opportunity.city.toLowerCase().includes(searchTerm);

      const matchesCategory =
        category === "All" || opportunity.category === category;

      const matchesAvailability =
        !availableOnly || opportunity.availableSeats > 0;

      const matchesSaved =
        !savedOnly || savedIds.includes(opportunity.id);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesAvailability &&
        matchesSaved
      );
    });

    // Sort the filtered results
    results = [...results].sort((a, b) => {
      if (sortBy === "title") {
        return a.title.localeCompare(b.title);
      }

      if (sortBy === "availableSeats") {
        return b.availableSeats - a.availableSeats;
      }

      return a.date.localeCompare(b.date);
    });

    return results;
  }, [
    opportunities,
    search,
    category,
    availableOnly,
    savedOnly,
    savedIds,
    sortBy,
  ]);

  // Count opportunities
  const totalOpportunities = opportunities.length;
  const availableOpportunities = opportunities.filter(
    (opportunity) => opportunity.availableSeats > 0
  ).length;

  const featuredOpportunities = opportunities.filter(
    (opportunity) => opportunity.featured
  ).length;

  // Loading demonstration
  if (pageStatus === "loading") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"></div>
          <h2 className="text-xl font-bold text-gray-900">
            Loading opportunities...
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please wait while opportunities are being loaded.
          </p>
          <Button
            variant="secondary"
            className="mt-5"
            onClick={() => setPageStatus("ready")}
          >
            Return to Explorer
          </Button>
        </div>
      </main>
    );
  }

  // Error demonstration
  if (pageStatus === "error") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-gray-50 p-6">
        <div
          role="alert"
          className="max-w-md rounded-2xl border border-red-200 bg-white p-8 text-center shadow-sm"
        >
          <h2 className="text-xl font-bold text-red-700">
            Something went wrong
          </h2>
          <p className="mt-3 text-sm text-gray-600">
            We could not load the opportunities. Please try again.
          </p>
          <Button
            className="mt-5"
            onClick={() => setPageStatus("ready")}
          >
            Try Again
          </Button>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-indigo-700 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-indigo-200">
              Discover • Connect • Grow
            </p>

            <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Rwanda Opportunities Explorer
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-indigo-100 md:text-base">
              Discover workshops, career events, training programs,
              business opportunities, and community activities across Rwanda.
            </p>
          </div>

          <a
            href="#add-opportunity"
            className="inline-flex w-fit items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-bold text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-700"
          >
            + Add Opportunity
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-10 px-6 py-10">
        {/* Statistics */}
        <section>
          <div className="mb-5">
            <h2 className="text-xl font-bold text-gray-900">
              Opportunity Overview
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              A quick overview of the opportunities available on the platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Total Opportunities</p>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                {totalOpportunities}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Available Opportunities</p>
              <p className="mt-2 text-3xl font-extrabold text-green-600">
                {availableOpportunities}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Featured Opportunities</p>
              <p className="mt-2 text-3xl font-extrabold text-indigo-600">
                {featuredOpportunities}
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-gray-500">Saved Opportunities</p>
              <p className="mt-2 text-3xl font-extrabold text-pink-600">
                {savedIds.length}
              </p>
            </div>
          </div>
        </section>

        {/* Demonstration controls */}
        <section className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-gray-600">
            Demo states:
          </span>

          <Button
            size="sm"
            variant="secondary"
            onClick={() => setPageStatus("loading")}
          >
            Show Loading
          </Button>

          <Button
            size="sm"
            variant="danger"
            onClick={() => setPageStatus("error")}
          >
            Show Error
          </Button>
        </section>

        {/* Filters */}
        <OpportunityFilters
          search={search}
          onSearchChange={setSearch}
          category={category}
          onCategoryChange={setCategory}
          availableOnly={availableOnly}
          onAvailableChange={setAvailableOnly}
          savedOnly={savedOnly}
          onSavedChange={setSavedOnly}
          sortBy={sortBy}
          onSortChange={setSortBy}
          onReset={handleResetFilters}
        />

        {/* Results */}
        <section>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Explore Opportunities
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Discover opportunities from different cities and categories.
              </p>
            </div>

            <Badge variant="info">
              {filteredOpportunities.length} results found
            </Badge>
          </div>

          {filteredOpportunities.length > 0 ? (
            <OpportunityList
              opportunities={filteredOpportunities}
              savedIds={savedIds}
              onToggleSave={handleToggleSave}
            />
          ) : (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-16 text-center">
              <h3 className="text-xl font-bold text-gray-800">
                No opportunities found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm text-gray-500">
                Try changing your search or filters to discover more
                opportunities.
              </p>

              <Button
                variant="secondary"
                className="mt-5"
                onClick={handleResetFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </section>

        {/* Add opportunity form */}
        <AddOpportunityForm onAddOpportunity={handleAddOpportunity} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm text-gray-500">
          Rwanda Opportunities Explorer © 2026. Built with React and
          Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
