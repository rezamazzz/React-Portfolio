import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello My Name Is Reza </h2>
        <div className="prompt">
        <p>Software Developer With Passion For Learning and Creating</p>
        <LinkedInIcon />
        <EmailIcon />
        <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJs,Redux,Angular,HTML,CSS,React Native,Flutter,NPM,
              Ionic,BootStrap,MaterialUI,Yarn,TailwindCSS,StyleComponnents
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Node.Js, JavaSpring,.Net , ExpressJs,GraphQL,ApolloServer, Mysql,
              MongoDB ,DynamoDB, AWS S3,MS Sql
            </span>
          </li>
          <li className="item">
            <h2>Languges</h2>
            <span>JavaScript,Java,Python,C,C#,C++,Typescript,Go</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
