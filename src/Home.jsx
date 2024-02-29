import "./Home.css";
import img from "./assets/hero-no-background.png";
import gear from "./assets/gear.svg";

function Home() {
  const categories = [
    {
      title: "Reverse Engineering",
      description:
        "Reverse engineering involves deconstructing a device or system to understand its structure and function.",
      image: "http://localhost:5173/src/assets/reverse2.jpeg",
    },
    {
      title: "Web Attack",
      description:
        "Web attacks involve exploiting vulnerabilities in web applications to gain unauthorized access or perform malicious actions.",
      image: "http://localhost:5173/src/assets/web.jpeg",
    },
    {
      title: "Cryptography",
      description:
        "Cryptography involves creating written or generated codes that allow information to be kept secret.",
      image: "http://localhost:5173/src/assets/crypto.jpeg",
    },
  ];
  return (

      <div className="container">
        <section className="hero">
          <div className="title-container">
            <div className="title">
              Welcome to <strong>HackerTrack</strong>, the Ultimate CTF
              Challenge!
            </div>
            <p className="sub-title">
              Hone your cybersecurity skills, solve challenging puzzles, and
              compete with others in real-time.
            </p>
          </div>
          <img src={img} alt="red figure with cyberpunk theme" />
        </section>
        <section className="features">
          <div className="text-container top-left">
            <p>
              <strong>Real-Time Leaderboard</strong> Compete with others and see
              where you stand in real-time.
            </p>
          </div>
          <div className="text-container top-right">
            <p>
              <strong>Diverse Challenges</strong> Our challenges cover a wide
              range of cybersecurity topics.
            </p>
          </div>
          <div className="image-container">
            <img src={gear} alt="Your description" />
          </div>
          <div className="text-container bottom">
            <p>
              <strong>Community Support</strong> Join our community and learn
              from other cybersecurity enthusiasts.
            </p>
          </div>
        </section>
        <section className="category">
          <div>
            <div className="title">Categories</div>
            <div className="category-container">
              {categories.map((category, index) => (
                <div className="card" key={index}>
                  <img src={category.image} alt={category.title} />
                  <h2>{category.title}</h2>
                  <p>{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="section-get-started">
          <div className="container">
            <div className="get-started-card-container flex">
              <div className="get-started-card grid">
                <div className="get-started-text">
                  <h2 className="heading">Ready to take on the challenge?</h2>
                  <p>
                    Sign up now and join our community of cybersecurity
                    enthusiasts.
                  </p>
                  <div className="btn-container flex">
                    <a className="btn" href="signup.html">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="get-started-img"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
   
  );
}

export default Home;
