import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import JsonTable from "../components/IncidentTable";
function Donations() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar></NavBar>
      <JsonTable></JsonTable>
      <Footer></Footer>
    </div>
  );
}
export default Donations;
