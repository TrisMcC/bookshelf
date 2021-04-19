import { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';
import Button from './Button';

export default function SearchAction({ book }) {
  const { addToShelf, inShelf } = useContext(Context);
  if (inShelf(book)) {
    return (
      <div className="text-trueGray-400 leading-[1.375rem] text-xs">
        Already in bookshelf
      </div>
    );
  }

  return <Button onClick={() => addToShelf(book)}>Add</Button>;
}

SearchAction.propTypes = {
  book: PropTypes.objectOf(PropTypes.any).isRequired,
};
