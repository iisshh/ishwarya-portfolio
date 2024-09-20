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
                      Programming Languages
                    </a>
                  </div>

                  <div
                    id="faq1"
                    class="collapse"
                    aria-labelledby="faqhead1"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    Java 8, Python, Kotlin, C++, Groovy script
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
                      Web Technologies and Services
                    </a>
                  </div>

                  <div
                    id="faq2"
                    class="collapse"
                    aria-labelledby="faqhead2"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    HTML, CSS, Bootstrap 5, JavaScript, Angular, React, REST APIs, Swagger
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
                      Databases and Messaging/Queueing Systems
                    </a>
                  </div>

                  <div
                    id="faq3"
                    class="collapse"
                    aria-labelledby="faqhead3"
                    data-parent="#faq"
                  >
                    <div class="card-body">Postgres, Oracle, MySQL, MongoDB, Redis, RabbitMQ, Kafka</div>
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
                      Servers and Tools
                    </a>
                  </div>

                  <div
                    id="faq4"
                    class="collapse"
                    aria-labelledby="faqhead4"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    Tomcat, Grafana, JIRA, Jenkins
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
                      Software Development Methodologies
                    </a>
                  </div>

                  <div
                    id="faq5"
                    class="collapse"
                    aria-labelledby="faqhead5"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    Software Development Life Cycle (SDLC), Agile, Scrum
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead6">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq6"
                      aria-expanded="true"
                      aria-controls="faq6"
                    >
                      Testing Tools
                    </a>
                  </div>

                  <div
                    id="faq6"
                    class="collapse"
                    aria-labelledby="faqhead6"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    JUnit, Selenium, Postman, Mockito, SonarQube
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead7">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq7"
                      aria-expanded="true"
                      aria-controls="faq7"
                    >
                      Cloud, Virtualization and Containerization
                    </a>
                  </div>

                  <div
                    id="faq7"
                    class="collapse"
                    aria-labelledby="faqhead7"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    DynamoDB, SQS, EC2, S3, Cloud watch, Lambda, OpenStack, KVM, VMware, GCP, Kubernetes, Docker
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead8">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq8"
                      aria-expanded="true"
                      aria-controls="faq8"
                    >
                      Version Control & IDE
                    </a>
                  </div>

                  <div
                    id="faq8"
                    class="collapse"
                    aria-labelledby="faqhead8"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    SVN, Github, Bitbucket, IntelliJ, Eclipse, Pycharm, Visual studio
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead9">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq9"
                      aria-expanded="true"
                      aria-controls="faq9"
                    >
                      Architecture and Design
                    </a>
                  </div>

                  <div
                    id="faq9"
                    class="collapse"
                    aria-labelledby="faqhead9"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    MVC architecture, Object-Oriented Design, TDD
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead10">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq10"
                      aria-expanded="true"
                      aria-controls="faq10"
                    >
                      Build Tools
                    </a>
                  </div>

                  <div
                    id="faq10"
                    class="collapse"
                    aria-labelledby="faqhead10"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    Maven, Gradle
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="faqhead11">
                    <a
                      href="#"
                      class="btn btn-header-link collapsed"
                      data-toggle="collapse"
                      data-target="#faq11"
                      aria-expanded="true"
                      aria-controls="faq11"
                    >
                      Gen AI Technologies
                    </a>
                  </div>

                  <div
                    id="faq11"
                    class="collapse"
                    aria-labelledby="faqhead11"
                    data-parent="#faq"
                  >
                    <div class="card-body">
                    LLM (Llama3), Langchain
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
              data="/Ishwarya Hidkimath Basavaraj Resume.pdf"
              type="application/pdf"
              width="100%"
              height="800px"
            >
              <p>
                Unable to display PDF file.{" "}
                <a href="/Ishwarya Hidkimath Basavaraj Resume.pdf">Download</a>{" "}
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
