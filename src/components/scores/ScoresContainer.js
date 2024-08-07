import _ from "lodash";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FlipMove from "react-flip-move";
import config from "../../config";
import scoresData from "../../data/scores.json";
import CategoryFilter from "../shared/CategoryFilter";
import ComponentLoader from "../shared/ComponentLoader";
import ScorePost from "./ScorePost";

function ScoresContainer() {
  // let { loading, data, error } = useCachedFetch(
  //   `${config.API_ENDPOINT}/scores`,
  //   config.CACHE_TOGGLE
  // );

  let loading = false,
    data = scoresData;

  const [filter, setFilter] = React.useState("All");

  // if (error) {
  //   console.log(error);
  //   console.log("Loading static data as fallback...");
  //   data = scoresData;
  // }

  const filteredScores = () =>
    filter === "All"
      ? _.sortBy(data, (obj) => new Date(obj.date)).reverse()
      : _.sortBy(_.filter(data, ["category", filter]), (obj) => new Date(obj.date)).reverse();

  return (
    <>
      <Container>
        <CategoryFilter filter={filter} setFilter={setFilter} />
        <Row>
          <FlipMove typeName={null}>
            {loading || config.PRE_RENDERING ? (
              <ComponentLoader />
            ) : !_.isEmpty(data) ? (
              filteredScores().map((data) => (
                <Col key={data.title} xl={4} lg={4} md={6} sm={12}>
                  <ScorePost
                    id={data.id}
                    title={data.title}
                    category={data.category}
                    date={data.date}
                    img={data.img}
                    rescore={data.rescore}
                  />
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

export default ScoresContainer;
