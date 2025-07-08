import React from "react";

const Footer = () => {
  const popularTags = [
    { name: "Bag", href: "#" },
    { name: "Black", href: "#" },
    { name: "Blue", href: "#" },
    { name: "Clothes", href: "#" },
    { name: "Fashion", href: "#" },
    { name: "Hub", href: "#" },
    { name: "Jean", href: "#" },
    { name: "Shirt", href: "#" },
    { name: "Skirt", href: "#" },
    { name: "Sports", href: "#" },
    { name: "Sweater", href: "#" },
    { name: "Winter", href: "#" },
  ];

  return (
    <footer className="py-12 text-gray-300 bg-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">ABOUT US</h3>
            <div className="space-y-2">
              <p className="text-sm font-medium">Electrician</p>
              <p className="text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                nec vestibulum magna, et dapibus lacus. Duis nec vestibulum
                magna, et dapibus lacus.
              </p>
            </div>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              CONTACT INFO
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium">Address:</p>
                <p className="text-sm">123 Street Name, City, England</p>
              </div>
              <div>
                <p className="text-sm font-medium">Phone:</p>
                <p className="text-sm">(123) 456-7890</p>
              </div>
              <div>
                <p className="text-sm font-medium">Email:</p>
                <p className="text-sm">mail@example.com</p>
              </div>
              <div>
                <p className="text-sm font-medium">Working Days/Hours:</p>
                <p className="text-sm">Mon - Sun / 9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>

          {/* Customer Service Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              CUSTOMER SERVICE
            </h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Help & FAQs
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Order Tracking
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Shipping & Delivery
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Orders History
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Advanced Search
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Corporate Sales
              </a>
              <a
                href="#"
                className="block text-sm transition-colors hover:text-white"
              >
                Privacy
              </a>
            </div>
          </div>

          {/* Popular Tags Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">
              POPULAR TAGS
            </h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag, index) => (
                <a
                  key={index}
                  href={tag.href}
                  className="px-3 py-1 text-xs transition-colors bg-gray-700 rounded hover:bg-gray-600"
                >
                  {tag.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 mt-8 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © Aptech eCommerce 2022. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
