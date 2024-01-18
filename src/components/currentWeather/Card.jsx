function Card({ data }) {
  const { icon, title, value, unit } = data;
  return (
    <li className="bg-light-primary-dark w-full p-4 rounded-md">
      <h2 className="text-xl">
        {icon} {title}
      </h2>
      <p className="text-3xl ml-8">
        {value} {unit}
      </p>
    </li>
  );
}

export { Card };
