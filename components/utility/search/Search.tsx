import { useState } from 'react';

export interface ISearch {}

export const Search: React.FC<ISearch> = () => {
  const [searchTerm, setSearchTerm] = useState<string>();

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        alert(`Action requested. Search for term: ${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m feeling lucky
        </button>
      </div>
    </form>
  );
};
