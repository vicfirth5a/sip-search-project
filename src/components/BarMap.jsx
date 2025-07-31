import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 修復 Leaflet 的預設圖標問題（這是一個常見的設定）
// Leaflet 在 webpack 環境下需要手動設定圖標路徑
delete L.Icon.Default.prototype._getIconUrl;
({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// 建立自訂的酒吧圖標
const barIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41], // 圖標大小
  iconAnchor: [12, 41], // 圖標錨點（指向地面的位置）
  popupAnchor: [1, -34], // 彈出視窗相對於圖標的位置
  shadowSize: [41, 41], // 陰影大小
});


// 這個輔助元件會在 center prop 改變時，自動將地圖視圖移動到新的中心點
function ChangeView({ center, zoom }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
}

export default function BarMap({ bar }) {
  // 如果 bar 不存在，或座標不存在，就先不渲染地圖，避免錯誤
  if (!bar || !bar.contactInfo || !bar.contactInfo.coordinates) {
    return (
      <div className="bar-map-container" style={{ background: "#f0f0f0", display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>地圖資料載入中...</p>
      </div>
    );
  }

  // 從酒吧資料中取得座標
  const { lat, lng } = bar.contactInfo.coordinates;

  // 地圖的中心點就是酒吧的位置
  const center = [lat, lng];

  // 縮放等級（數字越大越詳細，一般街道層級用 15-16）
  const zoom = 16;

  return (
    <div className="bar-map-container">
      {/* MapContainer 是地圖的主要容器 */}
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%", borderRadius: "8px" }}
        scrollWheelZoom={false} // 防止意外縮放
      >
        {/* TileLayer 提供地圖的底圖圖層 */}
        {/* 這裡使用 OpenStreetMap 的免費圖層 */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* 使用輔助元件來動態更新地圖中心 */}
        <ChangeView center={center} zoom={zoom} />

        {/* Marker 在地圖上標示酒吧位置 */}
        <Marker position={center} icon={barIcon}>
          {/* Popup 是點擊標記時顯示的資訊框 */}
          <Popup>
            <div className="map-popup">
              <h4>{bar.name}</h4>
              <p>{bar.contactInfo.address}</p>
              <p>{bar.contactInfo.phone}</p>
              {/* 可以加入連結到 Google Maps 的功能 */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="map-directions-link"
              >
                在 Google Maps 中開啟
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
