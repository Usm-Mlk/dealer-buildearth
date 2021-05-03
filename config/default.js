import React from "react";
import { CommonContent } from "components/commons";

export const cfg = {
  scripts: [
    "https://code.jquery.com/jquery-3.2.1.slim.min.js",
    "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js",
    "https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/plugins/CSSPlugin.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.js",
    "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js",
    "https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js",
    "/js/loader.js",
    "/js/nav.js",
    "/js/scrollMagic.js",
    "/js/slider.js",
  ],
  latestPostImages: [
    "https://buildearth.s3.us-east-2.amazonaws.com/img/marina/Marina.png",
    "https://buildearth.s3.us-east-2.amazonaws.com/img/noor/Noor.png",
    "https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Jalil+Garden.png",
    "https://buildearth.s3.us-east-2.amazonaws.com/img/about/Post+Img+1.png",
  ],
  latestPostContent: [
    {
      heading: "Exterior Design Trends",
      description: `
        Your exterior design will always be as important as your interior design
        because it is what the public sees.
      `,
    },
    {
      heading: "Interior Design Trends",
      description: `
        Interior design will always be as important as your interior design
        because it is what the public sees.
      `,
    },

    {
      heading: "Modern Design Trends",
      description: `
        Modern design will always be as important as your interior design
        because it is what the public sees.
      `,
    },

    {
      heading: "Architectural Design Trends",
      description: `
        Architectural design will always be as important as your interior design
        because it is what the public sees.
      `,
    },
  ],
  homePageProperties: [
    {
      url: "/projects/al-jalil-garden",
      name: (
        <h1 className="jalil-heading">
          Al J<span className="blind-text">alil Gard</span>en
        </h1>
      ),
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/Jalil+Garden.png",
      website: "",
    },
    {
      url: "/projects/al-noor-orchard",
      name: (
        <h1 className="noor-heading">
          Al N<span className="blind-text">oor Orc</span>hard
        </h1>
      ),
      image: "https://buildearth.s3.us-east-2.amazonaws.com/img/noor/Noor.png",
      website: "",
    },
    {
      url: "/projects/west-marina",
      name: (
        <h1 className="marina-heading">
          W<span className="blind-text">est Mari</span>na
        </h1>
      ),
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/marina/Marina.png",
      website: "",
    },
  ],
  aboutPageContent: [
    {
      classes: "what-section",
      paragraph: ` 
        Build earth is shaping the future of real estate. We assemble together all real estate professionals and
        we make sure
        quality and content gain the victory. Our aim is to provide diverse services for secure assets including
        Architectural &amp;
        Urban Planning, Construction Planning &amp; Management, Construction &amp; Development, Infrastructure,
        Development &amp; Road
        Works, Project Management and Marketing &amp; Promotions.
      `,
      beforeColorText: "What",
      colorText: "We",
      afterColorText: "Are?",
    },
    {
      classes: "our-vision",
      paragraph: ` 
        To become the leading real estate company in Pakistan, and to provide world class real estate assistance
        that meet out consumers’ needs at all times. Satisfaction of our consumers is the prime concern of Build
        Earth. Along with providing precise and up-to-date skilled analysis, information and sound real estate
        consultancy and to also make the selling and buying of real estate faster, economical, and easier.
      `,
      beforeColorText: "",
      colorText: "Our",
      withCircles: true,
      afterColorText: "Vision",
    },
    {
      classes: "our-mission",
      paragraph: ` 
        Our mission is to come up with an exquisite level of service, excellence and expertise in the real estate
        market to our consumer. To always keep in mind that behind every real estate deal, there is always a person
        or family involved. To take action in the best interest of our clients, by offering undoubted ethics on all
        agreements and to flourish long-lasting relationships with our consumers by offering exceptional service and
        utmost customer satisfaction.
      `,
      beforeColorText: "",
      colorText: "Our",
      afterColorText: "Mission",
    },
  ],

  newsContents: [
    {
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
      url: "real-estate-and-interior-design",
      content: `
      <div class="container post-detail">
        <div class="row">
          <div class="col-md-12">
            <h1 class="post-detail-heading">REAL ESTATE AND INTERIOR DESIGN</h1>
            <p class="post-paragraph">
                The role of the real estate executive and interior designer may seem worlds apart. But real estate interior design is
                acknowledged&nbsp;as an important part of the real estate market. Any interior design is likely to be seen as a big plus by
                real estate firms especially when it comes to uniting clients with their dream home, or businesses with the perfect
                premises. Combining real estate and interior design can lead to a truly rewarding career.

            </p>
            <p class="post-paragraph-dark">
                “Real estate and interior design is a match made in heaven”
            </p>
            <p class="post-paragraph">
                As well as having ‘the eye’, interior designers have the contacts and know-how required to turn a property with
                potential into a desirable home. This is what will give them an edge in a competitive marketplace. Those who are
                passionate about their work, and enjoy hands-on relationships with clients from all backgrounds and walks of life, will
                then be able to sell that home for its maximum possible value.
            </p>
            <p class="post-paragraph">
                When an interior designer shows a home to a realtor, he/she encourages clients to take design risks and consider
                high-end upgrades. There is great value in real estate when you renovate, especially when you update the kitchen and
                bathrooms. Even the most stubborn buyers can be persuaded with a huge spike in resale value!
            </p>
            <p class="post-paragraph-dark">
                “We help the client see what a Home could be”
            </p>
          </div>
        </div>
      </div>
      `,
    },
    {
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
      url: "al-jalil-garden",
      mainHeading: "Al Jalil Garden Is Welcoming You!",
      p1: `
       Lahore is a welcoming and one of the most famous and prominent cities of the world. In Pakistan, Lahore holds
       much importance since the city is the business and economic hub for the country. Lahore’s population is 11.13
       million according to the census of 2017 which makes Lahore the second most populated city of Pakistan.
      `,
      p2: `
      Living in Lahore brings
      you lots of opportunities to earn good and to have a great lifestyle. Numerous housing societies have
      been developed in
      the city which assures a good life style and living needs of the citizen. Al-Jalil Gardens is considered
      as the premium
      housing communities which provide economical living in the most perfect location. The trendsetting
      lifestyle makes this
      society an ideal place. Al-Jalil Gardens is a highly economical, well-planned and aesthetically designed
      housing society
      that offers basic, standard and luxurious facilities to its colony in a secured environment. Al-Jalil
      Gardens is the
      definitions of safe haven, far from the city hustle yet still approachable from the major locations in
      the city.
      `,
      p3: `
      Al Jalil Garden Housing Scheme (AJG) spans over hundreds of acres of prime location land on
      main Jaranwala/Sharaqpur Road opposite the M-2 Motorway’s Main Faizpur Interchange. “AJG” – Having easy
      access from
      Motorway, GT road, Mall Road, District Court Lahore, Thokar Niaz Baig, Multan Road and surrounding
      areas. Development
      work is progressing at a steady yet consistent pace.
      `,
      h1: `
      Where to locate Al Jalil Gardens
      `,
      h2: `What Al Jalil Gardens offers`,
      p4: `
      The society offers the residential
      plots of 3, 5, 8, 10 and 20 Marla which you can own by following the installment plan. To make the
      investment process
      easier for the investors, the society has introduced an easy payment plan.
      `,
      h3: "Al Jalil Gardens Amenities",
      p5: `Following are the
                amenities offered by the Al-Jalil Gardens;`,
      listContent: [
        "Uninterrupted gas &amp; electricity supply",
        "Green belts &amp; beautifully landscaped parks",
        "Wide and fully carpeted roads",
        "Well-managed drainage system",
        "High security surveillance",
        "Commercial plots",
        "A Jamia Masjid",
        "Gymnasium",
        "Pizza Hut",
        "Gloria Jeans",
        "UBL/Apna bank",
        "UOL jalil campus",
        "Stepping stone school",
      ],
    },
    {
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
      url: "pakistan-inflation",
      mainHeading: "Pakistan's Inflation",
      p1: `
        Pakistan’s high inflation makes it appear that house prices are rising strongly. But it’s an illusion.
        Nationwide house prices, in nominal terms, rose by 5.05% to PKR 10,875 (US$ 77) per square feet (sq. ft)
        during the year to Q1 2019, according to Pakistan’s largest property portal zameen.com. However when adjusted
        for inflation, house prices actually dropped 3.98% over the same period.
      `,
      p2: `
       Quarter-on-quarter, nationwide house prices rose by a meager 0.95% in Q1 2019
       (fell by 2.07% when adjusted for inflation).
      `,
      p3: `
      In March 2019, Pakistan’s inflation stood at 9.4%, up from 8.2% in the previous month and 3.2% in the same period
      last year, according to the Pakistan Bureau of Statistics (PBS). In fact, it was the highest level recorded since
      November 2013.
      
      `,
      h1: `Pakistan house prices`,
      h2: `In Pakistan’s major cities:`,
      h3: ``,
      p4: `
      In Lahore, the average house price was PKR 10,402 (US$ 73) per sq. ft in Q1 2019, up 6.25% from a year earlier,
      but actually down 2.89% when adjusted for inflation. In Karachi, house prices averaged PKR 13,158 (US$ 93) per sq.
       ft in Q1 2019, up 4.25% from the previous year, but down 4.62% when adjusted for inflation.
      `,
      p5: `
     In Islamabad, house prices averaged PKR 9,985 (US$ 70) per sq. ft in Q1 2019, up by 7.01% from a year earlier, but down 2.2% in real terms.

The Pakistani rupee (PKR) lost about 25% of its value against the US dollar in just two years, from PKR 104.804 =US$1 in March 2017 to PKR 139.177 = US$1 in March 2019. The State Bank of Pakistan (SBP), the country’s central bank, devalued its currency several times last year, as the government negotiates a bailout with the International Monetary Fund (IMF) to address its ballooning current account and fiscal deficits that threaten to trigger a balance of payments crisis.
      `,
      listContent: [],
    },
    {
      image:
        "https://buildearth.s3.us-east-2.amazonaws.com/img/post/Lion+Left.svg",
      url: "west-marina",
      mainHeading: "Al Noor Orchard",
      p1: `
      Lahore the capital city of Punjab and famously known as the Heart of Pakistan. This city is the center of trade
      and business for the peoples from all over the Punjab province. Every year about 0.3 million people travel to
      this city and settle here. Al Jalil developer is a reliable brand in the real estate industry which is providing
      its services from over the years and after the success of Al Jalil Gardens and now the developers have launched a
      new project in the shape of Al Noor Orchard which is an excellent addition in the real estate industry of Lahore.
      `,
      p2: `
        Al Jalil developers have gained the reputation as one of the best real estate developers in the city due to their
      unique architecture and with state of the art facilities.
      `,
      p3: `
      Al Noor Orchard is located on the main Sharaqpur road which is 3 km away from the Al Jalil Gardens which is on
      the other side of Al Noor Orchard. This housing scheme is situated 3 km away from the Faizpur interchange close
      to the motorway M-2. This housing society is near Lahore ring road which connects the housing society to the
      main city centers. This ideal location is the main attraction for the housing scheme which influences the
      investors and buyers to invest in this project.
      
      `,
      h1: `Location`,
      h2: `Project Details`,
      h3: `Amenities`,
      p4: `
      Al Noor Orchard is a relatively small housing project in compare to Al Jalil Gardens which spans over the area
      of 40 acres. Currently, the housing project is offering residential and commercial plots to their customers.
      Residential plots include 5 Marlas, 8 Marlas, 10 Marlas and 1 Kanal. Commercial plots include only 4 Marlas for
      this time.
      `,
      p5: `
      Al Jalil developers are best known for their unique architecture and state of the art facilities for their
      residents and these amenities attracts lot of investors and buyers to the housing project. Here is the list of 
      amenities provided by the housing scheme to the residents.
      `,
      listContent: [
        "Gated Community",
        "24/7 Security",
        "Commercial Areas",
        "Graveyards",
        "Mosques",
        "Top Educational Institutions",
        "Gym",
        "Parks and Play areas",
        "Underground Electrification System",
        "150 ft Main Boulevard",
        "Modern Development",
      ],
    },
  ],
};
