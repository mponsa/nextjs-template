import Head from 'next/head';
import { Footer, Header } from '../../navigation';

export interface IPrimaryLayout {
  children: React.ReactNode;
  justify?: 'items-center' | 'items-start';
}

export const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  justify = 'items-center',
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`min-h-screen flex flex-col ${justify}`}>
        <Header />
        <main>{children}</main>
        <div className="m-auto" />
        <Footer />
      </div>
    </>
  );
};
