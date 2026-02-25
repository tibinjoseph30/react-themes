import { Send } from "lucide-react";
import Container from "../../../shared/layout/Container";
import Section from "../../../shared/layout/Section";
import Input from "../../../shared/ui/Input";
import Button from "../../../shared/ui/Button";

const Newsletter = () => {
  return (
    <Section className="bg-(--primaryColor) !py-6">
      <Container className="grid grid-cols-5 items-center">
        <div className="flex items-center gap-5">
          <Send />
          <p>Sign up to Newsletter</p>
        </div>
        <p className="col-span-2">
          ...and receive <strong>$20 coupon for first shopping.</strong>
        </p>
        <div className="flex items-center rounded-full overflow-hidden bg-white col-span-2">
          <Input placeholder="Email address" className="w-full border-0" />
          <Button variant="secondary" className="rounded-tl-none rounded-bl-none min-w-32">Sign Up</Button>
        </div>
      </Container>
    </Section>
  );
};

export default Newsletter;
