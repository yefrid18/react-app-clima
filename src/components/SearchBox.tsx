import { FormEvent, useRef, useEffect, useState } from "react";

export const SearchBox = ({
  handleSearch,
}: {
  handleSearch: (e: FormEvent<HTMLFormElement>, CITY: String) => void;
}) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: FormEvent) => {
    const { value } = e.target as HTMLInputElement;
    setSearch(value);
  };

  useEffect(() => {
    inputRef.current!.focus();
  }, []);

  return (
    <form
      id="form"
      onSubmit={(e) => {
        handleSearch(e, search);
        setSearch("");
      }}
    >    
      <label htmlFor="search"></label>
      <input
        ref={inputRef}
        autoComplete="off"
        id="search"
        type="search"
        className="absolute w-72 h-8 p-3 rounded-full mt-9"
        placeholder="Buscar ubicación..."
        onChange={handleChange}
        value={search}
      />
    </form>
  );
};
