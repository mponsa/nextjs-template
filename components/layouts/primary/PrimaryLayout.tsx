import Head from 'next/head';
import { Footer, Header } from '../../navigation';

export interface IPrimaryLayout {
  children: React.ReactNode;
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center">
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};
