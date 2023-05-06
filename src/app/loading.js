import React from 'react';
import commonStyles from '@/app/styles/common.module.css';

const Loading = () => {
  return (
    <section className={commonStyles.loading_section}>
      <div className={commonStyles.loading}>
      </div>
    </section>
  );
}

export default Loading;