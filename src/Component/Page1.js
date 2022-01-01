import { useParams } from "react-router";
export default function Page1() {
  const param = useParams();
  console.log(param);
  switch (param.id) {
    case 'daniel':
      console.log("daniel found");
      break;
    case 'emeka':
      console.log("emeka found");
      break;
      default:
          console.log("Nothing found");
          break;
  }

  return (
    <div className="list">
      <h1>Page 1</h1>
    </div>
  );
}
