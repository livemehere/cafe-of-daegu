import { useEffect, useState } from "react";

export default function useGeocode() {
  const { naver }: any = window;
  const [address, setAddress] = useState<string>();
  const [targetGeocode, setRes] = useState<{ x: string; y: string } | null>(
    null,
  );

  useEffect(() => {
    if (!address) return;
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status: any, response: any) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }

        const result = response.v2, // 검색 결과의 컨테이너
          items = result.addresses; // 검색 결과의 배열

        const geoCode = { y: items[0].y, x: items[0].x };
        // do Something
        setRes(geoCode);
      },
    );
  }, [address]);

  return { targetGeocode, setAddress };
}
