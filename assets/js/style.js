let cardNum = document.getElementById('card')
let _cvv2 = document.getElementById('cvv2')
let _exp = document.getElementById('exp')
let _lbl = document.getElementById('showid')
let _back = document.getElementsByClassName('box')[0]
let _mouseMove=document.getElementById('mouse')
cardNum.addEventListener('input', function (event) {
    let temp = event.target.value
    temp = temp.substring(temp.length - 1, temp.length)
    _lbl.innerHTML += temp
    if (((event.target.value).length == 4) ||
        ((event.target.value).length == 8) ||
        ((event.target.value).length == 12)
    ) {
        _lbl.innerHTML += " - "
    }
    if (((event.target.value).length >= 16)) {
        let txt = (event.target.value).substring(0, 16)
        cardNum.value = txt
        let res = _lbl.innerText
        let test = res.substring(0, 25)
        _lbl.innerHTML = test
        _cvv2.focus()
        let _logo = txt.substring(0, 4)
        if (_logo == 6219) {
            _back.style.backgroundImage = "url(assets/img/saman.jpg)"
        }else if(_logo == 6274){
            _back.style.backgroundImage = "url(assets/img/eghtesad.jpg)"
        }else if(_logo == 6393 || _logo ==5022 ){
            _back.style.backgroundImage = "url(assets/img/pasargad.png)"
            _lbl.style.color='white'
            document.getElementById('scv').style.color='white'
            document.getElementById('sex').style.color='white'
            document.getElementById('cvv2show').style.color='white'
            document.getElementById('expshow').style.color='white'
            document.getElementById('showName').style.color='white'
        }else if(_logo == 6273){
            _back.style.backgroundImage = "url(assets/img/tejarat.jpg)"
        }else if(_logo == 6276 || _logo == 2071){
            _back.style.backgroundImage = "url(assets/img/saderat.jpg)"
        }else if(_logo == 5894){
            _back.style.backgroundImage = "url(assets/img/refah.png)"
        }else if(_logo == 5892){
            _back.style.backgroundImage = "url(assets/img/sepah.jpg)"
        }else if(_logo == 5028){
            _back.style.backgroundImage = "url(assets/img/shahr.jpeg)"
        }else if(_logo == 6104 || _logo == 9919){
            _back.style.backgroundImage = "url(assets/img/bankmelat.jpg)"
        }else if(_logo == 5029){
            _back.style.backgroundImage = "url(assets/img/day.jpg)"
        }else if(_logo == 6392){
            _back.style.backgroundImage = "url(assets/img/keshavarzi.jpg)"
        }else if(_logo == 6280){
            _back.style.backgroundImage = "url(assets/img/maskan.jpg)"
        }else if(_logo == 5041){
            _back.style.backgroundImage = "url(assets/img/resalat.jpg)"
        }else if(_logo == 6037){
            _back.style.backgroundImage = "url(assets/img/meli.jpg)"
        }else{
            document.getElementsByClassName('popup')[0].style.height='50vh'
        }
    }
    document.getElementById('showName').innerHTML=document.getElementById('name').value+' '+document.getElementById('family').value
})
_cvv2.addEventListener('input', function (event) {
    document.getElementById('cvv2show').innerText = event.target.value
    if ((event.target.value).length == 3 || (event.target.value).length == 4) {
        _exp.focus()
    }
})
// _exp.addEventListener('input', function (event) {
//     document.getElementById('expshow').innerText = event.target.value
// })


_exp.addEventListener('input', function (event) {
    let texp = event.target.value
    texp = texp.substring(texp.length - 1, texp.length)
    document.getElementById('expshow').innerHTML += texp
    if (((event.target.value).length == 2)){
        document.getElementById('expshow').innerHTML += " / "
    }})


_back.addEventListener('mousemove', (e) => {
    x = ((e.clientX) - (_back.offsetLeft)) / 10 
    y = ((e.clientY) - (_back.offsetTop)) / 10
    _back.style.transform = 'perspective(800px)rotateY(' + (x - 15) + 'deg)rotateX(' + (y - 10) + 'deg)'
})
_back.addEventListener('mouseleave', ()=>{
    _back.style.transform = 'perspective(800px)rotate(0)'
})
_mouseMove.addEventListener('mousemove', (e) => {
    x = e.clientX
    y = e.clientY
    // document.getElementById('move').innerHTML='x:'+x+'y:'+y 
    document.getElementById('move').style.marginTop=(y-40)+'px'
    document.getElementById('move').style.marginLeft=(x-40)+'px'
})
document.querySelector('.popup>span').addEventListener('click', function(){
document.getElementsByClassName('popup')[0].style.height=0
document.getElementsByClassName('popup')[0].style.boxShadow='none'
})