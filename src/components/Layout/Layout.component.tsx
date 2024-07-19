import './Layout.component.css';

interface Props {
  header: React.ReactNode;
  main: React.ReactNode;
  footer: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ header, main, footer }) => (
  <div className='c-layout'>
    <header className='c-layout__header'>
      {header}
    </header>
    <main className='c-layout__main'>
      {main}
    </main>
    <footer className='c-layout__footer'>
      {footer}
    </footer>
  </div>
);
