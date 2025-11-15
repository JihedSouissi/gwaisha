const FacebookIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.59.12 4.794.265 4.14.477c-.704.226-1.302.53-1.903.93C1.635 1.877.53 2.982 0 4.14c-.226.704-.53 1.302-.93 1.903C-.265 6.79-.12 7.59-.067 8.79-.014 9.996 0 10.396 0 14.017c0 3.621.014 4.021.067 5.227.053 1.2.198 1.996.41 2.65.226.704.53 1.302.93 1.903.9.9 2.005 2.005 3.163 2.535.704.226 1.302.53 1.903.93.6.4 1.198.704 1.903.93.654.212 1.45.357 2.65.41 1.2.053 1.6.067 5.227.067 3.621 0 4.021-.014 5.227-.067 1.2-.053 1.996-.198 2.65-.41.704-.226 1.302-.53 1.903-.93.9-.9 2.005-2.005 2.535-3.163.226-.704.53-1.302.93-1.903.4-.6.704-1.198.93-1.903.212-.654.357-1.45.41-2.65.053-1.2.067-1.6.067-5.227 0-3.621-.014-4.021-.067-5.227-.053-1.2-.198-1.996-.41-2.65-.226-.704-.53-1.302-.93-1.903C22.123 1.635 21.018.53 19.86 0c-.704-.226-1.302-.53-1.903-.93C17.254.265 16.458.12 15.258.067 14.052.014 13.652 0 10.031 0h2.017zm4.974 2.342c.8 0 1.45.65 1.45 1.45s-.65 1.45-1.45 1.45-1.45-.65-1.45-1.45.65-1.45 1.45-1.45zm-4.974 2.342c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6zm0 2c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-black-bg text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-start">
            <img src="/storage/Logo.png" alt="Footer Logo" className="h-8 sm:h-10 mb-4" />
            <p className="text-gray-400 mb-4 text-sm">
              © 2025 غوشا للمجوهرات. جميع الحقوق محفوظة.
            </p>
            <div className="flex space-x-3 sm:space-x-4 space-x-reverse">
              <button className="text-gray-400 hover:text-white p-2 rounded" aria-label="facebook">
                <FacebookIcon />
              </button>
              <button className="text-gray-400 hover:text-white p-2 rounded" aria-label="instagram">
                <InstagramIcon />
              </button>
              <button className="text-gray-400 hover:text-white p-2 rounded" aria-label="twitter">
                <TwitterIcon />
              </button>
              <button className="text-gray-400 hover:text-white p-2 rounded" aria-label="youtube">
                <YouTubeIcon />
              </button>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              تسوق
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">خواتم ذهب</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">أساور فاخرة</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">سلاسل ألماس</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">أقراط ماسية</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              الشركة
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">عن المتجر</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">الوظائف</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">المدونة</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">الشروط والأحكام</a></li>
            </ul>
          </div>

          {/* Support & Help Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">
              الدعم والمساعدة
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">تتبع الطلب</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">سياسة الشحن والإرجاع</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">الضمان والصيانة</a></li>
              <li><a href="#" className="hover:text-primary-red text-sm sm:text-base">طرق الدفع</a></li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <h3 className="font-bold mb-4 text-center sm:text-lg">
            طرق الدفع
          </h3>
          <div className="flex justify-center gap-2 sm:gap-4 flex-wrap">
            {/* Placeholder for payment icons */}
            <img src="/path/to/visa.png" alt="Visa" className="h-4 sm:h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/path/to/mastercard.png" alt="Mastercard" className="h-4 sm:h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/path/to/amex.png" alt="American Express" className="h-4 sm:h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/path/to/applepay.png" alt="Apple Pay" className="h-4 sm:h-6 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="/path/to/googlepay.png" alt="Google Pay" className="h-4 sm:h-6 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
