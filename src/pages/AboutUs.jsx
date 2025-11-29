import './AboutUs.css';
import aboutImg from '../assets/image/AboutUS.jpg';
import team1 from '../assets/image/team1.jpg';
import team2 from '../assets/image/team2.jpg';
import team3 from '../assets/image/team3.jpg';
import team4 from '../assets/image/team4.jpg';  
import team5 from '../assets/image/team5.jpg';
import team6 from '../assets/image/team6.jpg';
import team7 from '../assets/image/team7.jpg';
import team8 from '../assets/image/team8.jpg';
import team9 from '../assets/image/team9.jpg';
import team10 from '../assets/image/team10.jpg';  

const team = [
  { img: team1, name: "Phillipine", title: "Designer" },
  { img: team2, name: "Théo", title: "Head of Design" },
  { img: team3, name: "Clara", title: "Production Manager" },
  { img: team4, name: "Louise", title: "Marketing Manager" },
  { img: team5, name: "Julien", title: "Sales Manager" }, 
  { img: team6, name: "Emma", title: "Designer" },
  { img: team7, name: "Lucas", title: "Logistics Coordinator" },
  { img: team8, name: "Sophie", title: "Customer Relations" },
  { img: team9, name: "Maxime", title: "Material Specialist" },
  { img: team10, name: "Clarisse Merlet", title: "Founder & Architect" },
];


  

export default function AboutUs() {
  // Group every 3 in a row and the remaining last element alone
  const teamRows = [];
  for (let i = 0; i < 9; i += 3) {
    teamRows.push(team.slice(i, i + 3));
  }
  const lastRow = [team[9]];

  return (
    <div>
      {/*  AboutUs */}
      <div className="aboutus-flex">
        <div className="aboutus-left">
          <div className="aboutus-details">
            <div><span className="label">First prototype:</span> 10/2016</div>
            <div><span className="label">Company creation:</span> 12/2018</div>
            <div><span className="label">Founder:</span> Clarisse Merlet</div>
            <div><span className="label">Patents:</span> France & Europe</div>
          </div>
        </div>
        <div className="aboutus-divider"></div>
        <div className="aboutus-right">
          <h1 className="aboutus-title">About us</h1>
          <div className="aboutus-p">
            FabBRICK is a unique material designed to elevate spaces. Each brick is handcrafted with meticulous attention to detail, resulting in a rare and timeless product. Far from being just a functional material, FabBRICK embodies a fusion of innovation, craftsmanship, and aesthetics.
          </div>
          <div className="aboutus-p">
            FabBRICK is born from carefully repurposed fabrics, reimagined into a noble material that is both soft to the touch and visually striking. This material stands out for its rich texture, vibrant colors, and its ability to tell a unique story. Every project that incorporates it becomes a work of art, shaped by craftsmanship that values authenticity and the elegance of the hand’s gesture.
          </div>
          <div className="aboutus-p">
            FabBRICK is for those who seek more than just a material—it is a true visual and sensory experience, an invitation to reinvent space and uncover a story worth telling. For those with an appreciation for art, design, and rarity, FabBRICK offers a one-of-a-kind alternative, capable of transforming the ordinary into an exceptional artistic expression.
          </div>
        </div>
      </div>

      {/* 2- big photo in the middle */}
      <div className="aboutus-img-section">
        <img src={aboutImg} alt="About Section" className="aboutus-img-big" />
      </div>

      {/* 3- Our Story section  */}
      <section className="aboutus-story-content">
        <h1 className="aboutus-title-center">Our Story</h1>
        <div className="aboutus-underline"></div>
        <p className="aboutus-story-text">
          The story of FabBRICK is that of Clarisse Merlet, founder and architect driven by a passion for innovation. By reinventing textile upcycling, she gave birth to FabBRICK—a unique material that transforms fabrics into artistic and elegant bricks. With her background in architecture, Clarisse has skillfully combined creativity, craftsmanship, and a deep respect for materials to design a product that is both aesthetic and innovative.
        </p>
        <p className="aboutus-story-text">
          From this inspiring idea, FabBRICK has grown into a creative studio based in Paris’s 19th arrondissement. With a large production workshop and a close-knit team of about ten people, the studio continues to push the boundaries of innovation in art and design. Each project is an invitation to redefine space, where every brick tells a story and every creation becomes a work of art.
        </p>
      </section>

      {/* 4- Our Team section  */}
      <section className="team-section">
        <h2 className="team-title">Our Team</h2>
        <div className="team-underline"></div>
       
        {teamRows.map((row, idx) => (
          <div key={idx} className="team-row">
            {row.map(member => (
              <div className="team-member" key={member.name}>
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} className="team-img" />
                </div>
                <div className="team-name">{member.name}</div>
                <div className="team-title-small">{member.title}</div>
              </div>
            ))}
          </div>
        ))}
        
        <div className="team-row team-row-single">
          <div className="team-member" key={lastRow[0].name}>
            <div className="team-img-wrap">
              <img src={lastRow[0].img} alt={lastRow[0].name} className="team-img" />
            </div>
            <div className="team-name">{lastRow[0].name}</div>
            <div className="team-title-small">{lastRow[0].title}</div>
          </div>
        </div>
      </section>
    </div>
  );
}
