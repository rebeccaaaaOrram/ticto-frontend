import { Summary } from "@/src/components/Summary";
import { Header } from "@/src/components/Header";
import { TableContent } from "@/src/components/Table";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Summary />
        <TableContent />
      </main>
    </>
  );
}
