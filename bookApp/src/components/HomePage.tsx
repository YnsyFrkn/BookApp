import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../index/index"; // kullan
import { RootState } from "../redux/store";
import Content from "../components/Content";

const HomePage = ({ searchPerformed }: { searchPerformed: boolean }) => {
  const dispatch = useDispatch();
  const { books, loading, error } = useSelector(
    (state: RootState) => state.book
  );

  // Sayfa yüklendiğinde rastgele kitapları getir
  useEffect(() => {
    if (!searchPerformed) {
      dispatch(fetchBooks("r") as any); //  TypeScript hatasını önlemek için "as any"
    }
  }, [dispatch, searchPerformed]);

  return (
    <div className="container">
      {loading && (
        <div className="spinner-grow text-primary loading" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && <p>{error}</p>}
      <Content books={books} searchPerformed={searchPerformed} />
    </div>
  );
};

export default HomePage;
