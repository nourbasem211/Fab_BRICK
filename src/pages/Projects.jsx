import './Projects.css';

// Import all images
import light from '../assets/image/light.jpg';
import table from '../assets/image/table.jpg';
import paint from '../assets/image/paint.jpg';
import mirror from '../assets/image/mirror.jpg';
import room from '../assets/image/room.jpg';
import blue from '../assets/image/blue.jpg';
import grey from '../assets/image/grey.png';
import table2 from '../assets/image/table2.jpg';
import piano from '../assets/image/piano.jpg';
import greenBoard from '../assets/image/green-board.jpg';
import ligthWall from '../assets/image/ligth-wall.jpg';
import yellowChair from '../assets/image/yellow-chair.jpg';
import pinkWood from '../assets/image/pink-wood.jpg';
import purpleTable from '../assets/image/purple-table.jpg';
import greenRoof from '../assets/image/green-roof.jpg';
import hall from '../assets/image/hall.jpg';
import hall2 from '../assets/image/hall2.jpg';
import yellowStand from '../assets/image/yellow-stand.jpg';
import greenSample from '../assets/image/green-sample.jpg';
import orangeStand from '../assets/image/orange-stand.jpg';
import pinkWall from '../assets/image/pink-wall.jpg';

const images = [
  light, table, paint,
  mirror, room, blue,
  grey, table2, piano,
  greenBoard, ligthWall, yellowChair,
  pinkWood, purpleTable, greenRoof,
  hall, hall2, yellowStand,
  greenSample, orangeStand, pinkWall
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
