import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  return (
    <>
      <div className="home__page">
        <h1 className="display-2 home__header">Explore your Creativity.</h1>
        <h3 className="home__description">
          Join the Healing Hub to Grow, Practice, Heal, and Impact others.
        </h3>
        <button
          className="btn btn-outline-light home__button"
          onClick={() => {
            history.push("/auth");
          }}
        >
          Get stated for free
        </button>
      </div>
      <div className="home--categories">
        <h2 className="display-3">Find what fascinates you</h2>
        <h4 className="categories">
          Animation, Design, Illustration, Lifestyle, Photos, Business
        </h4>
        <div className="cards">
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2lnbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <Card.Body>
                  <Card.Title className="text-center">Growth</Card.Title>
                  <Card.Text>Text to build on</Card.Text>
                  <Button className="text-center" variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1541462608143-67571c6738dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body>
                  <Card.Title>Practice</Card.Title>
                  <Card.Text>Text to build on</Card.Text>
                  <Button className="text-center" variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1597809259188-0e5ffcbb0ba9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                />
                <Card.Body>
                  <Card.Title>Health</Card.Title>
                  <Card.Text>Text to build on</Card.Text>
                  <Button className="text-center" variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="text-center" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                />
                <Card.Body>
                  <Card.Title>Impact</Card.Title>
                  <Card.Text>Text to build on</Card.Text>
                  <Button className="text-center" variant="primary">
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Home;
