import React from "react";
import Header from "../Components/header";
import LeetCodeProfile from "../Components/leetcodeProfile";

const Recruiters = () => {
  return (
    <>
      <Header />
      <section class="section-services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Technical Skills</h2>
                {/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
              </div>
            </div>
          </div>
          <div id="main">
            <div class="container">
              <div class="accordion" id="faq">
                <div class="card">
                  <div class="card-header" id="faqhead1">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq1"
                      aria-expanded="true"
                      aria-controls="faq1"
                    >
                      Programming Language
                    </a>
                  </div>

                  <div
                    id="faq1"
                    class="collapse"
                    aria-labelledby="faqhead1"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                      Java 8, Python 3, C++, HTML, CSS, Java Script, SQL, Shell
                      scripting, Groovy
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead2">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq2"
                      aria-expanded="true"
                      aria-controls="faq2"
                    >
                      Libraries and frameworks
                    </a>
                  </div>

                  <div
                    id="faq2"
                    class="collapse"
                    aria-labelledby="faqhead2"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                      Spring boot, MVC architecture, Microservices, Rest API,
                      React
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead3">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq3"
                      aria-expanded="true"
                      aria-controls="faq3"
                    >
                      Databases
                    </a>
                  </div>

                  <div
                    id="faq3"
                    class="collapse"
                    aria-labelledby="faqhead3"
                    data-parent="#faq"
                  >
                    <div class="card-body">PostgreSQL, MongoDB, MySQL</div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead4">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq4"
                      aria-expanded="true"
                      aria-controls="faq4"
                    >
                      Application, Tools and Operating System
                    </a>
                  </div>

                  <div
                    id="faq4"
                    class="collapse"
                    aria-labelledby="faqhead4"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                      Jenkins, Maven, Postman, AWS, Open Stack, Kubernetes,
                      Docker, GIT, kafka, Selenium, Mongo compass, IntelliJ,
                      Eclipse, Pycharm, Visual studio, Unix, Grafana, Tomcat,
                      Agile development, Mockito
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead5">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq5"
                      aria-expanded="true"
                      aria-controls="faq5"
                    >
                      Other Skills
                    </a>
                  </div>

                  <div
                    id="faq5"
                    class="collapse"
                    aria-labelledby="faqhead5"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                      Data Structures, Algorithms, Security software
                      development, Distributed and parallel systems
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h2 class="title">Resume</h2>
                {/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
              </div>
            </div>
          </div>
          <div id="main"> 
            <object
              data="/Ishwarya_Hidkimath_Basavaraj_Resume.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
            >
              <p>
                Unable to display PDF file.{" "}
                <a href="/Ishwarya_Hidkimath_Basavaraj_Resume.pdf">Download</a>{" "}
                instead.
              </p>
            </object>
          </div>
          <div class="row justify-content-center text-center">
            <div class="col-md-12 col-lg-12">
              <div class="header-section">
                <h2 class="title">Leetcode Profile</h2>
                <LeetCodeProfile/>
                {/* <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada fermentum purus, eu volutpat nisi laoreet id. Phasellus fringilla accumsan metus, at tempor est hendrerit et.</p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruiters;
