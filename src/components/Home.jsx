import React from 'react';
import Articles from './Articles';
import Topics from './Topics';

const Home = () => {
     return (
          <>
            <h1>Welcome to NC News portal!</h1>

            <section>
              <h2>Latest articles</h2>
              <Articles page='1' limit='3' sortBy='created_at' order='asc' />
            </section>

            <section>
              <h2>Topics</h2>
              <Topics />
            </section>

         </>
        );
};

export default Home;