"use client";
import React, { useEffect, useState } from "react";
import commonStyles from "@/app/styles/common.module.css";
import Image from "next/image";

const Page = ({ params }) => {
  const id = params.id;
  const [data, setData] = useState({});

  const fetchData = async () => {
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPI_Host,
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result[0].details);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className={commonStyles.conatiner}>
        <h2 className={commonStyles.movie_title}>
          Netflix \ <span>{data.type}</span>
        </h2>
        <div className={commonStyles.card_section}>
          <div>
            {data.backgroundImage && (
              <Image
                src={data.backgroundImage.url}
                alt={data.title}
                width={600}
                height={300}
              />
            )}
          </div>
          <div>
            <h1>{data.title}</h1>
            <p>{data.synopsis}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
