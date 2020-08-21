import Layout from "../components/layout";
import AllPackages from "../components/AllPackages";
import LoadingSpinner from "../components/LoadingSpinner";

function IndexPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
        <AllPackages />
      </div>
    </Layout>
  );
}

export default IndexPage;
