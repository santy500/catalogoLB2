import React, { useState } from 'react';

const ArticleTableRow = ( props ) => {
  const [checkboxes, setCheckboxes] = useState(
    // Inicializamos un objeto que tendrá como clave el nombre de la talla y como valor el estado del checkbox (true/false).
    props.tallas.reduce((acc, talla) => {
      acc[talla] = false;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (talla) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [talla]: !prevCheckboxes[talla], // Invertimos el valor del checkbox al hacer clic en él.
    }));
  };

  return (
    <tr>
        <th>{props.color}</th>
      {props.tallas.map((talla) => (
        <td key={talla}>
          <input
            type="checkbox"
            checked={checkboxes[talla]}
            onChange={() => handleCheckboxChange(talla)}
          />
        </td>
      ))}
    </tr>
  );
};

export default ArticleTableRow;
