/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Play, 
  Square,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Navigation,
  FileText,
  MessageCircle,
  Download,
  Share2,
  Mail,
  Smartphone,
  ArrowLeft
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation as SwiperNavigation, Pagination, Autoplay } from 'swiper/modules';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ConsultingPage from './ConsultingPage';
import ReviewPage from './ReviewPage';
import SuccessPlansPage from './SuccessPlansPage';
import ArchivePage from './ArchivePage';
import NoticePage from './NoticePage';
import AboutPage from './AboutPage';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- Types ---
interface Expert {
  id: number;
  tags: string;
  name: string;
  title: string;
  experience: string[];
  description: string;
  imageUrl: string;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  department: string;
}

// --- Data ---
const EXPERTS: Expert[] = [
  {
    id: 1,
    tags: "R&D Road-map IT서비스",
    name: "황진석",
    title: "공학박사",
    experience: ["· 동서울,숭실대 겸임교수", "· 대한민국산업현장교수"],
    description: "전자상거래, 물류, 유통, 제조 등 25년 이상의 필드 경험을 바탕으로 창업 및 중소기업들의 연구개발 사업 준비를 함께 하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img1.png"
  },
  {
    id: 2,
    tags: "전기,전자. PCB, 시제품 제작",
    name: "정호석",
    title: "공학박사",
    experience: ["· 책임 컨설턴트", "· 대한민국산업현장교수"],
    description: "유선,무선,정보통신 기능장 출신으로 20년 이상 제품개발 및 설계,과제수행까지 여러분들의 눈높이에 맞추어 함께 하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img2.png"
  },
  {
    id: 3,
    tags: "NCS개발,SNS교육 과정 설계",
    name: "이재철",
    title: "교육학 명예박사",
    experience: ["· 책임 컨설턴트"],
    description: "에듀소켓 대표이사 25년간 교육사업 및 NCS기반의 솔루션 개발 서비스 경험을 공유하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img3.png"
  },
  {
    id: 4,
    tags: "금융,핀테크",
    name: "김응석",
    title: "공학박사",
    experience: ["· 책임 컨설턴트"],
    description: "올워크 대표이사 25년간 금융,공공부분 마케팅 수행 핀테크와 보안 전문가로서의 경험과 지식을 공유하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img4.png"
  },
  {
    id: 5,
    tags: "디자인,UI,UX 퍼블리싱",
    name: "임화연",
    title: "공학박사",
    experience: ["· 책임 컨설턴트", "· 동양미래대 겸임교수", "· 대한민국산업현장교수"],
    description: "디자인아트 플러스 대표이사 30여권의 디자인 관련 서적 출판 20여년간 1,500개 이상 기업들의 디자인 경험을 공유하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img5.png"
  },
  {
    id: 6,
    tags: "AI SW개발 APP Web 개발",
    name: "권태정",
    title: "공학박사",
    experience: ["· 책임 컨설턴트", "· 인천재능대 겸임교수"],
    description: "KM 기술연구소 대표이사 25년 이상의 다양한 S/W개발 경험을 바탕으로 최적의 솔루션을 제공하고자 합니다.",
    imageUrl: "https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/main_people_img6.png"
  }
];

const ANNOUNCEMENTS: Announcement[] = [
  { id: "5871", title: "2020년도 사회복합재난 대응기술 개발사업 신규과제 공모 (행안부 공고 제2020-550호, 2020.8.20)", date: "2021-08-06", department: "한국산업기술평가관리원" },
  { id: "5870", title: "디지털전환지원교육 수요처 모집", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5869", title: "「2021 기업가정신 확산 및 진흥 유공포상」 신청 공고", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5868", title: "제 6회 2021 디지털헬스 해커톤 참가자 모집", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5867", title: "2021 판교경기문화창조허브 가상오피스 3차모집 공고", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5866", title: "2021 기술기반 로컬밸류-UP 스테이션 「지역청년, 로컬에 가치를 더한다」 공모전 모집 공고", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5865", title: "2021년 금융위원회 D-테스트베드 시범사업 참여자 모집", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5864", title: "[스타트업] 일본 TOPPAN 오픈이노베이션 프로그램 참가 스타트업 모집", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5863", title: "[스타트업] 미국 Verizon 오픈이노베이션 프로그램 참가 스타트업 모집", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
  { id: "5862", title: "[한국수자원공사] 2021년 초기창업패키지 Start-up 팀 빌딩 프로그램 모집공고", date: "2021-08-06", department: "창업진흥원 (케이스타트업)" },
];

const CATEGORIES = [
  "전체", "중소기업기술정보진흥원", "서울시 R&D지원센터", "한국산업기술평가관리원", 
  "창업진흥원 (케이스타트업)", "비즈인포 기업마당", "한국산업기술진흥원", 
  "소상공인시장진흥공단", "정보통신기획평가원", "한국콘텐츠 진흥원"
];

// --- Components ---

const Header = ({ onAboutClick }: { onAboutClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="hidden md:block bg-gray-50 border-b border-gray-100">
        <div className="max-w-[1300px] mx-auto px-4 h-10 flex items-center justify-end">
          <div className="flex gap-4 text-xs text-gray-500 font-medium">
            <button onClick={() => navigate('/')} className="hover:text-blue-600 transition-colors">홈</button>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">로그인</a>
            <span className="text-gray-300">|</span>
            <a href="#" className="hover:text-blue-600 transition-colors">회원가입</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-[1300px] mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <h1 className="flex-shrink-0">
            <Link to="/">
              <img 
                src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/logo.png" 
                alt="R&D Portal Logo" 
                className="h-8 md:h-10"
              />
            </Link>
          </h1>
          
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {["R&D개요", "공지사항", "자료실", "합격사업계획서", "컨설팅 신청", "사업계획서 리뷰", "묻고 답하기"].map((item) => {
              if (item === "묻고 답하기") {
                return (
                  <Link 
                    key={item} 
                    to="/qna"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "컨설팅 신청") {
                return (
                  <Link 
                    key={item} 
                    to="/consulting"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "사업계획서 리뷰") {
                return (
                  <Link 
                    key={item} 
                    to="/review"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "합격사업계획서") {
                return (
                  <Link 
                    key={item} 
                    to="/success-plans"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "자료실") {
                return (
                  <Link 
                    key={item} 
                    to="/archive"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "공지사항") {
                return (
                  <Link 
                    key={item} 
                    to="/notice"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              if (item === "R&D개요") {
                return (
                  <Link 
                    key={item} 
                    to="/about"
                    className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </Link>
                );
              }
              return (
                <button 
                  key={item} 
                  onClick={undefined}
                  className="text-[15px] font-semibold text-gray-800 hover:text-blue-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  {item}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600">
            <Search size={24} />
          </button>
          <button 
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Hamburger Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-[101] shadow-2xl p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <img 
                  src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/logo.png" 
                  alt="Logo" 
                  className="h-8"
                />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                  <X size={28} className="text-gray-600" />
                </button>
              </div>
              
              <div className="space-y-6">
                {["R&D개요", "공지사항", "자료실", "합격사업계획서", "컨설팅 신청", "사업계획서 리뷰", "묻고 답하기"].map((item) => {
                  let to = "";
                  if (item === "묻고 답하기") to = "/qna";
                  if (item === "컨설팅 신청") to = "/consulting";
                  if (item === "사업계획서 리뷰") to = "/review";
                  if (item === "합격사업계획서") to = "/success-plans";
                  if (item === "자료실") to = "/archive";
                  if (item === "공지사항") to = "/notice";
                  if (item === "R&D개요") to = "/about";

                  if (to) {
                    return (
                      <Link 
                        key={item} 
                        to={to}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors group"
                      >
                        {item}
                        <span className="block h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full mt-1" />
                      </Link>
                    );
                  }

                  return (
                    <button 
                      key={item} 
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      className="block text-left w-full text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors group"
                    >
                      {item}
                      <span className="block h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full mt-1" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-12 pt-12 border-t border-gray-100 space-y-4 text-sm text-gray-500">
                <p><b>Address</b><br />서울특별시 구로구 신도림동 16, 407동 501호</p>
                <p><b>Tel</b><br />02-324-8124</p>
                <p><b>Email</b><br />rnd@rnd.co.kr</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

const Ticker = () => {
  return (
    <div className="bg-[#2a3042] text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="max-w-[1300px] mx-auto px-4 relative">
        <motion.div 
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="inline-flex gap-12 text-sm opacity-90"
        >
          <span>[2023-05-25 04:47:37] 현재 0개의 사업공고문 게재</span>
          <span>총 누적 사업공고문 5,871건</span>
          <span>로그인 사용자 수 : 0</span>
          <span>최근 업데이트 : 2021-08-06 17:00:02</span>
        </motion.div>
      </div>
    </div>
  );
};

const QnaPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">묻고 답하기</h2>
        <p className="text-gray-500 text-lg uppercase tracking-wider font-medium">Q&A CENTER</p>
      </div>
      
      <div className="mb-12">
        <div className="text-center mb-8">
          <p className="text-xl font-bold text-gray-800">다양한 질문과 답변을 공유하는 공간 입니다</p>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-600 p-8 rounded-r-2xl shadow-sm max-w-4xl mx-auto">
          <p className="text-blue-700 font-bold mb-4 italic text-xl">"Garbage in, garbage out (GIGO)"</p>
          <div className="text-gray-600 leading-relaxed space-y-2 text-[15px]">
            <p><strong>"쓰레기가 들어가면 쓰레기가 나온다"</strong>는 뜻으로 궁금하신 부분에 대한 정확한 질문이 정확한 답변으로 이어집니다.</p>
            <p>질문을 하시기 전에 궁금하신 점들을 마음속으로 정리하여 보시고 최대한 자유롭게 자세히 작성하여 주세요.</p>
            <p className="pt-2 text-sm text-gray-500 border-t border-blue-100 italic">※ 질문에 대한 홍보 등의 게시글은 관리자 판단과 권한으로 임의로 삭제할 수 있으며 공익적인 내용은 그렇지 않습니다.</p>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-100 mb-10 overflow-hidden">
        <table className="w-full text-center border-collapse min-w-[800px]">
          <thead className="bg-gray-900 text-white text-sm font-bold">
            <tr>
              <th className="px-6 py-5 w-24">번호</th>
              <th className="px-6 py-5 text-left">제목</th>
              <th className="px-6 py-5 w-40">등록자</th>
              <th className="px-6 py-5 w-40">작성일</th>
              <th className="px-6 py-5 w-32 border-l border-gray-800">답변상태</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-500 bg-white">
            <tr className="hover:bg-gray-50 transition-colors">
              <td colSpan={5} className="py-32 flex flex-col items-center justify-center gap-4">
                <MessageCircle size={64} className="text-gray-200" />
                <p className="text-xl font-medium text-gray-400 italic">등록된 질문이 없습니다.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          메인으로 이동
        </Link>
        <button className="flex items-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-xl hover:bg-blue-700 transition-all active:scale-95 group">
          <FileText size={20} className="group-hover:rotate-12 transition-transform" />
          질문 작성하기
        </button>
      </div>
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("전체");
  const [activeBoardTab, setActiveBoardTab] = useState("notice");
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pt-16 md:pt-20">
      <Header onAboutClick={() => {}} />
      <Ticker />

      {/* Pages */}
      <Routes>
        <Route path="/" element={
          <main>
            {/* Hero Section */}
            <section className="py-12 md:py-20 bg-gray-50">
              <div className="max-w-[1300px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">R&D 통합 플랫폼</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                  우리가 함께 만들어 가는 R&D(연구 개발) 플랫폼, 기업들의 성장을 위해 지식과 경험을 나눕니다.
                </p>
                
                <div className="max-w-3xl mx-auto relative group">
                  <input 
                    type="text" 
                    placeholder="공고 제목을 입력해주세요"
                    className="w-full h-14 md:h-16 pl-6 pr-32 rounded-full border-2 border-gray-200 focus:border-blue-600 outline-none transition-all shadow-md text-lg"
                  />
                  <button className="absolute right-2 top-2 bottom-2 px-8 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg">
                    검색
                  </button>
                </div>
              </div>
            </section>

            {/* Announcement Board */}
            <section className="py-20">
              <div className="max-w-[1300px] mx-auto px-4">
                <div className="mb-12 border-b border-gray-100 pb-12">
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-bold mb-3">알림마당</h3>
                      <p className="text-gray-500">분야별 최신 R&D 사업 공고를 실시간으로 확인하세요.</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {CATEGORIES.slice(0, 5).map(cat => (
                        <button 
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            activeCategory === cat 
                              ? "bg-blue-600 text-white shadow-md scale-105" 
                              : "bg-white border border-gray-200 text-gray-600 hover:border-blue-300"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
                  <table className="w-full text-left border-collapse min-w-[800px]">
                    <thead>
                      <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
                        <th className="px-6 py-4 font-semibold w-16">번호</th>
                        <th className="px-6 py-4 font-semibold">사업명</th>
                        <th className="px-6 py-4 font-semibold w-32 text-center">등록일</th>
                        <th className="px-6 py-4 font-semibold w-40">주관부처</th>
                        <th className="px-6 py-4 font-semibold w-24 text-center">기능</th>
                        <th className="px-6 py-4 font-semibold w-32 text-center">바로가기</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {ANNOUNCEMENTS.map((ann, idx) => (
                        <tr key={ann.id} className="hover:bg-blue-50/30 transition-colors group">
                          <td className="px-6 py-4 text-sm text-gray-400">{ann.id}</td>
                          <td className="px-6 py-4">
                            <a href="#" className="font-medium text-gray-800 hover:text-blue-600 line-clamp-1">
                              {ann.title}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-center text-sm text-gray-500 font-mono">{ann.date}</td>
                          <td className="px-6 py-4 text-sm font-semibold text-blue-600">{ann.department}</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex items-center justify-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                              <Share2 size={16} className="cursor-pointer hover:text-blue-600" />
                              <Mail size={16} className="cursor-pointer hover:text-blue-600" />
                              <Smartphone size={16} className="cursor-pointer hover:text-blue-600" />
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button className="text-xs font-bold px-3 py-1.5 border border-gray-200 rounded text-gray-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                              상세보기
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-8 text-center">
                  <button className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-colors">
                    전체 공고 보러가기 <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </section>

            {/* Services Section */}
            <section className="py-24 bg-[#0a0f1d] text-white">
              <div className="max-w-[1300px] mx-auto px-4">
                <div className="text-center mb-16">
                  <h3 className="text-3xl font-bold mb-4">자주 찾는 서비스</h3>
                  <p className="text-gray-400">스타트업을 꿈꾸는 모든 이들의 도전과 열정을 응원합니다.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "사업공고문 보기", icon: <FileText size={48} />, bg: "bg-blue-600/10 border-blue-500/30" },
                    { title: "유사한 사업 보기", icon: <Navigation size={48} />, bg: "bg-indigo-600/10 border-indigo-500/30" },
                    { title: "참고자료 다운로드", icon: <Download size={48} />, bg: "bg-cyan-600/10 border-cyan-500/30" },
                    { title: "합격 사업계획서", icon: <Share2 size={48} />, bg: "bg-violet-600/10 border-violet-500/30" },
                  ].map((item, i) => (
                    <motion.div 
                      whileHover={{ y: -10 }}
                      key={i} 
                      className={`p-10 rounded-2xl border ${item.bg} relative overflow-hidden group cursor-pointer`}
                    >
                      <div className="relative z-10">
                        <div className="text-white mb-8 group-hover:scale-110 transition-transform duration-500 origin-left">
                          {item.icon}
                        </div>
                        <h4 className="text-2xl font-bold mb-4 leading-tight">{item.title}</h4>
                        <span className="text-sm font-bold text-blue-400 border-b border-blue-400 pb-1">자세히 보기</span>
                      </div>
                      <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-150 transition-transform duration-700">
                        {item.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Expert Section */}
            <section className="py-24 overflow-hidden">
              <div className="max-w-[1300px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-2/3">
                    <div className="mb-12 flex justify-between items-end">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">전문가/컨설턴트 리스트</h3>
                        <p className="text-gray-500">분야별 최고의 전문가들과 상의하세요.</p>
                      </div>
                    </div>

                    <Swiper
                      modules={[SwiperNavigation]}
                      spaceBetween={20}
                      slidesPerView={1}
                      navigation={{
                        nextEl: '.swiper-expert-next',
                        prevEl: '.swiper-expert-prev',
                      }}
                      breakpoints={{
                        640: { slidesPerView: 2 },
                      }}
                      className="expert-swiper"
                    >
                      {EXPERTS.map(expert => (
                        <SwiperSlide key={expert.id}>
                          <div className="bg-gray-50 rounded-2xl p-6 h-full flex flex-col group border border-transparent hover:border-blue-200 hover:bg-white transition-all duration-300">
                            <div className="flex gap-4 mb-6">
                              <div className="w-24 h-24 rounded-2xl overflow-hidden bg-gray-200 flex-shrink-0">
                                <img 
                                  src={expert.imageUrl} 
                                  alt={expert.name} 
                                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                                  referrerPolicy="no-referrer"
                                />
                              </div>
                              <div className="flex-grow">
                                <span className="text-[10px] bg-blue-100 text-blue-600 px-2 py-0.5 rounded font-bold mb-2 inline-block">
                                  {expert.tags}
                                </span>
                                <h4 className="text-xl font-bold">{expert.name} <span className="text-sm text-gray-500 font-normal">{expert.title}</span></h4>
                                <div className="mt-2 space-y-1">
                                  {expert.experience.map((exp, i) => (
                                    <p key={i} className="text-[11px] text-gray-500">{exp}</p>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow border-t border-gray-100 pt-6">
                              <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                                {expert.description}
                              </p>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    
                    <div className="flex gap-2 mt-8">
                      <button className="swiper-expert-prev w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
                        <ChevronLeft size={20} />
                      </button>
                      <button className="swiper-expert-next w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-md transition-all">
                        <ChevronRight size={20} />
                      </button>
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-1">컨설팅 신청 / 문의</h3>
                      <p className="text-gray-500 text-sm">전문가와의 1:1 상담을 신청하세요.</p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-auto lg:h-[400px] shadow-xl group">
                      <img 
                        src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/consult_thumb01.jpg" 
                        alt="Consulting" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <motion.div 
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer border border-white/30"
                        >
                          <Play className="text-white fill-white ml-1" size={24} />
                        </motion.div>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <Link 
                          to="/consulting"
                          className="w-full h-12 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg flex items-center justify-center"
                        >
                          온라인 컨설팅 신청하기
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Board Tabs Section */}
            <section className="py-24 bg-gray-50">
              <div className="max-w-[1300px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12">
                  <div className="lg:w-2/3 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex gap-6">
                        <button 
                          onClick={() => setActiveBoardTab("notice")}
                          className={`text-2xl font-bold pb-2 transition-all ${
                            activeBoardTab === "notice" ? "text-gray-900 border-b-4 border-blue-600" : "text-gray-300 hover:text-gray-500"
                          }`}
                        >
                          공지사항
                        </button>
                        <button 
                          onClick={() => setActiveBoardTab("pds")}
                          className={`text-2xl font-bold pb-2 transition-all ${
                            activeBoardTab === "pds" ? "text-gray-900 border-b-4 border-blue-600" : "text-gray-300 hover:text-gray-500"
                          }`}
                        >
                          자료실
                        </button>
                      </div>
                      <button className="text-sm font-bold text-gray-400 hover:text-blue-600 flex items-center gap-1">
                        더보기 <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="space-y-4">
                      {(activeBoardTab === "notice" 
                        ? [
                          { t: "R&D(연구개발)통합 플랫폼은 현재 고도화 작업중입니다.", d: "2022-05-03" },
                          { t: "2022년도 창업지원사업 통합공고문", d: "2022-02-06" },
                          { t: "2021년도 창업지원사업 통합공고문", d: "2021-01-11" },
                          { t: "R&D 사업 계획서 작성 가이드라인 배포", d: "2021-12-15" }
                        ]
                        : [
                          { t: "소상공인 시장진흥공단 통합사업 공고 자료", d: "2021-10-03" },
                          { t: "2021년도 창업지원사업 통합공고문 원본", d: "2021-10-03" },
                          { t: "정부지원사업 합격 사례 분석 리포트", d: "2021-09-20" }
                        ]
                      ).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 group cursor-pointer hover:pl-2 transition-all">
                          <div className="flex items-center gap-4">
                            <span className="text-[10px] font-bold px-2 py-0.5 bg-gray-100 text-gray-500 rounded uppercase tracking-wider">
                              {activeBoardTab}
                            </span>
                            <span className="font-medium text-gray-700 group-hover:text-blue-600 transition-colors line-clamp-1">{item.t}</span>
                          </div>
                          <span className="text-sm text-gray-400 font-mono flex-shrink-0">{item.d}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:w-1/3 flex flex-col gap-6">
                    <div className="bg-gradient-to-br from-indigo-600 to-blue-700 rounded-3xl p-8 text-white relative overflow-hidden h-full min-h-[300px]">
                      <h4 className="text-2xl font-bold mb-4 relative z-10">사업제휴 및 제안</h4>
                      <p className="text-blue-100 text-sm mb-12 relative z-10 leading-relaxed">
                        R&D 플랫폼과 함께 성장할<br />파트너사를 모십니다.
                      </p>
                      
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000 }}
                        pagination={{ clickable: true, className: '!bottom-8 !left-8 !w-auto flex gap-2' }}
                        className="h-full w-full !absolute inset-0"
                      >
                        <SwiperSlide>
                          <img src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/m_commu_img02.jpg" alt="Partner 1" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/m_commu_img04.jpg" alt="Partner 2" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/m_commu_img05.jpg" alt="Partner 3" className="w-full h-full object-cover opacity-40" referrerPolicy="no-referrer" />
                        </SwiperSlide>
                      </Swiper>

                      <div className="absolute right-8 bottom-8 z-10">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                          <ChevronRight className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Banner Strip */}
            <section className="py-12 bg-white">
              <div className="max-w-[1300px] mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { t: "디자인/CI/BI", img: "m_banner_img01.png" },
                    { t: "특허,실용,상표,디자인", img: "m_banner_img02.png" },
                    { t: "시제품 제작", img: "m_banner_img03.png" },
                  ].map((banner, i) => (
                    <div key={i} className="bg-gray-50 rounded-2xl p-6 flex items-center gap-6 hover:shadow-lg transition-all cursor-pointer group">
                      <div className="w-20 h-20 flex-shrink-0 bg-white rounded-full flex items-center justify-center p-3 shadow-sm group-hover:scale-110 transition-transform">
                        <img 
                          src={`https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/${banner.img}`} 
                          alt={banner.t} 
                          className="max-w-full h-auto"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h5 className="font-bold text-lg">{banner.t}</h5>
                        <p className="text-xs text-gray-500 mt-1">상세 안내 보러가기</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        } />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/success-plans" element={<SuccessPlansPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>



      {/* ... (Hero, Announcement, Services, Expert, Board Tabs, Banner sections) */}
      
      {/* Privacy Policy Modal */}
      <AnimatePresence>
        {isPrivacyModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrivacyModalOpen(false)}
              className="absolute inset-0 bg-black"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl relative z-10 flex flex-col max-h-[80vh]"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 rounded-t-2xl">
                <h3 className="text-xl font-bold text-gray-900">개인정보 보호정책</h3>
                <button 
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="p-2 hover:bg-white rounded-full transition-colors group"
                >
                  <X size={24} className="text-gray-400 group-hover:text-gray-900" />
                </button>
              </div>
              
              <div className="p-8 overflow-y-auto text-sm text-gray-600 leading-relaxed space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium whitespace-pre-wrap">
                  제1장 총칙
                </div>
                <p>알엔디얼라이언스는 (이하 '회사'라 합니다)은 이용자들의 개인정보보호를 매우 중요시하며, 이용자가 회사의 웹사이트 플랫폼(이하 '서비스'라 합니다)을 이용함과 동시에 온라인상에서 회사에 제공한 개인정보가 보호 받을 수 있도록 최선을 다하고 있습니다.</p>
                <p>이에 회사는 통신비밀보호법, 전기통신사업법, 정보통신망이용촉진 등에 관한 법률 등 정보통신서비스제공자가 준수하여야 할 관련 법규상의 개인정보보호 규정 및 정보통신부가 제정한 개인정보 보호지침을 준수하고 있습니다.</p>
                <p>회사는 개인정보 보호정책을 통하여 이용자들이 제공하는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.</p>
                <p>회사는 개인정보 보호정책을 홈페이지 첫 화면에 공개함으로써 이용자들이 언제나 용이하게 보실 수 있도록 조치하고 있습니다.</p>
                <p>회사의 개인정보 보호정책은 정부의 법률 및 지침 변경이나 회사의 내부 방침 변경 등으로 인하여 수시로 변경될 수 있고, 이에 따른 개인정보 보호정책의 지속적인 개선을 위하여 필요한 절차를 정하고 있습니다. 그리고 개인정보 보호정책을 개정하는 경우 회사는 그 변경사항에 대하여 즉시 홈페이지를 통하여 게시하고 개정 일자를 명시하여 개정된 사항을 이용자들이 쉽게 알아볼 수 있도록 하고 있습니다.</p>
                <p>이용자들께서는 사이트 방문 시 수시로 확인하시기 바랍니다.</p>
                <p>알엔디얼라이언스는 개인정보 보호정책은 다음과 같은 내용을 담고 있습니다.</p>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제1조 (개인정보 수집에 대한 동의)
                </div>
                <p>회사는 이용자들이 회사의 이용약관 및 개인정보 보호정책의 내용에 대하여 회원 가입시 '위 약관 및 개인정보 보호정책에 동의합니다.' 라는 것을 체크할 수 있는 절차를 마련하여, 해당 체크박스에 체크를 할 경우 개인정보 수집에 대해 동의한 것으로 봅니다.</p>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제2조 (개인정보의 수집목적 및 이용목적)
                </div>
                <p>'개인정보'라 함은 생존하는 개인에 관한 정보로서 당해 정보에 포함되어 있는 성명, 주민등록번호 등의 사항에 의하여 당해 개인을 식별할 수 있는 정보(당해 정보만으로는 특정 개인을 식별할 수 없더라도 다른 정보와 용이하게 결합하여 식별할 수 있는 것을 포함)를 말합니다.</p>
                <p>일부분의 알엔디얼라이언스 서비스는 별도의 사용자 등록 없이 언제든지 사용할 수 있습니다. 그러나 회사는 회원서비스 등을 통하여 이용자들에게 맞춤식 서비스를 비롯한 보다 더 향상된 양질의 서비스를 제공하기 위하여 이용자 개인의 정보를 수집하고 있습니다. 회사는 이용자의 사전 동의 없이는 이용자의 개인 정보를 함부로 공개하지 않으며, 수집된 정보는 아래와 같이 이용하고 있습니다.</p>
                <p><b>첫째</b>, 이용자들이 제공한 개인정보를 바탕으로 보다 더 유용한 서비스를 개발할 수 있습니다. 회사는 신규 서비스 개발이나 컨텐츠의 확충시에 기존 이용자들이 회사에 제공한 개인정보를 바탕으로 개발해야 할 서비스의 우선순위를 보다 더 효율적으로 정하고, 회사는 이용자들이 필요로 할 컨텐츠를 합리적으로 선택하여 제공할 수 있습니다.</p>
                <p><b>둘째</b>, 각 수집정보 별 수집목적은 다음과 같습니다.</p>
                <ul className="list-decimal pl-5 space-y-2">
                  <li>성명, 아이디, 비밀번호 : 서비스이용에 따른 본인식별, 연령제한 서비스의 제공</li>
                  <li>이메일 주소, 주소, 연락처 : 고지사항 전달, 본인 의사 확인, 불만처리 등 원활한 의사소통 경로의 확보, 새로운 서비스나 신상품, 이벤트 정보 등 최신정보의 안내</li>
                  <li>그 외 선택 항목 : 개인 맞춤 서비스를 제공하기 위한 자료</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제3조 (알엔디얼라이언스가 수집하는 개인정보 항목 및 수집방법)
                </div>
                <p>회사는 이용자들이 회원서비스를 이용하기 위해 회원으로 가입하실 때 서비스 제공을 위한 필수적인 정보들을 온라인상에서 입력 받고 있습니다. 회원 가입시에 받는 필수적인 정보는 이름, 이메일주소, 연락처 등 입니다.</p>
                <p>또한 알엔디얼라이언스내에서의 설문조사나 이벤트 행사시 통계분석이나 경품제공 등을 위해 선별적으로 개인정보 입력을 요청할 수 있습니다. 그러나, 이용자의 기본적 인권침해의 우려가 있는 민감한 개인정보(인종 및 민족, 사상 및 신조, 출신지 및 본적지, 정치적 성향 및 범죄기록, 건강상태 및 성생활 등)는 가급적 수집하지 않으며 부득이하게 수집해야 할 경우 이용자들의 사전 동의를 반드시 구할 것입니다. 그리고, 어떤 경우에라도 입력하신 정보를 이용자들에게 사전에 밝힌 목적 이외에 다른 목적으로는 사용하지 않으며 외부로 유출하지 않습니다.</p>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제4조 (개인정보 관리 및 보유 및 이용기간)
                </div>
                <p>이용자가알엔디얼라이언스의 회원으로서 회사에 제공하는 서비스를 이용하는 동안 회사는 이용자들의 개인정보를 계속적으로 보유하며 서비스 제공 등을 위해 이용합니다.</p>
                <p>다만, 회원 본인이 직접 삭제하거나 수정한 정보, 가입해지를 요청한 경우에는 재생할 수 없는 방법에 의하여 디스크에서 완전히 삭제하며 추후 열람이나 이용이 불가능한 상태로 처리됩니다. 그리고 일시적인 목적(설문조사, 이벤트 등)으로 입력 받은 개인정보는 그 목적이 달성된 이후에는 동일한 방법으로 사후 재생이 불가능한 상태로 처리됩니다.</p>
                <p>귀하의 개인정보는 다음과 같이 개인정보의 수집목적 또는 제공받은 목적이 달성되면 파기하는 것을 원칙으로 합니다. 다만, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>계약 또는 청약철회 등에 관한 기록 : 5년 이상</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록 : 5년 이상</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록 : 3년 이상</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제5조 (쿠키(cookie)의 운영 및 정보 관리에 관한 사항)
                </div>
                <p>이용자는 언제든지알엔디얼라이언스 홈페이지를 이용하여 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다. 이용자들의 개인정보 조회 및 수정을 위해서는알엔디얼라이언스 회원관리 메뉴에서 아이디와 비밀번호를 사용하여 로그인(LOG-IN)하면 되는데, 아이디(ID) 및 이름을 제외한 모든 입력사항을 수정할 수 있습니다.</p>

                <div className="bg-blue-50 p-4 rounded-lg text-blue-800 font-medium">
                  제6조 (개인정보관련 기술적-관리적 대책)
                </div>
                <p>회사는 이용자들의 개인정보를 취급함에 있어 개인정보가 분실, 도난, 누출, 변조 또는 훼손되지 않도록 안전성 확보를 위하여 기술적 대책을 강구하고 있습니다. 이용자들의 개인정보는 비밀번호에 의해 철저히 보호되고 있습니다. 알엔디얼라이언스 회원 아이디(ID)의 비밀번호는 본인만이 알고 있습니다.</p>

                <div className="bg-gray-100 p-6 rounded-xl space-y-4">
                  <p className="font-bold text-gray-900 border-b border-gray-200 pb-2">개인정보관리책임자</p>
                  <p>이름 : 김태완</p>
                  <p>부서 : IT 기술연구소</p>
                  <p>전화 : 02-324-8124</p>
                  <p>전자우편 : master@rnd.co.kr</p>
                  <p className="text-[11px] text-gray-400 mt-4">시행일 - 이 약관은 2021년 9월 1일부터 시행합니다.</p>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl flex justify-end gap-3">
                <button 
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                >
                  동의 합니다.
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-[#1a1f2e] text-gray-400 py-20 border-t border-gray-800">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:items-start">
            <div className="space-y-8 max-w-xl">
              <img 
                src="https://web.archive.org/web/20230524194749im_/http://rnd.co.kr/html_210910/images/logo_ft.png" 
                alt="Footer Logo" 
                className="h-10 opacity-70 grayscale"
                referrerPolicy="no-referrer"
              />
              
              <div className="flex gap-4 text-xs font-bold border-b border-gray-800 pb-4">
                <button 
                  onClick={() => setIsAboutModalOpen(true)}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                >
                  회사소개
                </button>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <button 
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  개인정보처리방침
                </button>
                <a href="#" className="hover:text-white transition-colors">고객센터</a>
              </div>

              <div className="space-y-2 text-[13px] leading-relaxed">
                <p><b>주소</b>: 서울특별시 중구 동호로 214 마이디오 308</p>
                <p><b>연락처</b>: Tel. 02-324-8124 &nbsp; Fax. 02-6280-8124</p>
                <p><b>대표이사</b>: 황진석 &nbsp; <b>사업자등록번호</b>: 105-87-52648</p>
                <p><b>제휴/상담</b>: rnd@rnd.co.kr &nbsp; <b>신문등록</b>: 서울 아 02306</p>
                <p><b>개인정보보호 책임자</b>: 마훈 070-4322-8124</p>
              </div>

              <p className="text-[11px] opacity-40">Copyright ⓒ 2023 PLAN-A. All rights reserved.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center lg:items-end">
              <div className="flex gap-6">
                <Facebook size={24} className="hover:text-white transition-colors cursor-pointer" />
                <Twitter size={24} className="hover:text-white transition-colors cursor-pointer" />
                <Instagram size={24} className="hover:text-white transition-colors cursor-pointer" />
                <Youtube size={24} className="hover:text-white transition-colors cursor-pointer" />
              </div>
              <div className="w-full md:w-64">
                <select className="w-full bg-[#2a3042] border border-gray-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-600 transition-colors appearance-none cursor-pointer">
                  <option value="">FAMILY SITE</option>
                  <option value="http://rndlab.giresvenin.gethompy.com">R&D 2차</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white shadow-2xl rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all z-[60] border border-gray-100 group"
      >
        <ChevronRight size={24} className="-rotate-90 group-hover:scale-125 transition-transform" />
      </button>

      {/* Right Quick Menu (Floating) */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 z-40 pr-4">
        {['인기사업', '자료실', '공지사항', '전문가보기', '컨설팅 신청', '사업계획서 리뷰', '묻고 답하기'].map((item) => {
          if (item === '묻고 답하기') {
            return (
              <Link to="/qna" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          if (item === '컨설팅 신청') {
            return (
              <Link to="/consulting" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          if (item === '사업계획서 리뷰') {
            return (
              <Link to="/review" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          if (item === '합격사업계획서') {
            return (
              <Link to="/success-plans" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          if (item === '자료실') {
            return (
              <Link to="/archive" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          if (item === '공지사항') {
            return (
              <Link to="/notice" key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap text-center">
                {item}
              </Link>
            )
          }
          return (
            <div key={item} className="bg-white px-4 py-2 rounded-lg shadow-lg border border-gray-100 text-[11px] font-bold text-gray-600 hover:bg-blue-600 hover:text-white transition-all cursor-pointer whitespace-nowrap">
              {item}
            </div>
          )
        })}
      </div>
    </div>
  );
}
