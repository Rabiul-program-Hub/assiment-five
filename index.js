


function hiddenElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.add('hidden')
}
function showElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.remove('hidden')
}
function getInputValueId(id){
  const inputElement = document.getElementById(id);
  let inputElementValue = inputElement.value;
  const SplitInputElementValue= inputElementValue.split(' ')
  const joinInputElementValue  = SplitInputElementValue.join('');
  const values =  joinInputElementValue.toUpperCase();
  return values;
}



const seatElement = document.getElementById('seat-element') // buss seat element

const buyTicketBtn = document.getElementById('buy-ticket-btn') // buy ticket button and scroll add
buyTicketBtn.addEventListener('click',
  function(){
seatElement.scrollIntoView({behavior:'instant'})
  })
  // count
  let count = 0;

function setInnerText(id,value){
  const element = document.getElementById(id)
  element.innerText = value
}
  const seatListBox = document.getElementById('seat-list-box') // added seat number and class box

  const allSeat = document.getElementsByClassName('seat')
  for(let seat of allSeat){
    seat.addEventListener('click',function(event){
      event.target.style.backgroundColor = 'green';
      event.target.style.pointerEvents = 'none'; //disabled after select seat
      count++;
      setInnerText('seat-count',count); //set innerText in seat count
      setInnerText('seat-left',(parseInt(document.getElementById('seat-left').innerText)-1)) // remain set add left seat on left sect count section
      const seatName = event.target.innerText;
      // create a new text
      const listBox = document.createElement('div')
      listBox.classList.add('flex')
      listBox.classList.add('justify-between')
      // create new element
      const p1 = document.createElement('p')
      p1.innerText = seatName;
       const p2 =document.createElement('p')
       p2.innerText = 'Business'
       const p3 = document.createElement('p')
       p3.innerText = 550 ;
      //  append child
       listBox.appendChild(p1)
       listBox.appendChild(p2)
       listBox.appendChild(p3)
      //  seat list box
       seatListBox.appendChild(listBox)
      //  seat total price
       setInnerText('total-price',parseInt(parseInt(p3.innerText) *count));

      //  apply coupon code 
      const couponBtn = document.getElementById('coupun-btn')
      if(count == 4){
        document.getElementById('seat-element').style.pointerEvents = 'none'; // disabled all seat 
        couponBtn.classList.remove('disabled') //enable coupon button
        couponBtn.addEventListener('click',function(){
          getInputValueId('coupon') // coupon input

          // coupon validation
          if( getInputValueId('coupon') === 'NEW15'){
              setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)-(parseInt(p3.innerText) *count)*0.15); // set discounted grand total
              setInnerText('discount',(parseInt(p3.innerText) *count)*0.15);
              showElementById('discounted-section') //  show discount section
              hiddenElementById('coupon-input-section') // hidden coupon input section
           
          }else if( getInputValueId('coupon') === 'COUPLE20'){
            setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)-(parseInt(p3.innerText) *count)*0.20);
            setInnerText('discount',(parseInt(p3.innerText) *count)*0.20);
            const discountedSection = document.getElementById('discounted-section');
            discountedSection.classList.remove('hidden')
            const couponInputSection= document.getElementById('coupon-input-section');
            couponInputSection.classList.add('hidden')
          }else{
            alert('input right coupon code')
          }
          const couponElement = document.getElementById('coupon');
          couponElement.value ='';
        })
      }
     
      //  set grand total
      setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)); // set grand total whiteout discount
    //  validation next button
      if( count == 1){
        const nextBtn = document.getElementById('next-btn')
        nextBtn.classList.remove('disabled')
      nextBtn.addEventListener('click',
        function(){
          hiddenElementById('header')
          hiddenElementById('web-body')
          hiddenElementById('footer')
          showElementById('successful-section')
        })
      }
      // add continue button
      const continueBtn = document.getElementById('continue-btn')
     continueBtn.addEventListener('click',
     function(){
          showElementById('header')
          showElementById('web-body') // show main section
          showElementById('footer')
          hiddenElementById('successful-section')
        location.reload(true)

})
    })
  }
