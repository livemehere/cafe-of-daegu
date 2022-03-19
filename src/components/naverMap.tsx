import React, { useEffect, useRef } from "react";

interface NaverMapProps {
  width?: string;
  height?: string;
}

function NaverMap({ width = "100%", height = "100%" }: NaverMapProps) {
  const mapRef = useRef();

  useEffect(() => {
    const { naver }: any = window;

    mapRef.current = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(37.3595704, 127.105399),
      zoom: 10,
    });
  }, []);

  return <div id="map" style={{ width, height }} />;
}

export default NaverMap;
