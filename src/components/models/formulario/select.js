import PropTypes from "prop-types";
import { inputProptype } from "./input";

const Option = PropTypes.string.isRequired;
const OptionArray = PropTypes.arrayOf(Option).isRequired;

const fieldSelect = PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  values: OptionArray,
});

export const selectProptype = {
  ...inputProptype,
  field: fieldSelect
}

export const selectInvalidateProptype = {
  ...selectProptype,
  error: PropTypes.string.isRequired
}
export const optionsProptype = OptionArray;