import PropTypes from "prop-types";
import { Field } from "./input";

const FieldArray = PropTypes.arrayOf(Field).isRequired;

export const formularioProptype = {
  fields: FieldArray,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  values: PropTypes.object.isRequired
}