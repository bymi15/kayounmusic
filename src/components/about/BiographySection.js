import { Image } from "react-bootstrap";
import profileImage from "../../assets/images/profile_photos/about.jpg";

function BiographySection() {
  return (
    <section className="about section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="pb-3">Biography</h2>
            <p>
              Ka Youn Yoo <small>(2000-present)</small> is a composer from South Korea. She is
              currently studying music composition at King’s College London, having graduated from
              The Purcell School for Young Musicians in the UK, The Yewon Arts Middle School and
              studied at The Seoul Arts High School in Korea.
            </p>
            <p>
              Ka Youn’s ambition is to express the sound of international music and arts through her
              compositions. In 2019, she won the Purcell School’s annual orchestral composition
              commission for which she wrote a unique orchestral fusion ‘Taepyeong’(Peace), which
              was performed by the Purcell School Symphony Orchestra in their annual flagship
              concert at the Cadogan Hall. The work was inspired by Korean Taepyeong-song,
              incorporating traditional Korean music, as well as elements of the Western Classical
              traditions, in order to create a kaleidoscope of different musical cultures.
            </p>
            <p>
              During her studies at university, she had opportunities to learn about various art
              forms including art works, poems, and films. She was fascinated by the role of music
              in film where music acts as a strong medium to deliver emotions to the audience. This
              experience led her to participate in an online summer program in Film Scoring Academy
              of Europe in July 2020. After that experience, she began her journey as a film
              composer and is now working on several short film projects including Marked{" "}
              <small>(2021)</small> and Outsider <small>(2021)</small> with young film directors
              across London.
            </p>
            <p>
              Ka Youn is also an orchestrator and arranger especially for young musicians. She has
              been commissioned to orchestrate and arrange music for Antigua and Barbuda Youth
              Orchestra since 2019 after leading Go-Compose workshop with Alison Cox in Antigua and
              Barbuda in July 2019.
            </p>
            <a
              href="#resume"
              onClick={(e) => {
                e.preventDefault();
                window.alert("Résumé is being prepared.");
              }}
              className="btn btn-small mt-20 mb-5"
            >
              Download Résumé
            </a>
          </div>
          <div className="col-md-6">
            <div className="about-img">
              <Image src={profileImage} fluid />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BiographySection;