import "@/common/styles/globals.css";
import "@/common/styles/sidebar.css";
import type { AppProps } from "next/app";

import Layout from "@/common/layout/Layout";
import { ColorModeProvider } from "@/common/context/ColorModeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ColorModeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ColorModeProvider>
  );
}
