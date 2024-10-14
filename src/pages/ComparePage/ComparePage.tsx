import HeadCompare from "./components/HeadCompare";
import TableCompare from "./components/TableCompare";
import "./compare.scss";
export default function ComparePage() {
  return (
    <section className="container compare">
      <HeadCompare />
      <TableCompare />
    </section>
  );
}
