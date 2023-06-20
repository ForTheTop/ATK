// 주문 정보를 출력하는 함수
// 주문 내역을 저장할 배열
var orders = [];

// 주문 추가
function addOrder() {
    var drink = document.getElementById("drink").value;
    var temperature = document.getElementById("temperature").value;
    var size = document.getElementById("size").value;

    // 주문 정보
    var order = {
        drink: drink,
        temperature: temperature,
        size: size,
    };
    orders.push(order);

    // 주문 내역을 출력
    var orderList = document.getElementById("orderList");
    var li = document.createElement("li");
    li.textContent = drink + ", " + temperature + ", " + size + ", " + calculatePrice(size);
    orderList.appendChild(li);

    // 입력 필드 초기화
    document.getElementById("drink").value = "";
    document.getElementById("temperature").value = "아이스";
    document.getElementById("size").value = "M";
}

// 가격계산 함수
function calculatePrice(size) {
    if (size === "M") {
        return "가격: 1500원";
    } else if (size === "L") {
        return "가격: 2000원";
    } else {
        return "가격 정보 없음";
    }
}

// 주문 내역 출력 함수
function printOrders() {
    var orderList = document.getElementById("orderList");
    orderList.innerHTML = ""; // 기존 내역 초기화

    for (var i = 0; i < orders.length; i++) {
        var order = orders[i];
        var li = document.createElement("li");
        li.textContent = order.drink + ", " + order.temperature + ", " + order.size + ", " + calculatePrice(order.size);
        orderList.appendChild(li);
    }
}