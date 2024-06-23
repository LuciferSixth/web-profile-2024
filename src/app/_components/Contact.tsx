import {
    faFacebook,
    faInstagram,
    faLine,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import Card from "./common/Card";
  import { faLocation, faMailBulk, faPhone } from "@fortawesome/free-solid-svg-icons";
  
  type Props = {};
  
  const Contacts = (props: Props) => {
    return (
      <Card title="Contact">
        <div className="flex flex-col">
          <div className="text-center">
            <FontAwesomeIcon icon={faPhone} className="h-5" />
            <p className="mb-2 text-xs font-semibold">0937382932</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLocation} className="h-5" />
            <p className="mb-2 text-xs font-semibold">Trang, Thailand</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMailBulk} className="h-5" />
            <p className="mb-2 text-xs font-semibold">phimphot@gmail.com</p>
          </div>
        </div>
      </Card>
    );
  };
  
  export default Contacts;
  