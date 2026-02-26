import {
  accountLinks,
  dailyLinks,
  infoLinks,
  supportLinks,
} from "../../../data/theme1/footerMenuData";
import Container from "../../../shared/layout/Container";
import FooterMenu from "../../../shared/layout/FooterMenu";
import Section from "../../../shared/layout/Section";
import AddressBar from "./AddressBar";
import AppStore from "./AppStore";
import Bottombar from "../../../shared/layout/Bottombar";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Section>
          <div className="grid 2xl:grid-cols-4 grid-cols-2 gap-12">
            <AddressBar />
            <div className="col-span-2 2xl:order-2 order-3 2xl:flex grid lg:grid-cols-4 grid-cols-2 gap-8">
              <FooterMenu title="Information" links={infoLinks} />
              <FooterMenu title="Customer Support" links={supportLinks} />
              <FooterMenu title="My Account" links={accountLinks} />
              <FooterMenu title="Daily Groceries" links={dailyLinks} />
            </div>
            <div className="2xl:order-3 order-2">
                <AppStore />
            </div>
          </div>
        </Section>
        <Bottombar copyright="Copyright © 2025 Ui-drops All Rights Reserved" className="py-5 border-t border-gray-200" />
      </Container>
    </footer>
  );
};

export default Footer;
