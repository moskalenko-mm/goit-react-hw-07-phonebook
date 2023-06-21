import css from '../Filter/Filter.module.css';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onInput={event => dispatch(addFilter(event.target.value))}
      />
    </label>
  );
};

export default Filter;
