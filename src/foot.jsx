function Foot() {
  return (
    <div className="foot">
      <div className="foot-one">
        <article>
          <p>Task Name</p>
          <input type="text" placeholder="10 Jun 2017" className="foot-in" />
        </article>
        <article>
          <p>Task Description</p>
          <textarea
            cols="50"
            rows="17"
            className="text"
            placeholder="Add a description"
          />
        </article>
      </div>
      <div className="sec-foot">
        <div className="foot2">
          <p>Working on this</p>
          <div className="foot21">
            <img src="./src/assets/img/user2.jpg" className="img" />
            <img src="./src/assets/img/user1.jpg" className="img" />
            <header>
              <p>+</p>
            </header>
          </div>
        </div>
        <div className="foot3">
          <p>Attachments</p>
          <div className="foot31">
            <img
              src="./src/assets/img/6437301a058839147e4cdf3a_Agate-Rubene_Nordic-Queen.webp"
              className="img1"
            />
            <img src="./src/assets/img/Digital-art.jpg" className="img1" />
            <img src="./src/assets/img/download.jpg" className="img1" />
            <img
              src="./src/assets/img/Vincent_van_Gogh_-_Road_with_Cypress_and_Star_-_c._12-15_May_1890.jpg"
              className="img1"
            />
            <img
              src="./src/assets/img/pexels-matheus-viana-2372982.jpg"
              className="img1"
            />
            <feet>
              <p>+</p>
            </feet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Foot;
