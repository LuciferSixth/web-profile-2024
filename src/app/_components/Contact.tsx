import {
    faCss3,
    faFacebook,
    faGithub,
    faHtml5,
    faInstagram,
    faJava,
    faJs,
    faLine,
    faMicrosoft,
    faNodeJs,
    faPython,
    faReact,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Card from "./common/Card";
  import { faC, faDatabase, faLocation, faMailBulk, faPhone, faR } from "@fortawesome/free-solid-svg-icons";
  
  type Props = {};
  
  const contact = (props: Props) => {
    return (
      <Card title="Skill">
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="text-center">
            <FontAwesomeIcon icon={faPhone} className="h-10" />
            <p>0937382932</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faFacebook} className="h-10" />
            <p>Phimphot Nualnim</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faInstagram} className="h-10" />
            <p>beemz6</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLine} className="h-10" />
            <p>beem0641</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLocation} className="h-10" />
            <p>Trang, Thailand</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMailBulk} className="h-10" />
            <p>beamnaja75@gmail.com</p>
          </div>
        </div>
      </Card>
    );
  };
  
  export default contact;
  