import HeroWave from 'components/landing-page/hero/HeroWave';
import Navbar from 'components/navbar/Navbar';
import React from 'react';
import basicPolicy from 'assets/img/basic-policy.png';
import Footer from 'components/footer/Footer';

const BasicPolicy = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HeroWave />
      <div className="mt-36 mb-20 sm:mt-44 flex justify-center">
        <div className="w-4/5 sm:w-5/12 ">
          <p className="text-2xl font-bold text-primary text-center">
            Basic Policy
          </p>
          <p className="text-xl font-semibold mt-8 tracking-wide">
            Basic Policy on Customer Service and Action Guidelines
          </p>
          <p className="my-4 text-sm">Basic Policy on Customer Service</p>
          <p className="text-sm tracking-wide leading-6">
            We will never forget that our ultimate objective for all company
            activities is to delight, satisfy and inspire consumers, based on
            our corporate philosophy of “Love.” We value two-way communication
            with customers, take feedback from customers seriously, think and
            act from the customer’s point of view, and always strive to further
            improve customer satisfaction.
          </p>
          <p className="text-xl font-semibold mt-8 tracking-wide mb-4">
            Action Guidelines
          </p>
          <p className="text-sm tracking-wide leading-6 ">
            1.We respond to customer requests agilely, politely, accurately, and
            with sincerity.
          </p>
          <p className="text-sm tracking-wide leading-6 ">
            2.We treat customers fairly and equitably.
          </p>
          <p className="text-sm tracking-wide leading-6 ">
            3.We reflect the customer’s voice in corporate activities in an
            effort to create even better products and improve the quality of
            operations.
          </p>
          <p className="text-sm tracking-wide leading-6 ">
            4.We strive to provide customers with information that is
            considerate and easy to understand.
          </p>
          <p className="text-sm tracking-wide leading-6 ">
            5.We respect the rights of customers and act in compliance with
            relevant laws and regulations.
          </p>
          <div className="mt-4">
            <img src={basicPolicy} alt="basic-policy" />
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default BasicPolicy;
