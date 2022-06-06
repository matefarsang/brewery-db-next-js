import React, { useEffect, useContext } from "react";
import { ListGroup, Form, InputGroup } from "react-bootstrap";
import Link from "next/link";
import { DataContext } from "../context/dataContext";

const SearchBar = () => {
  const { query, setQuery, autoCompleteList, fetchAutoComplete }: any =
    useContext(DataContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchAutoComplete();
    }, 350);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="search-wrapper">
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          size="lg"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </InputGroup>

      <ListGroup>
        {autoCompleteList &&
          autoCompleteList.slice(0, 5).map((brewery: any, i: React.Key) => (
            <Link
              passHref
              key={i}
              href="/brewery/[breweryId]"
              as={`/brewery/${brewery.id}`}
            >
              <ListGroup.Item action>{brewery.name}</ListGroup.Item>
            </Link>
          ))}
      </ListGroup>
    </div>
  );
};

export default SearchBar;
