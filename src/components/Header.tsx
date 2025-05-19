
import React from "react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onSearch, searchQuery }) => {
  return (
    <header className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b mb-6 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="rounded-md bg-primary w-8 h-8 flex items-center justify-center text-primary-foreground font-bold">
              HN
            </div>
            <h1 className="text-xl font-bold">Hacker News Reader</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-full md:max-w-xs">
              <SearchBar onSearch={onSearch} value={searchQuery} />
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
