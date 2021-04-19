import { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Book from './Book';
import Button from './Button';

export default function Shelf({ shelf }) {
  const { removeFromShelf } = useContext(Context);

  if (!shelf.length) {
    return (
      <div>
        <h1 className="text-3xl">Bookshelf</h1>
        <p className="mt-4 italic text-trueGray-400">
          There are no books in your bookshelf.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl">Bookshelf</h1>
      <div className="grid grid-cols-3 gap-8 mt-4 text-sm">
        {shelf.map((book) => (
          <div key={book.key}>
            <Book book={book} />
            <div className="mt-1">
              <Button onClick={() => removeFromShelf(book)}>Remove</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Shelf.propTypes = {
  shelf: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
    })
  ).isRequired,
};
