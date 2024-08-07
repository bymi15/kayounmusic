import _ from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";
import config from "../../config";
import worksData from "../../data/works.json";
import CategoryFilter from "../shared/CategoryFilter";
import ComponentLoader from "../shared/ComponentLoader";
import SoundCloudEmbed from "./SoundCloudEmbed";

function SoundCloudContainer() {
  // let { loading, data, error } = useCachedFetch(
  //   `${config.API_ENDPOINT}/works`,
  //   config.CACHE_TOGGLE
  // );

  let loading = false,
    data = worksData;

  const [filter, setFilter] = React.useState("All");

  // if (error) {
  //   console.log(error);
  //   console.log("Loading static data as fallback...");
  //   data = worksData;
  // }

  const filteredWorks =
    filter === "All"
      ? _.sortBy(data, (obj) => new Date(obj.id)).reverse()
      : _.sortBy(_.filter(data, ["category", filter]), (obj) => new Date(obj.id)).reverse();

  return (
    <>
      <Container>
        <CategoryFilter
          filter={filter}
          setFilter={setFilter}
          categories={["All", "Orchestral", "Hybrid", "World", "Chamber", "Solo"]}
        />
        <Row>
          <FlipMove typeName={null}>
            {loading || config.PRE_RENDERING ? (
              <ComponentLoader />
            ) : !_.isEmpty(data) ? (
              filteredWorks.map((data) => (
                <Col key={data.title} xl={3} lg={4} md={6} sm={12}>
                  <SoundCloudEmbed title={data.title} url={data.url} />
                </Col>
              ))
            ) : (
              <></>
            )}
          </FlipMove>
        </Row>
      </Container>
    </>
  );
}

export default SoundCloudContainer;
