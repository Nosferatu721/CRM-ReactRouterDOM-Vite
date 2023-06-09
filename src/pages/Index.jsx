import { useLoaderData } from 'react-router-dom';
import ClienteTR from '../components/ClienteTR';
import { obtenerClientes } from '../data/clientes';

export function loader() {
  const clientes = obtenerClientes();
  return clientes;
}

const Index = () => {
  const dataClientes = useLoaderData();

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"></h1>
      <p className="mt-3">Administra tus clientes</p>

      {dataClientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Cliente</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {dataClientes.map((cliente) => (
              <ClienteTR key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No Hay Clientes</p>
      )}
    </>
  );
};

export default Index;
