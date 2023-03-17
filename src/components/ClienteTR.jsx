const ClienteTR = ({ cliente }) => {
  const { nombre, empresa, telefono, email, id } = cliente;
  return (
    <tr className="border-b">
      <td className="px-6 py-2 space-y-2">
        <p className="text-1xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="px-6 py-2">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
      </td>
      <td className="px-6 flex gap-3 justify-center items-center">
        <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs">
          Editar
        </button>
        <button type="button" className="text-red-600 hover:text-red-700 uppercase font-bold text-xs">
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default ClienteTR;
