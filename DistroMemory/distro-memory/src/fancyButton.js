import './fancyButton.css';

export default function FancyButton(props) {
  return (
    <button className="fancy">
      {props.text}
    </button>
  );
}
