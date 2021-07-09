import React from 'react'

function Page1({onRoute}) {
    return (
        <div>
            <p>Page 1
                </p>
            <button onClick={()=>onRoute(false)}>Go to Page 2</button>
        </div>
    )
}

export default Page1
