import React from "react";

import "./index.css";

import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Img1 from "../../assets/images/raid1.jpg";
import Img2 from "../../assets/images/raid2.jpg";
import Img3 from "../../assets/images/raid3.png";
import ImagePreview from "../ImagePreview";

function HomeScreen(props) {
  const { goToHighscores, startGame } = props;

  return (
    <div className="home-container">
      <h1>
        sci-fi<strong>nd</strong>
      </h1>

      <h2>
        Find every listed character in these delightfully detailed illustrations
      </h2>

      <p> &gt;&gt; Click an image to start playing &lt;&lt; </p>

      <Carousel arrows>
        <ImagePreview
          title="Scourge of the Machines"
          author={`Laurie Greasley`}
          img={<img style={{ width: 300 }} src={Img3} alt="Raid 3" />}
          goToHighscores={goToHighscores}
          startGame={() => startGame("raid3")}
        />
        <ImagePreview
          title="The Raid"
          author={`Josan Gonzalez & Laurie Greasley`}
          img={
            <img
              style={{ width: 300, padding: 10, backgroundColor: "white" }}
              src={Img1}
              alt="Raid 1"
            />
          }
          goToHighscores={goToHighscores}
          startGame={() => startGame("raid1")}
        />
        <ImagePreview
          title="Incident on Line 13"
          author={`Josan Gonzalez & Laurie Greasley`}
          img={<img style={{ width: 300 }} src={Img2} alt="Raid 2" />}
          goToHighscores={goToHighscores}
          startGame={() => startGame("raid2")}
        />
      </Carousel>
    </div>
  );
}

export default HomeScreen;
