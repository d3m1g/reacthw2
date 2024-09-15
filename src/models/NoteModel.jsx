import PropTypes from 'prop-types';

function NoteModel() {
 return PropTypes.shape({
  id: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired
 });
}

export default NoteModel;