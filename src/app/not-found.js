import React from 'react';
import commonStyles from '@/app/styles/common.module.css';
import Link from 'next/Link';

const NotFound = () => {
  return (
    <section className={commonStyles.container}>
      <div className={commonStyles.error_page}>
        <h1>404</h1>
        <h2>Not Found</h2>
        <p>Could not find requested resources</p>
        <Link href='/'>
          <button>
            Go to Home Page
          </button>
        </Link>
      </div>

    </section>
  )
}

export default NotFound