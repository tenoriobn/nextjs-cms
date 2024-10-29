import Head from "next/head";

export function SEOBlock(props) {
  console.log('SEOBLOCK: ', props)

  return (
    <Head>
      <title>{props.title}</title>
    </Head>
  );
}