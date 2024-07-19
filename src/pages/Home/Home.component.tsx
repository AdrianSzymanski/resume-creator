import './Home.component.css';

export const Home: React.FC = () => (
  <div className='c-home'>
    <div className='c-home__main'>
      <section className='c-home__promo'>
        <h2 className='c-home__headline'>
          Welcome to Your Free Resume Creator
        </h2>
        <p>
          Creating a great resume should be quick and easy.
          Pick a template, fill in your details, and download your polished resume instantly.
          No sign-ups, no payments, no ads, just a simple tool to help you land your dream job.
        </p>
      </section>
      <section>
        (Template list...)
      </section>
    </div>
  </div>
);
