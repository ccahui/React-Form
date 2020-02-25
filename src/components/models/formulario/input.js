import PropTypes from "prop-types";

export const Field = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});


export const inputProptype = {
  field: Field,
  value: PropTypes.string.isRequired,
  onChange:PropTypes.func.isRequired,
}

export const inputInvalidateProptype = {
  ...inputProptype,
  error: PropTypes.string.isRequired,
}
