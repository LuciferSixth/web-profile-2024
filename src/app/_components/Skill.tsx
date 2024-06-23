import {
  faCss3,
  faDocker,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faMicrosoft,
  faNodeJs,
  faPhp,
  faPython,
  faReact,
  faRust,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./common/Card";
import { faC, faDatabase, faR } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Skill = (props: Props) => {
  return (
    <Card title="Skill">
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <div className="text-center">
          <FontAwesomeIcon icon={faC} className="h-10" />
          <p>C</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faPython} className="h-10" />
          <p>Python</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faNodeJs} className="h-10" />
          <p>Node-JS</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faReact} className="h-10" />
          <p>React</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJava} className="h-10" />
          <p>Java</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faDatabase} className="h-10" />
          <p>Database</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faR} className="h-10" />
          <p>R studio</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faHtml5} className="h-10" />
          <p>HTML5</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faCss3} className="h-10" />
          <p>CSS3</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faJs} className="h-10" />
          <p>Java Script</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faGithub} className="h-10" />
          <p>GitHub</p>
        </div>
        <div className="text-center">
          <FontAwesomeIcon icon={faMicrosoft} className="h-10" />
          <p>Microsoft</p>
        </div>
      </div>
    </Card>
  );
};

export default Skill;
