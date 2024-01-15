import weatherServices from "../../services/weather.services";
import { getIcon } from "../../utils/getIcon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListItem({ location }) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    weatherServices.current(location).then((res) => {
      setData(res.current);
      setIsLoading(false);
    });
  }, [location]);

  if (isLoading) return <h1>loading...</h1>;

  const icon = getIcon(data.condition.code, data.is_day);

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
        <p>{data.condition.text}</p>
        <p className="text-2xl font-bold">{data.temp_c}°C </p>
      </div>
      <p className="text-5xl"> {icon} </p>
    </div>
  );
}

export { ListItem };
