import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './Error.component.css';

export const Error: React.FC = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof window.Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div className='c-error'>
      <section className='c-error__card'>
        <h2 className='c-error__headline'>Oops!</h2>
        <p className='c-error__copy'>Sorry, an unexpected error has occurred.</p>
        <p className='c-error__copy'><i>{errorMessage}</i></p>
      </section>
    </div>
  );
};
