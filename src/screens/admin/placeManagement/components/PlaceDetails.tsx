import { useEffect, useState } from "react";
import PlacesService from "../../../../services/apis/place/places.api";
import { useParams } from "react-router-dom";

const PlaceDetails = () => {
  const params = useParams();
  const [place, setPlace] = useState<any>();
  const [image, setImage] = useState<string[] | void>();

  useEffect(() => {
    if (params && params.id) {
      PlacesService.getPlaceDetails(params.id).then((res) => {
        setPlace(res?.data);
        setImage(res?.data.imageUrl);
        console.log(res?.data);
      });
    }
  }, []);
  return (
    <div>
      <div>
        <div>{place?.title}</div>
        <div>{place?.description}</div>
        {image?.map((url, index) => (
          <div>
            <img className=" w-[200px] h-auto" key={index} src={url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaceDetails;
