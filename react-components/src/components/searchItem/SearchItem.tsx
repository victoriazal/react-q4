import './SearchItem.css';

export default function Item(props: {
  id: string;
  name: string;
  birth_year: string;
}) {
  function handleItemClick(event: React.MouseEvent<HTMLDivElement>) {
    console.log(event.currentTarget.id);
  }
  return (
    <>
      <div
        onClick={(e) => handleItemClick(e)}
        id={props.id}
        key={props.id}
        className="character"
      >
        <h5>{props.name}</h5>
        <span>Birth year: {props.birth_year}</span>
      </div>
    </>
  );
}
