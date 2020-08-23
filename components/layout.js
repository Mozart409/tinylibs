import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen antialiased">
      <Head>
        <title>tinylibs</title>
      </Head>
      <Header />
      <main className="flex-1 w-full p-4 mx-auto max-w-7xl md:px-8 md:py-16">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
