import Container from "../../../shared/layout/Container";
import Button from "../../../shared/ui/Button";
import Input from "../../../shared/ui/Input";
import NewsletterImg from "../../../../public/images/theme1/newsletter-img.png";

const Newsletter = () => {
  return (
    <Container>
      <div className="bg-purple-200 py-6 px-16 flex items-center gap-16 rounded-2xl">
        <div className="flex-1">
          <h2 className="font-bold text-4xl secondary-font mb-6">Stay home & get your daily needs from our shop</h2>
          <div className="flex items-center gap-4">
            <Input placeholder="Enter your email" className="w-full border-0 py-4" />
            <Button variant="secondary" className="min-w-48 py-4">Subscribe Now</Button>
          </div>
          <p className="mt-6">I agree that my submitted data is being collected and stored.</p>
        </div>
        <img src={NewsletterImg} alt={NewsletterImg} width="583" height="377" />
      </div>
    </Container>
  );
};

export default Newsletter;
