import { useParams } from "react-router-dom";

export default function Page1() {
  const params = useParams().item
  return (
    <>
      <h1>Page1</h1>

      <h2>{params === 'h'? '전달자료 없음' : params}</h2>
    </>
  );
}