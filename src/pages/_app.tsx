import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";
import type { AppProps } from "next/app";

import "@/common/styles/globals.css";
import "@/common/styles/sidebar.css";
import "@/common/styles/pagenation.css";
import Layout from "@/common/layout/Layout";
import { ColorModeProvider } from "@/common/context/ColorModeProvider";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ColorModeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ApolloProvider>
  );
}
