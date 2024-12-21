"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { projectData } from "@/data/cityData";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import City from "../Home/City";
import L from "leaflet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const More = () => {
  const [cityData, setCityData] = useState(null);
  const searchParams = useSearchParams();
  const id = searchParams ? parseInt(searchParams.get("id") || "0", 10) : 0;

  useEffect(() => {
    if (id) {
      const foundItem = projectData.find((item) => item.id === id);
      setCityData(foundItem || null);
    }
  }, [id]);

  if (!cityData) {
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  }

  const position = [cityData.lat, cityData.lon];

  // Slick Slider Settings with Autoplay enabled
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true, // Enable auto slide
    autoplaySpeed: 3000, // Time for each slide before auto transition (in milliseconds)
  };

  return (
    <div className="w-full h-full relative bg-[#FFFAFA]">
      {/* Header Image */}
      <div className="w-full h-[32rem] relative z-0">
        <img
          src={cityData.image}
          alt="city"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content and Map Container */}
      <div className="flex flex-col lg:flex-row w-full h-full lg:px-24 xl:px-32 xl:py-16 md:px-12 md:py-10 lg:py-20 px-6 py-6 relative z-10 gap-12">
        {/* Left side content */}
        <div className="flex-1 space-y-8">
          {/* City Title */}
          <h1 className="md:text-4xl text-2xl font-bold text-gray-800">{cityData.city}</h1>
          <p className="text-xl text-gray-700 leading-relaxed">{cityData.des}</p>

          {/* Attractions */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Attractions</h2>
            {cityData.attractions.map((attraction, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">{attraction.name}</h3>
                <p className="text-gray-600">{attraction.description}</p>
              </div>
            ))}
          </div>

          {/* Nearby Places */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nearby Places</h2>
            {cityData.nearby.map((place, index) => (
              <div key={index} className="mt-6">
                <h3 className="text-lg font-semibold text-gray-800">{place.name}</h3>
                <p className="text-gray-600">{place.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side map */}
        <div className="flex-1 lg:ml-8 h-[20rem] md:h-[30rem] lg:h-auto rounded-lg shadow-lg mt-8 lg:mt-0 relative z-0">
          <MapContainer
            center={position}
            zoom={13}
            className="h-full w-full"
            style={{ position: "relative", zIndex: 1 }} // Ensuring the map doesn't go over header
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker
              position={position}
              icon={new L.Icon({
                iconUrl: "/map-marker.svg", // Specify your custom marker image path
                iconSize: [40, 40], // Size of the marker image
                iconAnchor: [20, 40], // Anchor position for the marker image
                popupAnchor: [0, -40], // Position of the popup relative to the marker
              })}
            >
              <Popup>{cityData.city}</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Food (Slick Slider) */}
      <div className="py-6">
        <h2 className="text-xl font-bold text-center"> Popular Food</h2>
        <div className="py-4 w-[30rem] justify-center mx-auto">
          <Slider {...sliderSettings}>
            {cityData.food.map((food, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <img
                  src={food.image} // Use the image from the food object
                  alt={food.name}
                  className="w-full h-full object-cover rounded-lg shadow-md" // Adjusted size and added shadow
                />
                <h3 className="mt-4 text-lg font-semibold text-center">{food.name}</h3>
                <p className="text-center text-gray-600">{food.description}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <City />
    </div>
  );
};

export default More;
