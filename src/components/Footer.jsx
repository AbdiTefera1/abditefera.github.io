import {FaFacebookSquare, FaGithubSquare, FaInstagram, FaLinkedinIn} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">
        {" "}
        Copyright © 2024<br />
        Abdi Tefera
      </p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <FaGithubSquare/>
        <FaLinkedinIn/>
        <FaFacebookSquare/>
        <FaInstagram/>
      </div>
    </div>
  );
};

export default Footer;
