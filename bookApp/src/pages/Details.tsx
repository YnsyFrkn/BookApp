import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "../css/details.css";

const Details = () => {
  const { id } = useParams<{ id: string }>(); // URL'deki ID parametresini al
  const books = useSelector((state: RootState) => state.book.books); // Kitap listesini Redux'tan al
  const book = books.find((b) => b.key.split("/").pop() === id); // ID'ye göre kitabı bul

  if (!book) {
    return <p>Kitap bulunamadı</p>; // Eğer kitap bulunamazsa mesaj göster
  }

  return (
    <div className="container details">
      <h2>{book.title}</h2>

      {/* Kitap resmi varsa göster */}
      {book.cover_i && (
        <img
          style={{ marginTop: "10px" }}
          src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
          alt={book.title}
        />
      )}

      {/* Yazar bilgisi varsa göster */}
      {book.author_name && (
        <p style={{ marginTop: "15px" }}>
          Yazar: {book.author_name.join(", ")}
        </p>
      )}

      {/* Yayın yılı varsa göster */}
      {book.first_publish_year && (
        <p>İlk Yayın Yılı: {book.first_publish_year}</p>
      )}

      {/* Açıklama varsa göster */}
      {book.description && <p>Açıklama: {book.description}</p>}

      {/* Eğer bazı veriler yoksa, burada belirtilen alanlar yer almaz */}
    </div>
  );
};

export default Details;
