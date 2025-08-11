import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import logoIcon from "./images/fotos-icon.png";
import weddingImage from "./images/p2rightdisplay.png";
import step1Image from "./images/hiw1.png"
import step2Image from "./images/hiw2.png"
import step3Image from "./images/hiw3.png"
import feature1Image from "./images/feature1.png"
import feature2Image from "./images/feature2.jpg"
import feature3Image from "./images/feature3.png"
import feature4Image from "./images/feature4.png"
import "./App.css";
import CameraBrands from "./CameraBrands";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
      <div>
        <div className="p1" >
    <div className="header">
      <div className="logo">
        <img src={logoIcon} alt="Fotos logo" className="logo-icon" />
      </div>
      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <a href="#hiw" onClick={() => setMenuOpen(!menuOpen)}>How it works</a>
        <a href="#features" onClick={() => setMenuOpen(!menuOpen)}>Features</a>
        <a href="#brands" onClick={() => setMenuOpen(!menuOpen)}>Supported cameras</a>
        <a href="#pricing" onClick={() => setMenuOpen(!menuOpen)}>Pricing</a>
        <button className="btn-primary">Download for FREE</button>
      </nav>

    </div>
    <div className="p2">
      <div className="text-image-section">
        <div className="p2left">
          <div className="p2leftone"><h1>Speed and safety for your creativity!</h1></div>
          <div className="p2lefttwo">
            <p>Camera to cloud backup for RAW images in 5-sec's with power of Edge computing.</p>
          </div>
          <div className="p2leftthree">
          <button className="btn-primary">Download for FREE</button>
          <p className="p2leftthreetext">100 people like you have purchased this product!</p>
          </div>
        </div>
        <div className="p2right">
          <img className="p2rightimage" src={weddingImage} alt="Example" />
        </div>
      </div>
    </div>
  </div>
    <div id="hiw" className="hiw">
      <div className="step">
        <div className="stepheader"><h4>1. Connect to Wi-Fi</h4></div>
        <div className="stepexplaination">Connect your camera and laptop to same Wi-Fi</div>
        <div><img className="stepimage1" src={step1Image} alt="" /></div>
        <div className="stepextrainfo">Auto-Detection<br/>FTP instant sync</div>
      </div>
      <div className="step">
        <div className="stepheader"><h4>2. Shoot</h4></div>
        <div className="stepexplaination">Photos sync automatically via secure FTP and PC on Wi-Fi.</div>
        <div><img className="stepimage2" src={step2Image} alt="" /></div>
        <div className="stepextrainfo">High-Speed <br/>Up to 100MB/s</div>
      </div>
      <div className="step">
        <div className="stepheader"><h4>3. Backup</h4></div>
        <div className="stepexplaination">RealTime Encrypted backup with 321 practise to 3 different AWS data centres.</div>
        <div><img className= "stepimage3" src={step3Image} alt="" /></div>
        <div className="stepextrainfo">256-bit Encryption <br/>  Military-grade</div>
      </div>
    </div>
    <div id="features" className="features">
      <div className="feature">
        <div className="featurename">I Triple Redundancy</div>
        <div className="featureexplaination">Retaining three different backups with SD card, PC and Cloud. Ensuring 99.9% data redundancy.</div>
      </div>
      <div className="feature">
        <div className="featurename">I RAW File support</div>
        <div className="featureexplaination">Built for Pro-photography teams who work with RAW formats and heavy workloads and aim for perfection.</div>
      </div>
      <div className="feature">
        <div className="featurename">I One click Sync & easy setup</div>
        <div className="featureexplaination">Setup once and forget, Camera auto connects when required. You are a tap away to cloud upload.</div>
      </div>
    </div>

    <div className="feature1">
      <div className="feature1left">
      <div className="feature1text">
        <h1>Shoot. Sync. Done.</h1>
      </div>
        <div className="featuredescription">
          <p>saving them automatically while you shoot. No need to copy files or worry about missing images.</p>
        </div>
      <div className="factchecks">
      <ul style={{ listStyle: "none", padding: 0 }}>
      <li><FaCheck color="black" /> Camera to your PC in real time using FTP</li>
      <li><FaCheck color="black" /> Saved to a local folder and to secure cloud storage</li>
      <li><FaCheck color="black" /> Built for RAW formats</li>
    </ul>
      </div>
    </div>
      <div>
        <img className="feature1image" src={feature1Image} alt="Placeholder" />
      </div>
    </div>
    <div className="feature1">
    <div>
        <img className="feature1image" src={feature2Image} alt="Placeholder" />
      </div>
      <div className="feature1left">
      <div className="feature1text">
        <h1>Shoot now. Edit now.</h1>
      </div>
        <div className="featuredescription">
          <p>Lets your team start editing while the shoot is still going on. This saves time and speeds up delivery.</p>
        </div>
      <div className="factchecks">
      <ul style={{ listStyle: "none", padding: 0 }}>
      <li><FaCheck color="black" /> Editors can access new photos from the cloud in real time.</li>
      <li><FaCheck color="black" /> Teams can work together using one shared cloud folder.</li>
      <li><FaCheck color="black" /> Editing, selecting, and sharing can start immediately</li>
      <li><FaCheck color="black" /> Speeds up delivery from days to just a few hours.</li>
    </ul>
      </div>
    </div>
    </div>
    <div className="feature1">
      <div className="feature1left">
      <div className="feature1text">
        <h1>One Shoot. Three Continents. <br/> Zero Risk</h1>
      </div>
        <div className="featuredescription">
          <p>Fotos saves your footage in three continents and practises policy of 3-2-1-1-0 for data redundancy.</p>
        </div>
      <div className="factchecks">
      <ul style={{ listStyle: "none", padding: 0 }}>
      <li><FaCheck color="black" /> 3 Copies as SD card, PC, other 3 on cloud.</li>
      <li><FaCheck color="black" /> Backed by Amazon web services (AWS)</li>
      <li><FaCheck color="black" /> Fotos handles everything, backups are automated.</li>
    </ul>
      </div>
    </div>
      <div>
        <img className="feature1image" src={feature3Image} alt="Placeholder" />
      </div>
    </div>

    <div className="feature1">
    <div>
        <img className="feature1image" style={{borderRadius: '20px'}} src={feature4Image} alt="Placeholder" />
      </div>
      <div className="feature1left">
      <div className="feature1text">
        <h1>Connected tools, Continuous flow.</h1>
      </div>
        <div className="featuredescription">
          <p>Fotos plugs into existing tools seamlessly to reduce friction and enhance output and speed.  </p>
        </div>
    </div>
      
    </div>
    </div>
  );
}
