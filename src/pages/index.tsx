import React from "react";
import Image from "components/Image";
import { Link } from "@reach/router";
import { Head } from "react-static";

export default () => (
  <>
    <Head>
      <title>Svetlin Ralchev | Home</title>
    </Head>
    <section
      className="text-center imagebg space--lg parallax"
      data-overlay={7}
    >
      <Image alt="background" src="img/marvin-meyer-571072-unsplash.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-lg-6">
            <div className="cta">
              <h2>Let's turn awesome ideas into brilliant software products</h2>
              <p className="lead">
                It's been my mission to make software better for everyone ever
                since. I transform the customer’s business into a
                software-driven company.
              </p>
              <Link className="btn btn--primary type--uppercase" to="products">
                <span className="btn__text">See what i have made</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="switchable">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-12 col-lg-12">
            <h2>Values</h2>
            <p className="lead">
              I emphasize teamwork. I am a partner with organizations of all sizes
              to design, develop, and scale their products. I can solve their
              business challenges by designing software solutions. I am
              building innovation by leveraging cloud native systems.
            </p>
            <p className="lead">
              I am an expert in Golang, Backend software development and DevOps.
              From concept to launch I apply lean startup principles and agile
              engineering practices to creating new products and line of
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="imagebg" data-overlay={7}>
      <Image alt="background" src="img/matteo-vistocco-240766-unsplash.jpg" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="process-1">
              <div className="process__item">
                <h4>Simplicity</h4>
                <p>
                  We will do what is needed and asked for, but no more. This
                  will maximize the value created for the investment made to
                  date. We will take small simple steps to our goal and mitigate
                  failures as they happen. We will create something we are proud
                  of and maintain it long term for reasonable costs.
                </p>
              </div>
              <div className="process__item">
                <h4>Communication</h4>
                <p>
                  Everyone is part of the team and we communicate face to face
                  daily. We will work together on everything from requirements
                  to code. We will create the best solution to our problem that
                  we can together.
                </p>
              </div>
              <div className="process__item">
                <h4>Feedback</h4>
                <p>
                  We will take every iteration commitment seriously by
                  delivering working software. We demonstrate our software early
                  and often then listen carefully and make any changes needed.
                  We will talk about the project and adapt our process to it,
                  not the other way around.
                </p>
              </div>
              <div className="process__item">
                <h4>Respect</h4>
                <p>
                  Everyone gives and feels the respect they deserve as a valued
                  team member. Everyone contributes value even if it's simply
                  enthusiasm. Developers respect the expertise of the customers
                  and vice versa. Management respects our right to accept
                  responsibility and receive authority over our own work.
                </p>
              </div>
              <div className="process__item">
                <h4>Courage</h4>
                <p>
                  We will tell the truth about progress and estimates. We don't
                  document excuses for failure because we plan to succeed. We
                  don't fear anything because no one ever works alone. We will
                  adapt to changes whenever they happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
