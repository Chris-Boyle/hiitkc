import React from 'react';
import ReactPlayer from 'react-player/lazy';
import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Videos() {
  return (
    <Layout>
      <Head>
        <title>Boyle Home Movies</title>
      </Head>
      <article>
        <h1 className={utilStyles.heading2Xl}>Boyle Home Videos </h1>
        <br></br>
        <br></br>
        <h1 className={utilStyles.headingLg}>
          1998 Chris' Communion and more Chris
        </h1>
        <ReactPlayer
          url={['videos/1998 Chris communion:birthday:Christmas.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>Camping 1993</h1>
        <ReactPlayer
          url={['videos/Camping-1993.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>Camping 1993-1994</h1>
        <ReactPlayer
          url={['videos/Camping 1993-1994.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>Florida</h1>
        <ReactPlayer
          url={['videos/Florida.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>
          Justins Baseball and Birthdays 1994-1999
        </h1>
        <ReactPlayer
          url={['videos/Justins Baseball and Birthdays 1994-1999.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>Kids sports</h1>
        <ReactPlayer
          url={['videos/Kids sports.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>New House and 4th of July</h1>
        <ReactPlayer
          url={['videos/New House and 4th of July.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
        <h1 className={utilStyles.headingLg}>Reunion and world series</h1>
        <ReactPlayer
          url={['videos/Reunion and world series.mov']}
          className='react-player'
          width='100%'
          height='30rem'
          controls
        />
      </article>
    </Layout>
  );
}
