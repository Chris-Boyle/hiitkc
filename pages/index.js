import Head from 'next/head';
import Link from 'next/link';
import ReactPlayer from 'react-player/lazy';
import Layout, { siteTitle } from '../components/layout';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>
            Hi, we are Chris and Meagan. Working out and staying healthy has
            been a hobby of ours for a while now. Join us on our journey!
          </p>
          <img src='../images/superman.jpg' alt='superman' />
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Workouts</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href='/posts/[id]' as={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            ))}
          </ul>
          <h2 className={utilStyles.headingLg}>Throw back to a while ago!</h2>
          <ReactPlayer
            url='https://youtu.be/XqUrdSPLD5M'
            className='react-player'
            width='100%'
            height='30rem'
            controls
          />
        </section>
      </Layout>
    </>
  );
}
