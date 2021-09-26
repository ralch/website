import React from "react";
import Image from "components/Image";
import { Head } from "react-static";

export default () => (
  <>
    <Head>
      <title>Svetlin Ralchev | Contacts</title>
    </Head>
    <section
      className="switchable switchable--switch imagebg height-20"
      data-overlay={4}
    >
      <Image alt="background" src="img/contact-phone.jpg" />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2>Let’s create something that your users will love.</h2>
          </div>
        </div>
      </div>
    </section>
    <section className="switchable">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8 col-lg-7">
            <h2>Connect with me for a FREE consultation.</h2>
            <p className="lead">
              {" "}
              Tell me about your project and how I can help. My best work gets
              done when we can talk face-to-face with you. I'd love to start a
              conversation.{" "}
            </p>
            <p className="lead"> </p>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="text-block">
              <h5>Email</h5>
              <p>links-walleye-02 [at] icloud.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
