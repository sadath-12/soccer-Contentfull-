import React from "react";
import AOS from "aos";
import Layout from "../../components/Layout";
import TeamMembersLayout from "../../components/Gallery/TeamMembersLayout";
import "aos/dist/aos.css";
import { createClient } from "contentful";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { getContentById } from "../../hooks/functions";
import { playersData } from "../../components/dummyData";

const index = ({ settings, pageData, mannschaft }) => {
  
  console.log( 'mannschaft', mannschaft)
const length = Number(mannschaft.map((item) => item.fields.body))
  let title = mannschaft.map((item) => item.fields.body[1].fields.displayTitle);

  //got players id
  const players = mannschaft.map((item) => item.fields.body[1].fields.players);
  
  const [playerData, setPlayerData] = useState([]);

  useEffect(() => {
    const getPlayers = async () => {
      const res = players?.map((item) => item?.map((player) => player?.sys.id));
      console.log("res", res);
      console.log("resId", res[0]);
      let playerDataByID,playersSetData=new Set();
      for (let i = 0; i < res[0].length; i++) {
        console.log(res[0][i]);
        playerDataByID = await getContentById(res[0][i]);
        console.log(playerDataByID, "playerDataByID");
        // setPlayerData({...playerData,playerDataByID})
        if ( playerDataByID ) {
         
          playersSetData.add(playerDataByID)
           
           console.log(playerData, "playerData", "line 59");

        }

      }
      setPlayerData(playersSetData)
      
    };
    // const withoutDuplicates = [...new Set(playerData)]
    // setPlayerData(withoutDuplicates)
    getPlayers();
  }, []);

  console.log("playerData", playerData);

// playerData.forEach(item=>console.log(item))


  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Layout settings={settings}>
      <Head>
        <title>Mannschaften | FC Ataspor</title>
      </Head>
      
        <div className="bg-themeBlack min-h-screen flex flex-col space-y-16 lg:space-y-24 pt-24 md:pt-32 overflow-hidden py-16 ">
        <div className="flex flex-col space-y-12  container items-center">
          <h1 className="text-2xl md:text-3xl text-white lg:text-4xl">
            {title}
          </h1>
          <TeamMembersLayout playersData={playerData} />
        </div>
       
      </div>
      
     
    </Layout>
  );
};

export default index;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  //pass the identity of model type
  const res = await client.getEntries({ content_type: "settings" });
  const pageData = await client.getEntries({ content_type: "page" });

  // const mannschaft=pageData.items.find({fields:{slug:'1-mannschaft'}})
  const mannschaft = pageData.items.filter(
    (item) => item.fields.slug === "1-mannschaft"
  );

  return {
    props: {
      settings: res.items,
      pageData: pageData.items,
      mannschaft,
    },
    // nextjs wil query the data in this time in seconds again and fetch the changes
    revalidate: 1,
  };
}
