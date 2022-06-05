import { useParams } from 'react-router-dom';

function UserTemplate() {
  const params = useParams();
  const { id, name } = params;
  console.log(params);
  return (
    <>
      <h1>{id}</h1>
      <h2>{name}</h2>
    </>
  );
}

export default UserTemplate;
