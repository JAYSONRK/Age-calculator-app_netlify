import React from "react";

const Age = (prop) => {
    return(<>
        <div className="age">
            <h1><span>{prop.years}</span> years</h1>
            <h1><span>{prop.months}</span> months</h1>
            <h1><span>{prop.days}</span> days</h1>
        </div>
    </>)
}

export default Age;