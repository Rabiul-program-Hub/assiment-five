
// function for hidden element
function hiddenElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.add('hidden')
}
// function for show element
function showElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.remove('hidden')
}

// function for get input value
function getInputValueId(id){
  const inputElement = document.getElementById(id);
  let inputElementValue = inputElement.value;
  let SplitInputElementValue= inputElementValue.split(' ')
  let joinInputElementValue  = SplitInputElementValue.join('');
  let values =  joinInputElementValue.toUpperCase();
  return values;
}

// continue button 
const continueBtn = document.getElementById('continue-btn');
continueBtn.addEventListener('click',
function(){
  hiddenElementById('successful-section')
  showElementById('header')
  showElementById('web-body')
  location.reload(true)
}
)

const seatElement = document.getElementById('seat-element') // buss seat element

const buyTicketBtn = document.getElementById('buy-ticket-btn') // buy ticket button and scroll add
buyTicketBtn.addEventListener('click',
  function(){
seatElement.scrollIntoView({behavior:'instant'})
  })
  // count
  let count = 0;
// function set innerText
function setInnerText(id,value){
  const element = document.getElementById(id)
  element.innerText = value
}
  const seatListBox = document.getElementById('seat-list-box') // added seat number and class box

  const allSeat = document.getElementsByClassName('seat')
  for(let seat of allSeat){
    seat.addEventListener('click',function(event){
      event.target.style.backgroundColor = '#1DD100';
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
      //  set list box
       seatListBox.appendChild(listBox)
      //  set total price
       setInnerText('total-price',parseInt(parseInt(p3.innerText) *count));

      //  apply coupon code 
      const couponBtn = document.getElementById('coupun-btn')
      if(count === 4){
        document.getElementById('seat-element').style.pointerEvents = 'none'; // disabled all seat 
        couponBtn.style.background = '#1DD100'
        couponBtn.classList.remove('disabled') //enable coupon button
        couponBtn.addEventListener('click',function(){
          getInputValueId('coupon') // coupon input

          // coupon validation
          if( getInputValueId('coupon') === 'NEW15'){
              setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)-(parseInt(p3.innerText) *count)*0.15); // set discounted grand total
              setInnerText('discount',(parseInt(p3.innerText) *count)*0.15);
              showElementById('discounted-section') //  show discount section
              hiddenElementById('coupon-input-section') // hidden coupon input section
           
          }else if( getInputValueId('coupon') === 'COUPLE20'){ // couple coupon section 
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
    const nextBtn = document.getElementById('next-btn')
      if(count >= 1){
        nextBtn.style.background = '#1DD100'
        nextBtn.classList.remove('disabled')
      }
    })
  }
  // add next button 
  const nextBtn = document.getElementById('next-btn')
  nextBtn.addEventListener('click',
    function(){
      phoneNumber();
    }
  )

// phone number validation and show and hidden section
  function phoneNumber() {
    const phoneNumberElement = document.getElementById('phone-number-input');
        phoneNumberElement.addEventListener('input', function () {});// input dynamically
        const phoneNumberValue = parseInt(phoneNumberElement.value)
        let count2 = getInputValueId('phone-number-input').length
        // console.log( count2)
        if (isNaN(phoneNumberValue)) {
        alert('must input phone number')
      }else if( count2 >= 5){
       showElementById('successful-section') //show successful section 
       hiddenElementById('web-body')
       hiddenElementById('header')
       hiddenElementById('footer')
      }else{
        alert('must input  5 digit') //alert no-2
      }
    
  }
  