import logo from '../../assets/logo.png';

export default function Footer() {
  return (
    <footer className="px-8 py-4 border-t border-gray-800 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-4 mt-5">
          <img src={logo} alt="Video Crew" className="h-6" />
        </div>
        <div className="text-xs text-gray-500 leading-relaxed mt-10">
          <p>•비디오크루(Video Crew)•대표 (주)러닝크루등록번호아 영상 신문 번호번호대표 리더크루 문화예술 공연 불법 해외이주 바탕가기</p>
          <p>주소: 서울 영등포 양천구2가 기산로가기 서울시 마케팅센터빌딩 W601S-1603S(대표팀) | info@learning-crew.com</p>
          <br />
          <p>© 2025. Video Crew all rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
