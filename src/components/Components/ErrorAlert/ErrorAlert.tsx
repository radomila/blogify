import { ErrorAlertType } from './ErrorAlertType';
import Button from '@/components/Components/Button/Button';
import LinkButton from '@/components/Components/Button/LinkButton';
import { useState } from 'react';

const ErrorAlert = ({ error, showCloseButton, showHomeButton }: ErrorAlertType) => {
  const [isOpened, setIsOpened] = useState(true);

  const handleCloseErrorAlert = () => {
    setIsOpened(false);
  };

  return (
    isOpened && (
      <div className="bg-white rounded-md px-3 py-7 mt-7 shadow-md border border-gray-200 w-[600px]">
        <div className="flex items-start gap-1 px-2">
          <img
            src="/warning_icon.png"
            alt="warning_icon"
            role="img"
            aria-label="Warning icon"
          />
          <p className="flex px-2 text-xl font-medium text-[#E84A4A]">An error has occured!</p>
        </div>
        <div className="flex px-2 py-5">{error ? error : 'Something went wrong. Please try again later.'}</div>
        <div className="flex justify-end gap-8 px-2">
          {showHomeButton && (
            <LinkButton
              href="/"
              variant="errorSecondary"
              size="errorSecondary"
              aria-label="Home button"
            >
              Home
            </LinkButton>
          )}
          {showCloseButton && (
            <Button
              onClick={handleCloseErrorAlert}
              variant="error"
              size="error"
              aria-label="Close button"
            >
              Close
            </Button>
          )}
        </div>
      </div>
    )
  );
};

export default ErrorAlert;
