//возвращает html-коллекцию
document.forms

//доступ к DOM-элементу конкретной формы на странице
document.forms[0]

//если есть id
document.forms.regForm

const formElement = document.querySelector("#regForm")

//возвращает html-коллекцию
formElement.elements

//можно получить элементы по имени
formElement.elements.login
formElement.login 

//если мы хотим получить элемент radio
//вернет коллекцию RadioNodeList
formElement.elements.gender
formElement.gender

const loginInputElement = formElement.login
const aboutTextAreaElement = formElement.about

//setters
loginInputElement.value = "Text"
aboutTextAreaElement.value = "Text 2"

//getters 
loginInputElement.value
aboutTextAreaElement.value

const genderRadios = formElement.gender 
//Выбран ли мужской пол?
genderRadios[0].checked

//Выбран ли женский пол?
genderRadios[0].checked

//изменяем выбранный элемент
genderRadios[0].checked = true 
//или, если есть такой вариант
genderRadios.value = "Мужской"


const agreementCheckboxElement = formElement.agreement

//проверка checkbox, вернет true/false
agreementCheckboxElement.checked


const citySelectElement = formElement.city

//получаем выбранный вариант
citySelectElement.value

//или 
citySelectElement.options
citySelectElement.selectedIndex
citySelectElement.options[citySelectElement.selectedIndex].value

//выбрать опцию, будет работать, только если есть такой вариант
citySelectElement.value = "Moscow"

//или 
citySelectElement.options[4].selected = true 

citySelectElement.selectedOptions

const selectedValue = [...selectedElement.selectedOptions]
    .map(({value}) => value)
    .join(",")