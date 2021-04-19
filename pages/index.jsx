import { useState, useRef } from 'react';
import Results from '../components/Results';
import Shelf from '../components/Shelf';
import Context from '../components/Context';

const API_URL = 'https://openlibrary.org/search.json?limit=3&q=';

export default function Home() {
  const ref = useRef(null);
  const [{ loading, data, shelf }, setState] = useState({
    loading: false,
    data: [],
    shelf: [],
  });

  async function search(e) {
    e.preventDefault();

    const { value } = ref.current;
    if (!value.length) {
      return;
    }
    setState((p) => ({ ...p, loading: true }));
    const response = await fetch(`${API_URL}${value}`);
    const json = await response.json();
    setState((p) => ({ ...p, loading: false, data: json.docs }));
  }

  function addToShelf(book) {
    setState((p) => ({ ...p, shelf: [...p.shelf, book] }));
  }

  function removeFromShelf(book) {
    setState((p) => ({
      ...p,
      shelf: p.shelf.filter((b) => b.key !== book.key),
    }));
  }

  function inShelf(book) {
    return typeof shelf.find((b) => b.key === book.key) !== 'undefined';
  }

  return (
    <Context.Provider value={{ addToShelf, removeFromShelf, inShelf }}>
      <div className="container mx-auto my-8 space-y-4">
        <h1 className="text-3xl">Search</h1>
        <form onSubmit={search}>
          <input ref={ref} type="text" placeholder="Search term&hellip;" />
        </form>
        <Results data={data} loading={loading} />
        <hr />
        <Shelf shelf={shelf} />
      </div>
    </Context.Provider>
  );
}
