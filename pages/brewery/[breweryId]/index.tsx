import React, { FC, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { DataContext } from "../../../context/dataContext";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";

type BreweryProps = {
  details: {};
};

const Brewery: FC<BreweryProps> = ({ details }): JSX.Element => {
  const { breweryDetails, setBreweryDetails }: any = useContext(DataContext);
  const router = useRouter();

  useEffect(() => {
    setBreweryDetails(details);
  }, []);

  return (
    <div className="wrapper details-wrapper">
      <Container>
        <Button
          variant="outline-warning"
          size="lg"
          onClick={() => router.back()}
        >
          &laquo; Back
        </Button>
        <div>
          <h2 className="subtitle">{breweryDetails?.name}</h2>
          <Table striped bordered variant="dark">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {breweryDetails &&
                Object.keys(breweryDetails).map((brewKey, index) => (
                  <tr key={index}>
                    <td>{brewKey}</td>
                    <td>{breweryDetails[brewKey]}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export const getServerSideProps = async (context: any) => {
  let details;
  try {
    const response = await axios.get(
      `https://api.openbrewerydb.org/breweries/${context.params.breweryId}`
    );
    details = response.data;
  } catch (error) {
    console.log(error);
    details = {};
  }
  return {
    props: {
      details,
    },
  };
};

export default Brewery;
