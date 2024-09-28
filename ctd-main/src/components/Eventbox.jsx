const Eventbox = ({ name, description, height, width, color, bordercolor }) => {
  return (
    <>
      <div
        className="flex flex-col justify-end items-start text-white p-2 px-8"
        style={{
          height: height,
          width: width,
          backgroundColor: color,
          border: `2px solid ${bordercolor}`,  
          borderRadius: "1.1vw"
        }}
      >
        <h1 className="text-[5vw] font-medium tracking-wider">{name}</h1>
      </div>
    </>
  );
};

export default Eventbox;
