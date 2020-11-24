import Layout from "../components/Layout";
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout pageTitle="Blog" description="My Personal Blog">
      <Component {...pageProps} />
    </Layout>
  );
}

