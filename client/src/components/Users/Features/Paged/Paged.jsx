

const Paged = ({ TicketsPerPage, total, paginate }) => {
  const numberPage = [];

  for (let i = 1; i <= Math.ceil(total.length / TicketsPerPage); i++) {
    numberPage.push(i);
  }

  const scroll = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <nav>
      {" "}
      {numberPage.map((num) => (
        <div key={num}>
          <button
         
            onClick={(e) => {
              paginate(e, num);
              scroll();
            }}
          >
            {num}
          </button>
        </div>
      ))}
    </nav>
  );
};

export default Paged;