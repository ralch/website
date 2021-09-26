import React from "react";
import Image from "components/Image";
import { Head } from "react-static";

export default () => (
  <>
    <Head>
      <title>Svetlin Ralchev | About</title>
    </Head>
    <section
      className="switchable switchable--switch imagebg section--ken-burns height-20"
      data-overlay={7}
    >
      <Image alt="background" src="img/fashion-men-vintage-colorful.jpg" />
      <div className="container pos-vertical-center">
        <div className="row">
          <div className="col-md-12">
            <h2></h2>
          </div>
        </div>
      </div>
    </section>
    <section className="switchable feature-large">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-6">
            {" "}
            <img
              alt="Image"
              className="border--round"
              src="img/svetlin-ralchev-founder.jpg"
            />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="switchable__text">
              <div className="text-block">
                <h2>Svetlin Ralchev</h2> <span>Software Consultant</span>
              </div>
              <p>
                Svetlin has a solid experience in the USA, UK, UAE, Denmark, and
                Bulgaria. He does run all aspects of his consulting business.
              </p>
              <p>
                Prior to that, Svetlin served as a Lead Software Engineer
                for Pivotal Software (acquired by VMWare), where he worked on
                PCF RabbitMQ and open source PaaS Cloud Foundry. Before, his
                role there, he worked at Telerik Inc., where he helped to create
                the industry-leading UI components for desktop and mobile
                devices.
              </p>
              <ul className="social-list list-inline list--hover">
                <li className="list-inline-item">
                  <a href="https://uk.linkedin.com/in/ralchev">
                    <i className="socicon socicon-linkedin icon icon--xs" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/ralch">
                    <i className="socicon socicon-twitter icon icon--xs" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://github.com/iamralch">
                    <i className="socicon socicon-github icon icon--xs" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
