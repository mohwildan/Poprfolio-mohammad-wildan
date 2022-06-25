import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import Chakra from "../components/Chakra";
import Font from "../components/Font";
import Layout from "../components/Layout/main";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Chakra>
      <Font />
      <Layout>
        <AnimatePresence exitBeforeEnter initial={true} onExitComplete={() => {
          if(typeof window !== "undefined") {
            window.scrollTo({top: 0})
          }
        }}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
}

export default MyApp;
