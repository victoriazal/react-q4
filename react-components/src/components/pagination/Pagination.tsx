import './Pagination.css';
export default function Pagination(props: {
  totalPosts: number;
  postsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
}) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-wrapper">
      {pages.map((page, index) => {
        return (
          <button
            className={
              props.currentPage === page ? 'page-btn active' : 'page-btn'
            }
            onClick={() => props.setCurrentPage(page)}
            key={index}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
}
