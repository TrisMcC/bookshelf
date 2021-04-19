import PropTypes from 'prop-types';
import Cover from './Cover';

export default function Book({ book }) {
  return (
    <>
      <div className="h-cover w-cover overflow-hidden">
        <Cover book={book} />
      </div>
      <div
        title={book.title}
        className="ml-1 mt-1 whitespace-nowrap overflow-hidden overflow-ellipsis"
      >
        {book.title}
      </div>
      <div
        title={book.author_name[0]}
        className="ml-1 whitespace-nowrap overflow-hidden overflow-ellipsis"
      >
        {book.author_name[0]}
      </div>
    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author_name: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
