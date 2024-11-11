interface TagProps {
  text: Array<string> | string;
}

const Tag = ({ text }: TagProps) => {
  const tagsArray = Array.isArray(text) ? text : [text];

  return (
    <>
      {tagsArray.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 py-1 px-3 inline-block rounded-md text-sm self-center mr-2"
        >
          {tag}
        </span>
      ))}
    </>
  );
};

export default Tag;