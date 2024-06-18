import Head from "next/head";
import CenteredImage from "../components/CenteredImage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <>
        <Head>
          <title>Centered Image Example</title>
          <meta
            name="description"
            content="A Next.js example with a centered image on a green background"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <CenteredImage src="/path-to-your-image.jpg" alt="A centered image" />
      </>
    </main>
  );
}
