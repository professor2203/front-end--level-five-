"use client"
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Itsolution from "@/components/Itsolution";

import Story from "@/components/Story";
import Connect from "@/components/Connect";
import Card from "@/components/Card";

const Home = () => {
    return (
      <>
        {/* <Head> */}
          <title>levelfive</title>
        {/* </Head> */}
   {/* <Navbar/> */}
        <Layout>
<Header/>
        <Itsolution/>
        <Story/>
     <Card/>
        <Connect/>

        </Layout>
      </>
    );
  };
  export default Home;