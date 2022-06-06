import { Button, Container } from "react-bootstrap";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper home-wrapper">
      <div className="info">
        <h1>Brewery Database</h1>
        <Container fluid="lg">
          <p>Greetings</p>
          <p>
            Here you can get public information on breweries, cideries,
            brewpubs, and bottleshops, from all over the world! Pick from the
            list or search for breweries for details!
          </p>
        </Container>
      </div>
      <Link href="/breweries" passHref>
        <Button variant="outline-warning" size="lg">
          Show more &raquo;
        </Button>
      </Link>
    </div>
  );
}
