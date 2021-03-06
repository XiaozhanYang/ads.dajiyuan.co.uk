// Language that will be used in the checkout page
var browserLanguage = navigator.language;
var checkoutLanguage;

var urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("checkout_language")) {
  checkoutLanguage = urlParams.get("checkout_language");
} else {
  checkoutLanguage = browserLanguage;
}

// Document elements affected by languages
var pageTitle = document.getElementById("title");
var cardHeaderOneTime = document.getElementById("card-header-one-time");
var cardHeaderRecurring = document.getElementById("card-header-recurring");
var legalTextOneTime = document.getElementById("legal-text-one-time");
var legalTextRecurring = document.getElementById("legal-text-recurring");
var donateButtonTextOneTime = document.getElementById("donate-button-text-one-time");
var donateButtonTextRecurring = document.getElementById("donate-button-text-recurring");
var footnoteContent = document.getElementById("footnote-content");
var FAQTitle = document.getElementById("faq-title");
var FAQContent = document.getElementById("faq-content");
var wordToReadersContect = document.getElementById("word-to-readers-content");

// Language setting button elements
var langEnglishBtn = document.getElementById("lang-english")
var langChineseBtn = document.getElementById("lang-chinese")

// Define the basic setting functions for English and Chinese

function setContectLanguageAsChinese() {

  // Update main content
  pageTitle.textContent = '大纪元广告';
  cardHeaderOneTime.textContent = '单次付款';
  cardHeaderRecurring.textContent = '每月付款';
  legalTextOneTime.textContent = '';  // '让更多读者获得真实的资讯';
  legalTextRecurring.textContent = '';  // '帮助我们更深入地探查真相';
  legalTextOneTime.style.padding = '0px';
  legalTextRecurring.style.padding = '0px';
  donateButtonTextOneTime.textContent = '支付';
  donateButtonTextRecurring.textContent = '支付';
  checkoutLanguage = 'zh';

  // Update the button style
  langEnglishBtn.style.background = '#f1f1f1';
  langEnglishBtn.style.zIndex = '0';
  langChineseBtn.style.background = 'white';
  langChineseBtn.style.zIndex = '9';

  // Update word to readers
  wordToReadersContect.innerHTML = 
   `<h1>
    在大纪元發布廣告
    </h1>
    <h3> —— 將您的信息傳遞給我們活躍的讀者群！</h3>
   `

  // <p>大疫当前，了解真相最重要。您的支持可以让更多读者获得我们真实的资讯，也会帮助我们更加深入地探查真相。</p>

  // Update footnote content
  footnoteContent.innerHTML = 
   `<p>付款完成后您将通过邮箱收到我们的确认收据。您若有其他疑问或需要支付超过£1,000，请通过以下方式联系我们。</p>
    <p>邮箱地址：${EMAIL}， 电话：${TELEPHONE}</p>
    <p>版權歸屬：頁面中所用圖標由網站 <a href="https://www.flaticon.com">www.flaticon.com</a> 作者 <a href="https://www.flaticon.com/authors/surang">surang</a> 製作。</p>
    <p></p>
    <p></p>
   `
  // Update FAQ content
  FAQTitle.textContent = '常见问题'
  FAQContent.innerHTML =
   `<p><i>如果选择每月付款，如何设定支付截止日期或更改付款数额？</i></p>
    <p>首次付款支付成功后，您会收到一份确认邮件，邮件中会有相应的发票和收据。您若希望设定支付截止日期或更改付款数额，请通过邮箱 ${EMAIL} 联系我们，邮件标题注明相应发票号码。我们的工作人员会帮您进行修改，并在完成后向您进行确认。</p>
    <p><i>有没有其他付款方式？</i></p>
    <p>您也可以通过银行转帐进行支付。接收账号为 ${BANK_DETAILS}</p>
    <p><i>付款后多久才可以获得收据？</i></p>
    <p>网上付款完成后，您立即就会通过自己在支付页面填写的邮箱收到收据。您如果选择银行转帐支付，请通过邮箱 ${EMAIL} 联系我们。</p>
    <p><i>付款完成后，又改变主意，能否要回已付款项？</i></p>
    <p>付款前，请您认真考虑。一旦付款，因为安全等诸多原因，原则上付款后大纪元不能退款，感谢您的理解和支持。如有特殊情况，请通过邮箱 ${EMAIL} 与我们联系。</p>
   `

}

function setContectLanguageAsEnglish() {

  // Update main content
  pageTitle.textContent = 'Advertisement with The Epoch Times';
  cardHeaderOneTime.textContent = 'One Time';
  cardHeaderRecurring.textContent = 'Monthly';
  legalTextOneTime.textContent = '';  // 'Help more readers get our truthful information';
  legalTextRecurring.textContent = '';  // 'You can support us to further explore the truth';
  legalTextOneTime.style.padding = '0px';
  legalTextRecurring.style.padding = '0px';
  donateButtonTextOneTime.textContent = 'Pay';
  donateButtonTextRecurring.textContent = 'Pay';
  checkoutLanguage = 'en';

  // Update the button style
  langChineseBtn.style.background = '#f1f1f1';
  langChineseBtn.style.zIndex = '0';
  langEnglishBtn.style.background = 'white';
  langEnglishBtn.style.zIndex = '9';

  // Update word to readers
  wordToReadersContect.innerHTML = 
   `<h1>
    Ads with The Epoch Times
    </h1>
    <h3> -- Delivery Your Message to Our Active Reader Group!</h3>
   `

  // <p>By donating, you are helping us to build an independent media that stands outside of any political interests.</p>

  // Update footnote content
  footnoteContent.innerHTML = 
   `<p>After completing the payment you will receive the receipt from us by email. If you have any questions or would like to payment more than £1,000, please contact us by the following information.</p>
    <p>Email: ${EMAIL}, Telephone：${TELEPHONE}</p>
    <p>Attribution：Icons in this page are made by <a href="https://www.flaticon.com/authors/surang">surang</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></p>
    <p></p>
    <p></p>
    `
  // Update FAQ content
  FAQTitle.textContent = 'Frequently Asked Questions'
  FAQContent.innerHTML =
   `<p><i>If I choose to pay monthly, how can I set a deadline or modify the amount of payment?</i></p>
    <p>After your initial payment, you will receive a confirmation email from us, where the corresponding invoice and receipt will be attached. If you would like to setup a deadline for or change the amount of payment, please contact us by ${EMAIL} and indicate the corresponding invoice number in the email subject. Our colleagues will setup the changes on your behalf, and send confirmation to you once they complete the changes.</p>
    <p><i>Is there any other way to pay?</i></p>
    <p>You can also pay by bank transfer. Here is the details of our receiving account, ${BANK_DETAILS}</p>
    <p><i>When can I get the receipt after payment?</i></p>
    <p>After finishing processing payment online, you will immediately receive the receipt from us by the email you provided in the checkout page. If you choose to pay by bank transfer, please contact us by email ${EMAIL}.</p>
    <p><i>If I change my mind after I made a payment, can I still get my fund back?</i></p>
    <p>Please think carefully before the payment. Once you complete a payment, in principle we can’t get your fund returned because of concerns like security, safety, etc. If you think your are in a special circumstance, please contact us directly by ${EMAIL}.</p>
   `

}

// Initialize the page language based on browser setting
if (checkoutLanguage.includes("zh")) {
  setContectLanguageAsChinese()
} else {
  setContectLanguageAsEnglish();
}  

// Language button handler 
var updateLanguage = function(evt) {
  if (evt && evt.type === "keypress" && evt.keyCode !== 13) {
    return;
  }

  var buttonID = evt.target.id;

  if (buttonID === "lang-chinese") {
    setContectLanguageAsChinese()
  } 

  if (buttonID === "lang-english") {
    setContectLanguageAsEnglish()
  }
};

// React to language button
Array.from(document.getElementsByClassName("language-btn")).forEach(
  element => {
    element.addEventListener("click", updateLanguage);
  }
);
