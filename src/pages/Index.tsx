
import React, { useState } from "react";
import Header from "@/components/Header";
import StoriesList from "@/components/StoriesList";
import { useDebounce } from "@/hooks/useDebounce";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 300);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} searchQuery={searchQuery} />
      <main className="flex-1 container mx-auto px-4 pb-10">
        <div className="mb-4">
          <h2 className="text-2xl font-bold">
            {debouncedQuery ? "Search Results" : "Today's Top Stories"}
          </h2>
          <p className="text-muted-foreground">
            {debouncedQuery
              ? `Showing results for "${debouncedQuery}"`
              : "Latest stories from Hacker News"}
          </p>
        </div>
        <StoriesList searchQuery={debouncedQuery} />
      </main>
      <footer className="py-6 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            Data provided by{" "}
            <a
              href="https://hn.algolia.com/api"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Hacker News Algolia API
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
