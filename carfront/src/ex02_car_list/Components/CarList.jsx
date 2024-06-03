import React, {useEffect, useState} from "react";

function CarList() {
    // 서버로부터 전체 car목록을 받아와서 저장
    const [cars, setCars] = useState([]);

    // 시작하면 한 번 서버에 요청
    useEffect(() => {
        fetch('http://localhost:12000/api/cars')
        .then(response => Response.json())
        .then(data => setCars(data._embedded.cars))
        .catch(err => console.error(err));
    }, []);

    return (
        <div>

        </div>
    )
}

export default CarList;