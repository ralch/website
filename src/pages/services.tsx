import React from "react";
import Image from "components/Image";
import { Head } from "react-static";

export default () => (
  <>
    <Head>
      <title>Svetlin Ralchev | Services</title>
    </Head>
    <section className="imageblock switchable feature-large bg--secondary">
      <div className="imageblock__content col-lg-6 col-md-4 pos-right">
        <Image src="img/business-woman-flow-chart_4460x4460.jpg" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-7">
            <h2>What I Do</h2>
            <p className="lead">
              I am building cloud-native solutions, backend applications, and
              microservices. I'll help you understand not just how but why we
              build your project in a particular way.
            </p>
            <p className="lead">
              My strategic focus is Golang and Open Source technologies, but I
              am not limited to them. We'll put the right technologies on your
              radar and make sure you get the advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg--white">
      <div className="container">
        <div className="process-2 row">
          <div className="col-md-3">
            <div className="process__item">
              <h5>Web Development</h5>
              <p>
                I can ship web applications that work on any device by using the
                latest web technologies: React, Redux, TypeScript and FlowType.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="process__item">
              <h5>Backend Development</h5>
              <p>
                I can build RESTful APIs and high-available microservices that
                scale into the future. We are experts in Golang, C# and .NET.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="process__item">
              <h5>Cloud Operations</h5>
              <p>
                By leveraging state-of-the-art open source configuration
                management tools, we aim to reduce human error in the deployment
                process. I can help you ship your project effortlessly by
                coninous delivery with tools such as Concourse, Docker, Ansible,
                Terraform and BOSH.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="process__item">
              <h5>Digital Transformation</h5>
              <p>
                I am geared to give you an overarching idea of how an
                automated workflow can bring new efficiency to your business. I
                can teach you the best ways to modernize your business process.
                I'll consult and train organisation to use TDD, XP and Cloud
                Foundry
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
