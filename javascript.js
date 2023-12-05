function calculateTotal() { 
    /*количество товара*/
    /*getElementById - метод, позволяющий получить ссылку на элемент страницы по идентификатору */
    var quantity = document.getElementById("quantity").value; /*ищем элемент с идентификатором "quantity"*/
    if (isNaN(quantity) || quantity < 0) {
        alert("Введите корректное количество товара");
        return;
    }
    /*цена товара*/
    var productPrice = document.getElementById("product").value; /*ищем элемент с идентификатором "product"*/
    /*итоговая цена, умножение кол-ва товара на его цену*/
    var totalCost = quantity * productPrice; 
    /*что должно выводиться*/
    /*.innerHTML - позволяет получить доступ к содержимому эл-та*/
    document.getElementById("totalCost").innerHTML = "Стоимость заказа: " + totalCost + " рублей"; 
}
