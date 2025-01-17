


function hiddenElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.add('hidden')
}
function removeHiddenElementById(id){
const hiddenElement = document.getElementById(id);
hiddenElement.classList.remove('hidden')
}

// const header = document.getElementById('header')

// const webBody = document.getElementById('web-body')

// const footer = document.getElementById('footer')

// const successfulSection = document.getElementById('successful-section')

// const nextBtn = document.getElementById('next-btn')
// nextBtn.addEventListener('click',
//   function(){
//    successfulSection.classList.remove('hidden')
//    header.classList.add('hidden')
//    webBody.classList.add('hidden')
//    footer.classList.add('hidden')
//   })

const seatElement = document.getElementById('seat-element')

const buyTicketBtn = document.getElementById('buy-ticket-btn')
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
const seatListBox = document.getElementById('seat-list-box')

  const allSeat = document.getElementsByClassName('seat')
  for(let seat of allSeat){
    seat.addEventListener('click',function(event){
      event.target.style.backgroundColor = 'green';
      event.target.style.pointerEvents = 'none'; //disabled after select seat
      count++;
      setInnerText('seat-count',count);
      setInnerText('seat-left',(parseInt(document.getElementById('seat-left').innerText)-1))
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
          const couponElement = document.getElementById('coupon');
          let couponValue = couponElement.value;
          const SplitElementValue = couponValue.split(' ')
          const JoinCouponValue = SplitElementValue.join('');
          const coupon = JoinCouponValue.toUpperCase();
          // coupon validation
          if(coupon === 'NEW15'){
            setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)-(parseInt(p3.innerText) *count)*0.15);
            setInnerText('discount',(parseInt(p3.innerText) *count)*0.15);
            const discountedSection = document.getElementById('discounted-section');
            discountedSection.classList.remove('hidden')
            const couponInputSection= document.getElementById('coupon-input-section');
            couponInputSection.classList.add('hidden')
          }else if(coupon === 'COUPLE20'){
            setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count)-(parseInt(p3.innerText) *count)*0.20);
            setInnerText('discount',(parseInt(p3.innerText) *count)*0.20);
            const discountedSection = document.getElementById('discounted-section');
            discountedSection.classList.remove('hidden')
            const couponInputSection= document.getElementById('coupon-input-section');
            couponInputSection.classList.add('hidden')
          }else{
            alert('input right coupon code')
          }
          couponElement.value ='';
        })
      }
     
      //  set grand total
      setInnerText('grand-total',parseInt(parseInt(p3.innerText) *count));
      // const SplitElementValue = elementValue.split(' ')
      // const joinElementValue = SplitElementValue.join('')
      if( count == 1){
        const nextBtn = document.getElementById('next-btn')
        nextBtn.classList.remove('disabled')
      nextBtn.addEventListener('click',
        function(){
          hiddenElementById('header')
          hiddenElementById('web-body')
          hiddenElementById('footer')
          removeHiddenElementById('successful-section')
        })
      }
      const continueBtn = document.getElementById('continue-btn')
     continueBtn.addEventListener('click',
     function(){
          removeHiddenElementById('header')
          removeHiddenElementById('web-body')
          removeHiddenElementById('footer')
        hiddenElementById('successful-section')
        location.reload(true)

})
    })
  }
