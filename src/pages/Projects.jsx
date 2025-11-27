// Projects.jsx
import "./Projects.css";

const images = [
  "/src/assets/image/light.jpg", "/src/assets/image/table.jpg", "/src/assets/image/paint.jpg",
  "/src/assets/image/mirror.jpg", "/src/assets/image/room.jpg", "/src/assets/image/blue.jpg",
  "/src/assets/image/grey.png", "/src/assets/image/table2.jpg", "/src/assets/image/piano.jpg",
  "/src/assets/image/green-board.jpg", "/src/assets/image/ligth-wall.jpg", "/src/assets/image/yellow-chair.jpg",
  "/src/assets/image/pink-wood.jpg", "/src/assets/image/purple-table.jpg", "/src/assets/image/green-roof.jpg",
  "/src/assets/image/hall.jpg", "/src/assets/image/hall2.jpg", "/src/assets/image/yellow-stand.jpg",
  "/src/assets/image/green-sample.jpg", "/src/assets/image/orange-stand.jpg", "/src/assets/image/pink-wall.jpg",
];

export default function Projects() {
  return (
    <div className="projects-wrapper">
      <div className="projects-gallery">
        {images.map((img, i) => (
          <div key={i} className="project-image-box">
            <img src={img} alt={`Project ${i + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}
