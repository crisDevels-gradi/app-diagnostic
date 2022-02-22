import { Heading, Page } from "@shopify/polaris";
import NavBar from "../components/NavBar";

export default function Index() {
  return (
    <>
    <NavBar/>
      <div className="container">
        <Page title="Home">
          <Heading>
              {/* COMPONENT */}          
              Home
          </Heading>
        </Page>
      </div>
    </>
  );
}
