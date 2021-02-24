/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import ClientOnly from './ClientOnly';
import { Button } from 'tigerspack';

const features = [
  {
    title: <>Goodbye typical FiveM Economy.</>,
    imageUrl: 'https://i.imgur.com/ilgQNsV.gif',
    description: (
      <>
       With ToxicFX we give the FiveM Economy System a whole new look and feel,
       Making your community love the way it looks is our top priority. And yes
       we can finally say goodbye to the boring and outdated originals though
       they do deserve credit for what they started it's time for something new.
      </>
    ),
  },
  {
    title: <>Open Source.</>,
    imageUrl: 'https://media.discordapp.net/attachments/734686866690932767/807361537987575809/image0.png',
    description: (
      <>
      All of the code used to power the ToxicFX Framework is Open-Source and available on our <a href="https://github.com/TFX-Framework">GitHub.</a>
      And we are actively open to and accepting changes and requests made via a Pull Request.
    </>
    ),
  },
  {
    title: <>Made with LUA.</>,
    imageUrl: 'https://media.discordapp.net/attachments/734686866690932767/807365537251983410/image0.png',
    description: (
      <>
       ToxicFX is made with and developed using LUA, Javascript & a Tiny Bit of HTML for the User Interface,
       So the good news is, we are compatible with most of the resources you have grown to know and love ❤️
       All well keeping that production ready look and feel to your servers backend code.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="TFX"
      description="The Roleplay Framework that every FiveM Server needs.">
      <header className={classnames('hero', styles.heroBanner)}>
        <div className="container">
          <div className={styles.logo} style={{backgroundImage: `url(${useBaseUrl('https://media.discordapp.net/attachments/734686866690932767/807357248459374592/image0.png')})`}}/>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link to={useBaseUrl('docs/getting-started')}>
              <ClientOnly>
                <Button theme={'info'} size={'large'}>View The Docs</Button>
              </ClientOnly>
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
