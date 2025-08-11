import contacthero from '../assets/contact/contact.jpg';
import ContactForm from '../components/contact/ContactForm';

export default function ContactUsPage() {

  return (
    <div className="max-w-7xl mx-auto text-white px-4 sm:px-6 lg:px-8 pt-24">

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6" style={{ border: '0.5px solid grey', color: "white" }}>
        {/* Left Side - Image and Info */}
        <div className="w-full lg:w-2/3">
          <img 
            src={contacthero} 
            style={{backgroundSize:"100% 100%", backgroundPosition:"center", backgroundRepeat:"no-repeat"}}
            alt="placeholder" 
            className='w-full h-full placeholder'
          />
        </div>

        <div className='flex flex-col mt-6 w-full lg:w-1/3 px-4 lg:px-6'>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 mt-8 sm:mt-12">문의하기</h2>
          <div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              비디오크루 서비스에 대해 궁금한 점이 있으시거나 프로젝트에 대해<br className="hidden sm:block" />
              문의하실 것이 있으시면 언제든 연락을 주시길 바라며 문의시<br className="hidden sm:block" />
              상세히 적신 드리겠습니다.
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">정보</h2>

              <div className="mb-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">ADDRESS</p>
                <p className="text-xs sm:text-sm text-gray-300">
                  7, Teheran-ro 5-gil, Gangnam-gu, Seoul<br />
                  (Songda-dong 2-ga, Songdu Station Hyundai<br />
                  Terra Tower) W1601-1603
                </p>
              </div>

              <div>
                <p className="text-xs sm:text-sm text-gray-500 mb-1">CALL US</p>
                <p className="text-gray-300 mt-4 sm:mt-10">393-88-01627</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
}
