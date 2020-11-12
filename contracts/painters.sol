pragma solidity ^0.5.0;

import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7.sol";
import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7Metadata.sol";
import "caver-js/packages/caver-kct/src/contract/token/KIP7/KIP7Pausable.sol";

contract Painters is KIP7,KIP7Metadata,KIP7Pausable {
    address public owner; //컨트랙트 주인
    string[] public carsData; //페인터스에 등록된 차량번호들.
    mapping(string => Car) public cars;
    constructor(string memory name, string memory symbol, uint8 decimals) KIP7Metadata(name,symbol,decimals) public {
        owner = msg.sender;
    }
    
    uint colorDataCount = 0;
    struct Color {
      int num;
      int value;
    }

    struct Part {
      int idx;
      Color color;
    }

    struct Car {
        address painter; //작업자
        string brand; // 제조사
        string carName; // 차종
        string carNum; // 차량번호
        Part part[]
    }
    
    event AddCar(
      address indexed _painter,
      string brand,
      string cardName,
      string indexed carNum
    );

    function addCar(string memory _brand, string memory _carName, string memory _carNum) public returns (string memory) {
      uint[][] memory parts;
      cars[_carNum] = Car(msg.sender, _brand, _carName, _carNum, parts);
      emit AddCar(msg.sender, _brand, _carName, _carNum);
      carsData.push(_carNum);
      return ("Car Registration Successful");
    }

    function addPartsColor(string memory _carNum,uint8 _partNum,uint8 _color1,uint8 _color2,uint8 _color3,uint8 _color4,
      uint8 _color5,uint8 _color6,uint8 _color7,uint8 _color8,uint8 _color9,uint8 _color10) public returns (string memory) {
      cars[_carNum].parts.push([_partNum,_color1,_color2,_color3,_color4,_color5,_color6,_color7,_color8,_color9,_color10]);
      colorDataCount ++;
      return ("Color Added Successful");
    }
    
    function viewCarsData(string memory _carNum,uint _partArray, uint _partcolor) view public returns (address, string memory, string memory, string memory,uint) {
      Car memory car = cars[_carNum];
      return (car.painter, car.brand, car.carName, car.carNum, car.parts[_partArray][_partcolor]);
    }
}