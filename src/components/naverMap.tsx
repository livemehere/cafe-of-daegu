import React, { useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { selectedCafeState } from "../atom";

interface NaverMapProps {
  width?: string;
  height?: string;
}

function NaverMap({ width = "100%", height = "100%" }: NaverMapProps) {
  const { naver }: any = window;
  const mapRef = useRef<any>();
  const markerRef = useRef<any>();
  const selectedCafe = useRecoilValue(selectedCafeState);

  useEffect(() => {
    mapRef.current = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(35.857319370881726, 128.53252268346642),
      zoom: 13,
    });
  }, []);

  useEffect(() => {
    if (!selectedCafe) return;

    //TODO: 이전에 마커가 있었다면 지우고나서
    if (markerRef.current) {
      markerRef.current.setMap(null);
    }

    //TODO: 그다음 지도에서는 selectedCafe를 observe하다가 생기면 위치이동
    const target = new naver.maps.LatLng(selectedCafe?.y, selectedCafe?.x);
    mapRef.current.setCenter(target); // 중심 좌표 이동
    mapRef.current.setZoom(13); // 줌 레벨 변경

    //TODO: 마커 표시
    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(selectedCafe?.y, selectedCafe?.x),
      map: mapRef.current,
    });
    console.log(markerRef.current);
  }, [selectedCafe]);

  return <div id="map" style={{ width, height }} />;
}

export default NaverMap;
