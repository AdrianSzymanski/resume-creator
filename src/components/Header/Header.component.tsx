import './Header.component.css';

export const Header: React.FC = () => (
  <div className='c-header'>
    <div className='c-header__container'>
      <h1 className='c-header__main'>
        Resume Creator
      </h1>
      <div className='c-header__side'>
        Print | Import | Export
      </div>
    </div>
  </div>
);
