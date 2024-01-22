import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getIcon } from "../../../utils/getIcon";
import { useConvertToActiveTempUnit } from "../../hooks/useConvertToActiveTempUnit";
import weatherServices from "../../../services/weather.services";

function RecentlySearched({ location }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentData, setcurrentData] = useState({});

  const { unit, value } = useConvertToActiveTempUnit({
    value: currentData.temp_c,
  });
  const navigate = useNavigate();

  useEffect(() => {
    weatherServices.current(location).then((data) => {
      setcurrentData(data.current);
      setIsLoading(false);
    });
  }, [location]);

  if (isLoading) return <h1>loading...</h1>;

  const iconCode = currentData.condition.code;
  const iconType = currentData.is_day;
  const icon = getIcon(iconCode, iconType);

  const currentCondition = currentData.condition.text;

  const onClick = () => {
    navigate(`/search/${location}`);
  };

  return (
    <div
      onClick={onClick}
      className="flex hover:bg-primary-dark-hover cursor-pointer justify-between pr-10 items-center w-full p-3 bg-light-primary-dark rounded-md"
    >
      <div>
        <h1 className="text-xl">{location}</h1>
        <p>{currentCondition}</p>
        <p className="text-2xl font-bold">
          {value} {unit}
        </p>
      </div>
      <p className="text-5xl">{icon}</p>
    </div>
  );
}

export { RecentlySearched };
