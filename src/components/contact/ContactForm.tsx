import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    projectType: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    referralSource: '',
    description: '',
    socialMedia: '',
    privacyPolicy: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [dropdownStates, setDropdownStates] = useState<Record<string, boolean>>({
    projectType: false,
    projectDetails: false,
    budget: false,
    timeline: false,
    referralSource: false
  });

  const projectTypes = [
    '기업 홍보영상',
    '제품 소개영상',
    '브랜드 스토리',
    '광고 제작',
    '이벤트 영상',
    '교육 콘텐츠',
    '기타'
  ];

  const projectDetails = [
    '1-2분 길이',
    '3-5분 길이',
    '5-10분 길이',
    '10분 이상',
    '시리즈 형태'
  ];

  const budgets = [
    '500만원 미만',
    '500-1000만원',
    '1000-3000만원',
    '3000만원 이상',
    '예산 협의'
  ];

  const timelines = [
    '1주일 이내',
    '2주일 이내',
    '1개월 이내',
    '2개월 이내',
    '협의 가능'
  ];

  const referralSources = [
    '검색엔진',
    '지인 추천',
    'SNS',
    '온라인 광고',
    '기타'
  ];

  const validateField = (name: string, value: string | boolean): string => {
    switch (name) {
      case 'name':
        return (value as string).trim() === '' ? '성함을 입력해주세요.' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((value as string).trim() === '') return '이메일을 입력해주세요.';
        if (!emailRegex.test(value as string)) return '올바른 이메일 형식을 입력해주세요.';
        return '';
      case 'company':
        return (value as string).trim() === '' ? '회사명을 입력해주세요.' : '';
      case 'website':
        return (value as string).trim() === '' ? '웹사이트 주소를 입력해주세요.' : '';
      case 'projectType':
        return value === '' ? '희망 영상 분야를 선택해주세요.' : '';
      case 'projectDetails':
        return value === '' ? '희망 영상 러닝 타임을 선택해주세요.' : '';
      case 'budget':
        return value === '' ? '제작 목적을 선택해주세요.' : '';
      case 'timeline':
        return value === '' ? '영상을 어디에 업로드 할 예정인가요?' : '';
      case 'referralSource':
        return value === '' ? '한끝 영상 업체를 선택해주세요.' : '';
      case 'description':
        return (value as string).trim() === '' ? '개인정보 수집 및 이용 동의는 필수입니다.' : '';
      case 'privacyPolicy':
        return !value ? '개인정보 수집 및 이용에 동의해주세요.' : '';
      default:
        return '';
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleDropdownSelect = (field: keyof typeof formData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    setDropdownStates(prev => ({
      ...prev,
      [field]: false
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const toggleDropdown = (field: keyof typeof dropdownStates) => {
    setDropdownStates(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch('https://video-crew-backend-production.up.railway.app/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        });
        
        if (response.ok) {
          alert('문의가 성공적으로 전송되었습니다!');
          setFormData({
            name: '',
            email: '',
            company: '',
            website: '',
            projectType: '',
            projectDetails: '',
            budget: '',
            timeline: '',
            referralSource: '',
            description: '',
            socialMedia: '',
            privacyPolicy: false
          });
        } else {
          alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('문의 전송에 실패했습니다. 다시 시도해주세요.');
      }
    }
  };

  const DropdownField = ({ field, options, placeholder, value }: {
    field: keyof typeof formData;
    options: string[];
    placeholder: string;
    value: string;
  }) => (
    <div className="relative">
      <div
        className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors[field] ? 'border-red-500' : 'border-gray-600'
          } rounded cursor-pointer flex justify-between items-center hover:border-gray-500 transition-colors text-sm md:text-base`}
        onClick={() => toggleDropdown(field)}
      >
        <span className={`${value ? 'text-white' : 'text-gray-500'} truncate pr-2`}>
          {value || placeholder}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform flex-shrink-0 ${dropdownStates[field] ? 'rotate-180' : ''
          }`} />
      </div>

      {dropdownStates[field] && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border border-gray-600 rounded mt-1 z-10 max-h-48 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-3 md:px-4 py-2 md:py-3 hover:bg-gray-800 cursor-pointer text-white border-b border-gray-700 last:border-b-0 text-sm md:text-base"
              onClick={() => handleDropdownSelect(field, option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {errors[field] && (
        <p className="text-red-500 text-xs md:text-sm mt-1">{errors[field]}</p>
      )}
    </div>
  );

  return (
    <div className="py-6 md:py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">Contact Us</h1>

        <div className="space-y-4 md:space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="성함 / 직함"
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base`}
              />
              {errors.name && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.name}</p>}
            </div>

            <DropdownField
              field="projectType"
              options={projectTypes}
              placeholder="희망 타입 (분야)"
              value={formData.projectType}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="이메일 주소"
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base`}
              />
              {errors.email && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.email}</p>}
            </div>

            <DropdownField
              field="projectDetails"
              options={projectDetails}
              placeholder="희망 영상 (러닝타임 및 어떤형태 외)"
              value={formData.projectDetails}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="연락처"
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors.company ? 'border-red-500' : 'border-gray-600'
                  } rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base`}
              />
              {errors.company && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.company}</p>}
            </div>

            <DropdownField
              field="budget"
              options={budgets}
              placeholder="제작 목적"
              value={formData.budget}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="회사명 / 사업명"
                className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors.website ? 'border-red-500' : 'border-gray-600'
                  } rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base`}
              />
              {errors.website && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.website}</p>}
            </div>

            <DropdownField
              field="timeline"
              options={timelines}
              placeholder="영상을 어디에 업로드 할 예정인가요?"
              value={formData.timeline}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="projectType2"
                placeholder="영상 제작 필요"
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
              />
            </div>

            <DropdownField
              field="referralSource"
              options={referralSources}
              placeholder="한끝 영상 업체 (유튜브 링크, 업체명 등)"
              value={formData.referralSource}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <input
                type="text"
                name="timeline2"
                placeholder="희망 영상 납품 일시"
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
              />
            </div>

            <div>
              <input
                type="text"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleInputChange}
                placeholder="현재 보유한 홈페이지, SNS, 콘텐츠(자기소개 링크 기록 목적 외) 참고자료"
                className="w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border border-gray-600 rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-sm md:text-base"
              />
            </div>
          </div>

          <div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="개인정보 수집 및 이용 동의  
비디오크루에서(이하 회사)는 영상 제작 문의에 대한 정보를 직접 수집 및 처리를 위해 다음과 같은 개인정보를 수집 이용하고자 합니다.
이에 내용을 충분히 확인하시고 동의 여부를 결정하시기 바랍니다.
1. 수집 목적
- 문의 접수, 상담, 견적 이메일 주소 연락처, 회사명 개인 영상 문의 및 답변이며, 납품성과 제작 내역
- 선택 항목: 성명, 전화 휴대전화(휴대폰 가입 여정), 출판저작권 SNS 주소 등"
              className={`w-full px-3 md:px-4 py-2 md:py-3 bg-transparent border ${errors.description ? 'border-red-500' : 'border-gray-600'
                } rounded text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none text-sm md:text-base`}
              rows={5}
            />

            {errors.description && <p className="text-red-500 text-xs md:text-sm mt-1">{errors.description}</p>}
          </div>

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="privacyPolicy"
              name="privacyPolicy"
              checked={formData.privacyPolicy}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 md:w-5 md:h-5 cursor-pointer bg-white"
            />
            <label htmlFor="privacyPolicy" className="text-xs md:text-sm text-gray-400">
              개인정보 수집 및 이용에 동의합니다.
            </label>
          </div>
          {errors.privacyPolicy && <p className="text-red-500 text-xs md:text-sm">{errors.privacyPolicy}</p>}

          <div className="text-center pt-4 md:pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-20 py-2 md:py-3 rounded-full font-medium transition-colors w-full md:w-64 text-sm md:text-base"
            >
              제출하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}