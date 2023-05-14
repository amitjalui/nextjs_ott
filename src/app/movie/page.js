"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import MovieCard from "../components/MovieCard/MovieCard";
import commonStyles from "@/app/styles/common.module.css"

const Movie = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const url = process.env.NEXT_PUBLIC_Url;
    
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      setData(result.titles)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className={commonStyles.movieSection}>
        <div className={commonStyles.container}>
          <h1>Series & Movies</h1>
          <div className={commonStyles.card_section}>
            {
              data.map((elem) => {
                return <MovieCard key={elem.summary.id} data={elem} />
              })
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
