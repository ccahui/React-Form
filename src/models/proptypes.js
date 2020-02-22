import PropTypes from "prop-types";

export const citaProptype = PropTypes.shape({
  id: PropTypes.string.isRequired,
  dni: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  apellido: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  hora: PropTypes.string.isRequired
});

export const citaArrayProptype = PropTypes.arrayOf(citaProptype).isRequired;