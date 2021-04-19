import PropTypes from 'prop-types';

export default function Cover({ book }) {
  if (book.cover_i) {
    return (
      <img
        alt={book.title}
        className="object-contain object-top w-full h-full"
        src={`http://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
      />
    );
  }

  return (
    <div className="w-cover h-cover border border-trueGray-500 bg-blue-100 p-2">
      <div className="text-center text-lg">{book.title}</div>
      <div className="text-center mt-8">By {book.author_name[0]}</div>
    </div>
  );
}

Cover.propTypes = {
  book: PropTypes.shape({
    cover_i: PropTypes.number,
    title: PropTypes.string,
    author_name: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
