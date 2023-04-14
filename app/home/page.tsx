import { Summary } from "@/src/components/Summary";
import { TopHeader } from "@/src/components/Header";

export function HomePage() {
  return (
    <>
      <TopHeader />
      <main>
        <Summary />
      </main>
    </>
  );
}
