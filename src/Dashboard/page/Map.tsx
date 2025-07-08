import React from "react";

const Map = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold">Map</h2>
      <div className="mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.419415684681!3d37.774929779759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b8b8b8b%3A0x8b8b8b8b8b8b8b8b!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1616161616161"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
