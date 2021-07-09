import React from 'react';

function Page2({ onRoute }) {
  return (
    <div>
      <p>Page 2</p>
      <button onClick={() => onRoute(true)}>Go to Page 1</button>
    </div>
  );
}

export default Page2;
