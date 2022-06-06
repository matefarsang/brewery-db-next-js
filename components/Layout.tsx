import React from "react";
import Head from "next/head";
import Image from "next/image";
import { DataContextProvider } from "../context/dataContext";
import { Navbar, Container } from "react-bootstrap";
import { FC } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
  return (
    <>
      <Head>
        <title>Brewery DB</title>
        <meta
          name="description"
          content="Brewery Database. Public information on breweries, cideries, brewpubs, and bottleshops"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <>
          <Navbar variant="dark" fixed="top">
            <Container>
              <Navbar.Brand href="/">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  width={50}
                  height={50}
                  className="d-inline-block align-top"
                />
                <span className="brand-name">Brewery DB</span>
              </Navbar.Brand>
            </Container>
          </Navbar>
        </>
      </header>

      <DataContextProvider>
        <main>{children}</main>
      </DataContextProvider>
    </>
  );
};

export default Layout;
