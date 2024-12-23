import React from "react";
import Marquee from "react-fast-marquee";

const Review = () => {
  return (
    <div className="container mx-auto p-3 my-5 ">
      <div className="my-10">
        {" "}
        <h2 className="md:text-xl font-semibold">SOME HAPPY FACES </h2>
        <h1 className="text-xl mt-3 md:text-3xl font-bold">
          Real Happy Customers, Real Stories
        </h1>
      </div>
      <Marquee pauseOnHover>
        <div className="flex gap-4">
          {/* review-1 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img
                className=" h-40  w-40"
                src="https://ap-zh.confirmation.com/media/1118/audit-client.png?width=425&height=425"
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-xl ">
              <h2 className="card-title">Yusuf Nur Mohammad </h2>
              <address>IT Consultant, Dhaka</address>
              <p>
                “ Such service platforms are available in other countries. I’ve
                personally used those when I was abroad. I’m very pleased that
                such a portal is available here in Bangladesh as well. Thank you
                CareNest.LTD
              </p>
            </div>
          </div>
          {/* review-2 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img
                className=" rounded-full h-40 w-40"
                src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/IQ-Accountants-managing-partner-Kyelie-Baxter-Slack-customer-story.jpg"
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-xl ">
              <h2 className="card-title">Zeba Fariba </h2>
              <address>Management Trainee , Dhaka</address>
              <p>
                “ It was my marriage and wasn’t getting schedule from any beauty
                parlor. So, I downloaded CareNest app and found that it has all
                of my requirements. The beautician arrived in time and was
                really amazing. Thank you CareNest.LTD
              </p>
            </div>
          </div>
          {/* review-3 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img
                className=" rounded-full h-40  w-40"
                src="https://weareindy.com/api/images/find?id=601ac02fbac649e752c1606d&width=48"
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-xl ">
              <h2 className="card-title">Mushfika Tabassum</h2>
              <address>Banker, Uttora</address>
              <p>
                “ Initially I was reluctant. I wasn’t sure how an online
                platform would be. CareNest.LTD was able to complete the job
                just as I imagined it to be. Thanks to them, they made it
                possible.
              </p>
            </div>
          </div>
          {/* review-4 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img
                className=" rounded-full  h-40  w-40"
                src="https://media.licdn.com/dms/image/v2/C4D03AQE9rLefKC4lAw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1573054945330?e=2147483647&v=beta&t=_YA5KobHcgZxlSj3ArQc2B3PAlHXvSahI2RzMYQKk0M"
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-xl ">
              <h2 className="card-title">Zarin Tasmim</h2>
              <address>Associate Professor , Mohammadpur</address>
              <p>
                “ CareNest.LTD services are very helpful for working women like
                me. They were on time as per the schedule to provide the
                service, and I’m very satisfied with their quality of service.
              </p>
            </div>
          </div>
          {/* review-5 */}
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img
                className=" rounded-full  h-40  w-40"
                src="https://www.freelanceinformer.com/wp-content/uploads/2022/01/Hayden-Brown.jpeg"
                alt="Album"
              />
            </figure>
            <div className="card-body max-w-xl ">
              <h2 className="card-title">Israt Jahan Nisa </h2>
              <address>Banker, dhaka</address>
              <p>
                “ "Service platforms like this are common in other countries,
                and I’ve personally experienced their benefits while abroad. I’m
                thrilled that such a portal is now accessible in Bangladesh.
                Thank you, CareNest LTD, for bringing this to us!"
              </p>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default Review;
