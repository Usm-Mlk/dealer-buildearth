import React from 'react';
import {
  CommonHeader,
  NavLogo,
  CommonContent,
  CommonFooter,
  LatestPost
} from "components/commons";
import { Navigation } from "components/home/components";
import {cfg} from "config/default";
import Founder from "components/about/components/founder";
import OurValues from "components/about/components/our-values";
import AssociatesSlider from "components/about/components/slider";

const About = () => {
  return (
    <React.Fragment>
      <NavLogo className={true} />
      <Navigation />
      <div id="full-page">
        <CommonHeader title="About" />
        {cfg.aboutPageContent.map((content) => (
          <CommonContent key={content} {...content} />
        ))}
        <Founder />
        <CommonContent
          {...{
            classes: "our-founder",
            paragraph: ` 
              Build earth was established in Lahore, Pakistan, in 2010. It is a company based on teamwork,
              unequalled customer service and innovation. Simply put, we are a network of superior, entrepreneurial
              real estate company built on faith, respect, fun and support. To excel in the real estate sector, Build
              Earth has taken an initiative to boost the national economy by developing commercial projects Al-Jalil
              Gardens Housing Scheme, Al-Noor Orchard Housing Scheme and Al Aziz Residential. We are making sure to
              further contribute our efforts for Pakistan’s development in the years to come.
            `,
            beforeColorText: "",
            colorText: "Our",
            afterColorText: "Story",
          }}
        />
        <OurValues />
        <AssociatesSlider />
        <CommonContent
          {...{
            classes: "our-achievement",
            paragraph: ` 
                A paragraph is a series of related sentences developing a central idea, called the topic.
                Try to think about paragraphs in terms of thematic unity: a paragraph is a sentence or a
                group of sentences that supports one central, unified idea. Paragraphs add one idea at a
                time to your broader argument.
              `,
            beforeColorText: "",
            colorText: "Our",
            afterColorText: "Achievement",
            otherHTMLContent: (
              <img
                className="img-fluid"
                src="https://buildearth.s3.us-east-2.amazonaws.com/img/about/Certificate.jpg"
                alt="Certificate"
              />
            ),
          }}
        />
        <LatestPost />
        <CommonFooter />
      </div>
    </React.Fragment>
  );
};

export default About;