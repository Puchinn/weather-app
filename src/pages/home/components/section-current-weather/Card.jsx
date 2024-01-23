function Card({ card = {} }) {
  const { icon, title, value, unit } = card;

  return (
    <li className="bg-light-primary-dark w-full p-4 rounded-md">
      <h2 className="text-xl">
        {icon} {title}
      </h2>
      <p className="text-xl xl:text-2xl xl:ml-8">
        {value} {unit}
      </p>
    </li>
  );
}

export { Card };
