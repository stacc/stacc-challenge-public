import dynamic from "next/dynamic";
import { Header } from "../components/Header";

// We have to import the chart this way because it creates some errors if not.
// You have to do the same if you want to import a component that uses the Rechart library.
const ChartDataFromFile = dynamic(
  () => import("../components/ChartDataFromFile"),
  {
    ssr: false,
  }
);
const ChartDataFromAPI = dynamic(
  () => import("../components/ChartDataFromAPI"),
  {
    ssr: false,
  }
);

// This is the page that will be rendered at the root of your site.
export default function Home() {
  return (
    <main>
      <Header />
      <ChartDataFromFile />
      <ChartDataFromAPI />
    </main>
  );
}
