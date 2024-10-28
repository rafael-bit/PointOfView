import clsx from "clsx";

interface buttonProps {
  text: string;
  onClick?: () => void;
  aria: string;
  action?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button = ({
  text,
  onClick,
  aria,
  action,
  type,
}: buttonProps) => {
  return (
    <button
      className={clsx(
        "py-1 px-4 rounded-lg bg-gray-100 hover:bg-gray-900 duration-300 inline-block hover:text-white",
        action &&
          "absolute top-5 z-[2] right-5 bg-red-600 px-5 py-1 text-white rounded-md hover:bg-red-500"
      )}
      onClick={onClick}
      aria-label={aria}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
