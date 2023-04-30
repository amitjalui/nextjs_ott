import React from 'react';
import commonStyles from '@/app/styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = ({data}) => {
  const { id, type, title, synopsis } = data.jawSummary;
  
  return (
    <>
      <div className={commonStyles.card}>
        <div className={commonStyles.card_images}>
          <Image src={data.jawSummary.backgroundImage.url} alt={title} height={200} width={260} />
        </div>
        <div className={commonStyles.card_data}>
          <h2>{title.substring(0, 18)}</h2>
          <p>
            {synopsis.substring(0, 66)} ...
          </p>
          <Link href={`/movie/${id}`}>
            <button>
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MovieCard;