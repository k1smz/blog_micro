import Sheet from "@/app/_components/Sheet";
import Hero from "../_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Hero title="Members" sub="メンバー紹介" />
      <Sheet>{children}</Sheet>
    </>
  );
}
