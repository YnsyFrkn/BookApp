import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//  `books` prop'unu ekleyerek doğru tanımlıyoruz!
const Content = ({
  books,
  searchPerformed,
}: {
  books: any[];
  searchPerformed: boolean;
}) => {
  const navigate = useNavigate();
  const { loading, error } = useSelector((state: RootState) => state.book);

  useEffect(() => {
    if (!loading && searchPerformed && books.length === 0) {
      toast.error("Kitap bulunamadı");
    }
  }, [loading, books, searchPerformed]);

  const handleDetailClick = (id: string) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container">
      {loading && (
        <div className="spinner-grow text-primary loading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="row g-4">
        {books.length > 0
          ? books.map((book, index) => {
              const bookId = book.key ? book.key.split("/").pop() : null;

              return (
                <div
                  key={index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-2"
                >
                  <div className="card mb-4 shadow-sm">
                    <img
                      src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                      alt={book.title}
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title" title={book.title}>
                        {book.title}
                      </h5>
                      <div className="d-flex justify-content-between align-items-center">
                        {bookId ? (
                          <button
                            type="button"
                            className="btn btn-sm detail-button"
                            onClick={() => handleDetailClick(bookId)}
                          >
                            Detay
                          </button>
                        ) : (
                          <span className="text-danger">ID Bulunamadı</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Content;
