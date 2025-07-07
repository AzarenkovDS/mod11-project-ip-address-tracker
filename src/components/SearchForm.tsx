import { type FormEvent, useRef } from "react";
import type { SearchFormProps } from "../types";

function SearchForm({ onSearch }: SearchFormProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (value) {
      onSearch(value);
    }
  };

  return (
    <section className="form-section">
      <h1>IP Address Tracker</h1>
      <div>
        <form onSubmit={handleSubmit} aria-label="IP or domain search form">
          <input
            ref={inputRef}
            type="text"
            name="search"
            aria-label="Search"
            placeholder="Search for any IP address or domain"
            required
          />
          <button type="submit" aria-label="Submit">
            <img src="/icon-arrow.svg" alt="arrow icon" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
