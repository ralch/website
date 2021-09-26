import React from "react";
import Image from "components/Image";
import { Head } from "react-static";

export default () => (
  <>
    <Head>
      <title>Svetlin Ralchev | Projects</title>
    </Head>
    <section
      className="switchable switchable--switch imagebg height-20"
      data-overlay={4}
    >
      <Image alt="background" src="img/products-blueprint.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>What I Have Made</h2>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="masonry">
          <div className="masonry__container row masonry--active">
            <div
              className="masonry__item col-md-6 text-center filter-print"
              data-masonry-filter="Print"
            >
              <div className="project-thumb">
                <a href="https://github.com/phogolabs/prana">
                  <img
                    alt="Image"
                    className="border--round"
                    src="img/logo-prana.png"
                  />
                </a>
                <h4>Prana: Database Manager and Code Generator</h4>
                <span>Open Source</span>
              </div>
            </div>
            <div
              className="masonry__item col-md-6 text-center filter-print"
              data-masonry-filter="Print"
            >
              <div className="project-thumb">
                <a href="https://github.com/phogolabs/orm">
                  <img
                    alt="Image"
                    className="border--round"
                    src="img/logo-oak.png"
                  />
                </a>
                <h4>ORM: Database Query Executor</h4>
                <span>Open Source</span>
              </div>
            </div>
            <div
              className="masonry__item col-md-6 text-center filter-print"
              data-masonry-filter="Print"
            >
              <div className="project-thumb">
                <a href="https://github.com/phogolabs/parcello">
                  <img
                    alt="Image"
                    className="border--round"
                    src="img/logo-parcello.png"
                  />
                </a>
                <h4>Parcello: Resource Bundler for Golang</h4>
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
