import PropTypes from 'prop-types';
import Book from './Book';
import SearchAction from './SearchAction';

export default function Results({ data, loading }) {
  if (loading) {
    return <>Loading&hellip;</>;
  }

  return (
    <div className="grid grid-cols-3 gap-8 text-sm">
      {data.map((row) => (
        <div key={row.key}>
          <Book book={row} />
          <div className="mt-1">
            <SearchAction book={row} />
          </div>
        </div>
      ))}
    </div>
  );
}

Results.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({ key: PropTypes.string }))
    .isRequired,
  loading: PropTypes.bool.isRequired,
};
