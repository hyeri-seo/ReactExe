package org.mind.carddatabase.repository;

import net.minidev.json.JSONArray;
import org.mind.carddatabase.domain.Car;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

/*
{
        "brand": "Samsung",
        "model": "SM-5",
        "color": "black",
        "registerNumber": "SSS-111",
        "year": 2024,
        "price": 3200,
        "_links": {
        "self": {
        "href": "http://localhost:12000/api/cars/11"
        },
        "car": {
        "href": "http://localhost:12000/api/cars/11"
        },
        "owner": {
        "href": "http://localhost:12000/api/cars/11/owner"
        }
        }
        }

    5. 업데이트 PATCH:"http://localhost:12000/api/cars/11"
    Body > raw > JSON
    전송
    
    6. ID 11인 CAR의 OWNER를  추가 - PUT http://localhost:12000/api/cars/owner
    Content-Type: text/url-list

    Body > raw > Text
    전송
    http://localhost:12000/api/owners/1
    응답

    7. 추가적인 요청
    GET - http://localhost:12000/api/cars/search
    {
    "_links": {
        "findByBrand": {
            "href": "http://localhost:12000/api/cars/search/findByBrand{?brand}",
            "templated": true
        },
        "findByColor": {
            "href": "http://localhost:12000/api/cars/search/findByColor{?color}",
            "templated": true
        },
        "self": {
            "href": "http://localhost:12000/api/cars/search"
        }
    }
}

    8. color로 조회
    http://localhost:12000/api/cars/search/findByColor?color=white
        */

//현재 Repository의 api 주소를 변경할 수 있다.
// Client에서 요청하는 추가 메서드를 만들려면 @RepositoryRestResource를 써주고
// 아래처럼 @Param으로 요청값을 전달해야 함
@RepositoryRestResource
public interface CarRepository extends JpaRepository<Car, Long> {
    List<Car> findByBrand(@Param("brand") String brand);

    List<Car> findByColor(@Param("color") String color);
}
