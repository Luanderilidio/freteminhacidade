import React from "react";
import Container from "../../Components/Container";
import { Box } from "@mui/material";
import {
  Circle,
  FeatureGroup,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();

  return (
    <Container padding={true}>
      <div className="w-screen -ml-8 -my-8 h-screen">
        <MapContainer
          className="w-full h-full"
          center={[-16.0664886, -57.6779217]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="topright">
            <LayersControl.Overlay checked name="Marker with popup">
              <Marker position={[-16.0664886, -57.6779217]}>
                <Popup>
                  <button
                    onClick={() =>
                      navigate(`/details/7ac0868d-050b-4ecb-82c7-85ea2994f068`)
                    }
                    className="flex items-center justify-center gap-2 py-2 px-4 w-fit text-white bg-custon-black rounded-full font-semibold leading-none drop-shadow-xl transition ease-in-out hover:scale-110 active:scale-95 animate__animated animate__animated animate__fadeIn animate__fast	"
                  >
                    Saber mais
                  </button>
                </Popup>
              </Marker>
              <Marker position={[-16.0724886, -57.6739217]}>
                <Popup>
                  <button
                    onClick={() =>
                      navigate(`/details/7ac0868d-050b-4ecb-82c7-85ea2994f068`)
                    }
                    className="flex items-center justify-center gap-2 py-2 px-4 w-fit text-white bg-custon-black rounded-full font-semibold leading-none drop-shadow-xl transition ease-in-out hover:scale-110 active:scale-95 animate__animated animate__animated animate__fadeIn animate__fast	"
                  >
                    Saber mais
                  </button>
                </Popup>
              </Marker>
              <Marker position={[-16.0704886, -57.6839217]}>
                <Popup>
                  <button
                    onClick={() =>
                      navigate(`/details/7ac0868d-050b-4ecb-82c7-85ea2994f068`)
                    }
                    className="flex items-center justify-center gap-2 py-2 px-4 w-fit text-white bg-custon-black rounded-full font-semibold leading-none drop-shadow-xl transition ease-in-out hover:scale-110 active:scale-95 animate__animated animate__animated animate__fadeIn animate__fast	"
                  >
                    Saber mais
                  </button>
                </Popup>
              </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Layer group with circles">
              <LayerGroup>
                <Circle
                  center={[-16.0664886, -57.6779217]}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                />
                <Circle
                  center={[-16.0664886, -57.6779217]}
                  pathOptions={{ fillColor: "red" }}
                  radius={100}
                  stroke={false}
                />
                <LayerGroup>
                  <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: "green", fillColor: "green" }}
                    radius={100}
                  />
                </LayerGroup>
              </LayerGroup>
              <LayerGroup>
                <Circle
                  center={[-16.0724886, -57.6739217]}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                />
                <Circle
                  center={[-16.0724886, -57.6739217]}
                  pathOptions={{ fillColor: "red" }}
                  radius={100}
                  stroke={false}
                />
                <LayerGroup>
                  <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: "green", fillColor: "green" }}
                    radius={100}
                  />
                </LayerGroup>
              </LayerGroup>
              <LayerGroup>
                <Circle
                  center={[-16.0704886, -57.6839217]}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                />
                <Circle
                  center={[-16.0704886, -57.6839217]}
                  pathOptions={{ fillColor: "red" }}
                  radius={100}
                  stroke={false}
                />
                <LayerGroup>
                  <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: "green", fillColor: "green" }}
                    radius={100}
                  />
                </LayerGroup>
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
              <FeatureGroup pathOptions={{ color: "purple" }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[-16.0664886, -57.6779217]} radius={200} />
              </FeatureGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </div>
    </Container>
  );
}
