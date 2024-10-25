// Hiện thị form tìm kiếm
let searchForm = document.querySelector(".search-form");
let shoppingCart = document.querySelector(".shopping-cart");
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form"); // Thêm biến cho form đăng ký
let navbar = document.querySelector(".navbar");

// Hiện thị form tìm kiếm
document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  registerForm.style.display = "none"; // Ẩn form đăng ký
  navbar.classList.remove("active");
};

// Hiện thị giỏ hàng
document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  registerForm.style.display = "none"; // Ẩn form đăng ký
  navbar.classList.remove("active");
};

// Xử lý sự kiện tăng giảm số lượng
document.addEventListener("DOMContentLoaded", () => {
  const increaseButtons = document.querySelectorAll('.increase');
  const decreaseButtons = document.querySelectorAll('.decrease');

  increaseButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const input = e.target.closest('.quantity-control').querySelector('.quantity');
      input.value = parseInt(input.value) + 1;
    });
  });

  decreaseButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const input = e.target.closest('.quantity-control').querySelector('.quantity');
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });
});

// Hiện thị form tài khoản
document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  shoppingCart.classList.remove("active");
  searchForm.classList.remove("active");
  navbar.classList.remove("active");

  // Xóa giá trị email và mật khẩu mỗi lần form mở
  clearLoginForm();
};

// Hàm xóa giá trị của các input trong form đăng nhập
function clearLoginForm() {
  const emailInput = loginForm.querySelector('input[type="email"]');
  const passwordInput = loginForm.querySelector('input[type="password"]');
  
  if (emailInput && passwordInput) {
    emailInput.value = "";
    passwordInput.value = "";
  }
}

// Xử lý sự kiện chuyển đổi giữa form đăng nhập và đăng ký
const registerLink = document.querySelector("#register-link");
const loginLink = document.querySelector("#login-link");

registerLink.addEventListener("click", (e) => {
  e.preventDefault(); // Ngăn chặn hành động mặc định của thẻ <a>
  loginForm.classList.remove("active"); // Ẩn form đăng nhập
  registerForm.classList.add("active"); // Hiển thị form đăng ký
  registerForm.style.display = "block"; // Đảm bảo form đăng ký được hiển thị
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  registerForm.classList.remove("active"); // Ẩn form đăng ký
  loginForm.classList.add("active"); // Hiển thị form đăng nhập
});


// Hiện thị user
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  registerForm.style.display = "none"; // Ẩn form đăng ký
};

// Remove all active classes on scroll
window.onscroll = () => {
  searchForm.classList.remove("active");
  shoppingCart.classList.remove("active");
  loginForm.classList.remove("active");
  registerForm.style.display = "none"; // Ẩn form đăng ký
  navbar.classList.remove("active");
};

// Initialize Swiper for product slider
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// Initialize Swiper for review slider
var reviewSwiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
