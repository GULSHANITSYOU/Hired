import { SignIn } from "@clerk/nextjs";

export default function SingInPage() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up"/>;
}
