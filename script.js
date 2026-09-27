const form = document.getElementById("orderForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const product = document.getElementById("product").value;
  const qty = document.getElementById("qty").value;
  const city = document.getElementById("city").value.trim();

  message.style.display = "block";
  message.innerHTML = `
    <strong>${name}، سفارش اولیه ثبت شد ✓</strong><br>
    محصول: ${product} | تعداد: ${qty} | شهر: ${city}<br>
    <small>این نسخه آزمایشی است؛ مرحله بعد می‌توانیم ثبت سفارش را به واتساپ یا سیستم واقعی وصل کنیم.</small>
  `;

  message.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
