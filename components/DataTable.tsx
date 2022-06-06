import Link from "next/link";
import { Key, useContext } from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../context/dataContext";

const DataTable = (): JSX.Element => {
  const { breweryList }: any = useContext(DataContext);

  return (
    <Table striped bordered hover variant="dark" responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Country</th>
          <th>Type</th>
          <th>Web</th>
        </tr>
      </thead>

      <tbody>
        {breweryList &&
          breweryList.map((brewery: any, index: Key) => (
            <tr key={index}>
              <td>
                <Link href="/brewery/[breweryId]" as={`/brewery/${brewery.id}`}>
                  {brewery.name}
                </Link>
              </td>
              <td>{brewery.country}</td>
              <td>{brewery.brewery_type}</td>
              <td>{brewery.website_url}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
