import "./App.css";

function App() {
  return (
    <body>
      <header>
        <nav class="navigation">
          <ul>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#publication">Publication</a>
            </li>
          </ul>
        </nav>
        <div class="intro">
          <h1>Labib Ahmed Siddique</h1>
          <h4>Data Scientist, ML Engineer, Data Analyst</h4>
          <p>Seasoned Data Scientist with a love for everything data.</p>
          <section id="socials">
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/labib-ahmed-siddique-355571242">
                  <img src="src/assets/linkedin.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://github.com/LabibAhmedSiddique">
                  <img src="src/assets/github2.png" alt="" />
                </a>
              </li>
              <li>
                <a href="mailto:labibahmedsiddique.0326@gmail.com">
                  <img src="img/gmail.png" alt="" />
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/Cybeast_grazer/">
                  <img src="img/leetcode2.png" alt="" />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </header>
      <main>
        <h1 class="heading">Skills</h1>
        <section id="skills">
          <div class="skill-type">
            <img src="img/programming.png" alt="" />
            <h3>Programming Languages</h3>
            <p>Python 3</p>
          </div>
          <div class="skill-type">
            <img src="img/dbms.png" alt="" />
            <h3>RDBMS Technologies</h3>
            <p>MSSQL, PostgreSQL</p>
          </div>
          <div class="skill-type">
            <img src="img/coding.png" alt="" />
            <h3>Web Development</h3>

            <p>HTML, CSS, Django, FastAPI, Flask</p>
          </div>
          <div class="skill-type">
            <img src="img/ai.png" alt="" />
            <h3>ML and DL</h3>
            <p>
              TensorFlow, OpenCV, Scikit-Learn,
              <br />
              Matplotlib, Pandas, NumPy, NLTK
            </p>
          </div>
          <div class="skill-type">
            <img src="img/pm.png" alt="" />
            <h3>PM Tools</h3>
            <p>Git</p>
          </div>
          <div class="skill-type">
            <img src="img/web-scr.webp" alt="" />
            <h3>Web Scraping</h3>
            <p>BeautifulSoup, Selenium</p>
          </div>
          <div class="skill-type">
            <img src="img/data-analysis-1.png" alt="" />
            <h3>Analytical and Visualization Tools</h3>
            <p>Power BI, Tableau</p>
          </div>
        </section>

        <h1 class="heading">Experience</h1>
        <section id="experience">
          <div class="company-experience">
            <div class="company-title">
              <h3>Data Analyst, Shanta Securities</h3>
              <p>06/2024 – Present | Dhaka, Bangladesh</p>
            </div>
            <div class="description">
              <ul>
                <li>
                  Built and deployed interactive Power BI dashboards for Shanta
                  Securities research, enabling real-time data integration with
                  the public website, increasing traffic. Dashboard link: Shanta
                  Securities research dashboard
                </li>
                <li>
                  Developed various internal Power BI reports to automate manual
                  reporting and streamline decision-making processes, resulting
                  in faster organizational insights.
                </li>
                <li>
                  Automated DSE website data scraping using Python and
                  BeautifulSoup, reducing data collection time to less than 14
                  minutes, eliminating 8 hours of manual work per segment, and
                  ensuring compliance with DSE regulations.
                </li>
                <li>
                  Built a SQL database for the Shanta Securities Research team,
                  synchronizing views from a remote database by building ETL
                  processes with Python.
                </li>
                <li>
                  Wrote SQL queries to uncover trends in data and developed
                  views to speed up analysis.
                </li>
                <li>
                  Built two custom APIs using Flask for ease of data ingestion
                  on several dashboards, enabling comparison of major key
                  metrics in contrast to DSE.
                </li>
                <li>
                  Collaborated with non-tech teams and independently translated
                  business requirements into technical requirements.
                </li>
                <li>
                  Developing an automated system for daily trading and
                  commission data analysis, with results delivered via email
                  using Python and the Mailchimp API.
                </li>
                <li>
                  <strong>Tools and Technologies used:</strong> Python, MSSQL,
                  Power BI, Power BI Services, BeautifulSoup, Excel
                </li>
              </ul>
            </div>
          </div>

          <div class="company-experience">
            <div class="company-title">
              <h3>Trainee Python Developer, Bista Solutions Inc.</h3>
              <p>08/2022 – 12/2022 | Dhaka, Bangladesh</p>
            </div>
            <div class="description">
              <ul>
                <li>
                  Mastered Python Odoo 15 for ERP development, achieving
                  advanced proficiency in a condensed timeframe, and engineered
                  two custom ERP modules. Module links: Employee management
                  system, Inventory management system
                </li>
                <li>
                  Assisted senior developers in optimizing existing ERP modules,
                  reducing backlog through adept debugging and modifications.
                </li>
                <li>
                  <strong>Tools and Technologies used:</strong> Python, Odoo 15,
                  PostgreSQL
                </li>
              </ul>
            </div>
          </div>
        </section>
        <h1 class="heading">Education</h1>
        <section id="education">
          <div class="edu-institute">
            <h2>B.Sc in Computer Science and Engineering</h2>
            <h3>BRAC University</h3>
            <p>CGPA: 3.40 / 4.00</p>
          </div>
        </section>
        <h1 class="heading">Projects</h1>
        <section id="projects">
          <div class="project-card">
            <h3>
              Violence Detection (HAR) Using Video Classification Techniques
            </h3>
            <ul>
              <li>
                Developed violence detection using video classification
                algorithms such as LRCN, ConvLSTM, C3D, and CNN-Transformer with
                TensorFlow 2.6.0 and Keras API 2.6.0.
              </li>
              <li>
                Accounted for special cases (hug, greet, wave) to reduce false
                positives, achieving test accuracy ranging from 76.76% to
                83.33%.
              </li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Bangla Sentence Error Correction Tool</h3>
            <ul>
              <li>
                Built a deep neural network-based seq2seq model with an
                attention mechanism using TensorFlow and Keras for correcting
                errors in Bangla sentences.
              </li>
              <li>
                Deployed the model as an API using FastAPI, achieving an Average
                WER of 0.46, CER of 0.078, and BLEU Score of 0.83.
              </li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Real Estate Price Prediction Application</h3>
            <ul>
              <li>
                Processed Dhaka real estate data using Python’s Pandas library
                and applied machine learning algorithms for price prediction.
                The top-performing model, selected with GridSearchCV, was linear
                regression.
              </li>
              <li>
                Built the frontend with HTML, CSS, and JavaScript, and deployed
                the application on a Flask server.
              </li>
            </ul>
          </div>

          <div class="project-card">
            <h3>Sugarcane Leaf Disease Classification</h3>
            <ul>
              <li>
                Implemented the "Sugarcane Disease Recognition using Deep
                Learning" paper using TensorFlow and examined the authenticity
                of the model architecture.
              </li>
              <li>
                Restructured the model architecture and fine-tuned with
                MobileNetV2 for deployment on edge devices, compared results
                with the existing architecture, and deployed as an API using
                FastAPI.
              </li>
            </ul>
          </div>
          <div class="project-card">
            <h3>Telco Customer Churn Analytics</h3>
            <ul>
              <li>
                Developed a Power BI dashboard for analyzing telco churn,
                providing customer details, reasons for churn, and dataset
                summaries to derive actionable business insights.
              </li>
              <li>
                Enabled data-driven decisions on customer retention by
                identifying various types of churn related to tariff plans,
                services, and prepaid-postpaid usage through comprehensive
                analysis.
              </li>
            </ul>
          </div>
          <div class="project-card">
            <h3>HR Data Analytics</h3>
            <ul>
              <li>
                Designed a Power BI dashboard to track employee data for the HR
                department, including working hours, attendance, performance,
                and leaves. The dashboard streamlined HR processes and increased
                efficiency.
              </li>
              <li>
                This dashboard can save 3-4 hours of work for the HR department
                daily.
              </li>
            </ul>
          </div>
        </section>

        <h1 class="heading">Publication</h1>
        <section id="publication">
          <div class="publication-item">
            <p>
              <strong>
                Analysis of Real-Time Hostile Activity Detection from
                Spatiotemporal Features Using Time Distributed Deep CNNs, RNNs,
                and Attention-Based Mechanisms
              </strong>
            </p>
            <p>1st Author</p>
            <p>
              Fifth IEEE International Conference on Image Processing,
              Applications and Systems (IPAS 2022), Genova, Italy
            </p>
          </div>
        </section>
        <h1 class="heading">Contact me</h1>
        <section id="contact">
          <form action="https://formspree.io/f/xyzyjnqn" method="POST">
            <label>
              Your email:
              <input type="email" name="email" />
            </label>
            <label>
              Your message:
              <textarea name="message"></textarea>
            </label>

            <button type="submit">Send</button>
          </form>
        </section>
      </main>
    </body>
  );
}

export default App;
