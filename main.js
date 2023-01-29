//Я решил использовать пример код как в документаци на сайте , а не как Миши в ролике потому что ссылки на api и все остальное отличаются

// api ключ zoSgxSzvNkwehd6YG7AJny9WnkK01Szy

//переменная которая содержит курсы валют
let rates;



//////////делаю запрос к API

var myHeaders = new Headers();
myHeaders.append("apikey", "zoSgxSzvNkwehd6YG7AJny9WnkK01Szy");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

//функция fetch нужна что подключится к api
fetch("https://api.apilayer.com/fixer/latest?symbols=RUB&base=EUR", requestOptions)
  .then(response => response.json()) //обязательно json нужно указать. Если оставлять text то будет ошибка
  .then(result =>{
	console.log(result);  // выводим в консоль значение по api 
	rates = result.rates; // к переменной которую я создал выше присваиваю результат то есть значение обьекта rates из api . Я назвал свою переменную также как она называется по сути в обьекте api
});
  

  
///////////////////////////////////////////////////


//получаем два элемента формы (два поля с валютами)
const cur1 = document.getElementById('cur1');
const cur2 = document.getElementById('cur2');

//из рублей в евро
function changeCur1(event){
	//когда мы вводим какое либо число в поле с рублем то мы должны поделить это число на другое число которое было получено через api в обьекте rates . Чтобы поделить на онкретную валюту надо написать rates.RUB или например rates.RUB . Главное чтобы в ссылке выше в которой идет обращение была указа валюта или валюты к которым мы обращаемся
	cur2.value = (event.target.value / rates.RUB).toFixed(2);

	//toFixed убрать лишнее символы и оставить 2 символа после запятой 
}

//событие keyup срабатывает как только убираем палец с кнопки :)
cur1.addEventListener('keyup' , changeCur1);
//событие mouseup то же самое что и keyup только с мышкой 
cur1.addEventListener('mouseup' , changeCur1);


//из евро в рубли
function changeCur1(event){

	cur1.value = (event.target.value * rates.RUB).toFixed(2);

}

cur2.addEventListener('keyup' , changeCur2);

cur2.addEventListener('mouseup' , changeCur2);