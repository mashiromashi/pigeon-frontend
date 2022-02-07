import React from "react";
import image1 from "assets/img/home-slide2.jpg";

const BlogCard = () => {
  return (
    <div className="w-full lg:w-2/3">
      <h4 className="text-xl md:text-3xl font-bold text-primary mb-6">
        Latest
      </h4>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full mb-12 px-4">
          <img
            src={image1}
            alt="img1"
            className="mb-4 aspect-[16/9] rounded-lg object-center object-cover"
          />
          <span className="text-sm text-primary font-bold">General</span>
          <h5 className="text-lg md:text-2xl font-bold mt-4 mb-2">
            A Mother's Guide: Introducing Solid to Your Baby
          </h5>
          <p className="text-gray-700 mb-6">
            At 4 to 6 months of age, your baby is a bundle of joy! It is getting
            used to his or her new loving family, as well as its naps, bedtime
            and feeding times. All it needs now is more nutrients and to begin
            trying solid foods, which will introduce more textures and flavours
            to your baby’s world. As a general guide, most babies by ages 4 to 6
            months are ready to begin eating solid foods as a complement to
            breast-feeding or formula-feeding.
          </p>
          <a href="/" className="text-primary font-bold">
            Read More
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-12 px-4">
          <img
            src={image1}
            alt="img2"
            className="mb-4 aspect-[16/9] rounded-lg object-center object-cover"
          />
          <span className="text-sm text-primary font-bold">General</span>
          <h5 className="text-lg md:text-2xl font-bold mt-4 mb-2">
            A Mother's Guide: Introducing Solid to Your Baby
          </h5>
          <p className="text-gray-700 mb-6">
            At 4 to 6 months of age, your baby is a bundle of joy! It is getting
            used to his or her new loving family, as well as its naps, bedtime
            and feeding times. All it needs now is more nutrients and to begin
            trying solid foods, which will introduce more textures and flavours
            to your baby’s world. As a general guide, most babies by ages 4 to 6
            months are ready to begin eating solid foods as a complement to
            breast-feeding or formula-feeding.
          </p>
          <a href="/" className="text-primary font-bold">
            Read More
          </a>
        </div>
        <div className="w-full md:w-1/2 mb-12 px-4">
          <img
            src={image1}
            alt="img3"
            className="mb-4 aspect-[16/9] rounded-lg object-center object-cover"
          />
          <span className="text-sm text-primary font-bold">General</span>
          <h5 className="text-lg md:text-2xl font-bold mt-4 mb-2">
            A Mother's Guide: Introducing Solid to Your Baby
          </h5>
          <p className="text-gray-700 mb-6">
            At 4 to 6 months of age, your baby is a bundle of joy! It is getting
            used to his or her new loving family, as well as its naps, bedtime
            and feeding times. All it needs now is more nutrients and to begin
            trying solid foods, which will introduce more textures and flavours
            to your baby’s world. As a general guide, most babies by ages 4 to 6
            months are ready to begin eating solid foods as a complement to
            breast-feeding or formula-feeding.
          </p>
          <a href="/" className="text-primary font-bold">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
