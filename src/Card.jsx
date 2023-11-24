import  React, {useState} from "react";
import Input from "./Input";
import Age from "./Age";

const Card = () => {
    const [age, setAge] = useState(['--', '--', '--']);
    const inputDate = (data) => {
        setAge(data)
    }

    return(<>
        <div className="card">
            <Input
                sendDate = {inputDate}
            />
            <Age
                years={age[0]}
                months={age[1]}
                days={age[2]}
            />
        </div>
    </>)
}

export default Card;