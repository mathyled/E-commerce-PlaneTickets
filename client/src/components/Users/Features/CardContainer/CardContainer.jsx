import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCity } from "../../../../redux/actions/actions";
import Card from "../Card/Cards";
import imagenes from "./imagenes.json";
function CardContainer() {
  const city = useSelector((state) => state.city);
  const dispatch = useDispatch();
  //console.log("CITY", city);

  useEffect(() => {
    dispatch(getCity("MAD"));
  }, [dispatch]);
  return (
    <div>
      <h1>CARDS</h1>
      {city &&
        city.map((o) => {
          let imagen;
          for (let i = 0; i < imagenes.length; i++) {
            if (imagenes[i].hasOwnProperty(`image${o.destination}`)) {
              imagen = imagenes[i][`image${o.destination}`];
            }
          }
          return (
            <div>
              <Card
                origin={o.origin}
                destination={o.destination}
                price={o.price.total}
                image={imagen}
              />
            </div>
          );
        })}
    </div>
  );
}

export default CardContainer;
