import React from "react";
import useJsonFetch from "./hooks/useJsonFetch"


const SetUrlReq = ({ url }) => {
  const [data, loading, error] = useJsonFetch(url);

  return (
    <div>
      <b>URL:</b> {url} || <b>response:</b> {JSON.stringify(data.data) || data.loading}
    </div>
  );  
}

function App() {
	return (
	<>
      <SetUrlReq url={'http://localhost:7070/data'} />
      <SetUrlReq url={'http://localhost:7070/error'} />
      <SetUrlReq url={'http://localhost:7070/loading'} />
	</>
	);
}

export default App