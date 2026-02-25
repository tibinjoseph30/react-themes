import {
  customerCareLinks,
  findItLinks,
} from "../../../data/theme2/footerMenuData";
import Bottombar from "../../../shared/layout/Bottombar";
import Container from "../../../shared/layout/Container";
import FooterMenu from "../../../shared/layout/FooterMenu";
import Section from "../../../shared/layout/Section";
import AddressBar from "./AddressBar";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <Section>
        <Container className="grid grid-cols-5">
          <div className="col-span-2">
            <AddressBar />
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-5">
            <FooterMenu title="Find it Fast" links={findItLinks} />
            <FooterMenu title="Customer Care" links={customerCareLinks} />
          </div>
        </Container>
      </Section>
      <Container className="bg-gray-200 py-3">
        <Bottombar copyright="© Electro - All rights Reserved" />
      </Container>
    </footer>
  );
};

export default Footer;
