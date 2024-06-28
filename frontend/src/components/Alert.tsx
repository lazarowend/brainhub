import CloseIcon from '../assets/close-icon.svg';

interface AlertProps {
  message: string;
  color: string;
  linkText?: string;
  linkHref?: string;
}

export default function Alert({ message, color, linkText, linkHref }: AlertProps) {
  const baseStyle = `flex items-center p-4 mb-4 rounded-lg`;
  const textColor = `${color}-800`;
  const bgColor = `bg-${color}-50`;
  const darkBgColor = `dark:bg-gray-800 dark:text-${color}-400`;

  return (
    <div
      id="alert-1"
      className={`${baseStyle} ${textColor} ${bgColor} ${darkBgColor}`}
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div className="ms-3 text-sm font-medium">
        {message} {linkText && linkHref && <a href={linkHref} className="font-semibold underline hover:no-underline">{linkText}</a>}
      </div>
      <button
        type="button"
        className="ms-auto -mx-1.5 -my-1.5 {bgColor} text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700"
        aria-label="Close"
        onClick={() => document.getElementById('alert-1')?.remove()}
      >
        <span className="sr-only">Close</span>
        <img src={CloseIcon} alt="Close icon" className="w-4 h-4" />
      </button>
    </div>
  );
}