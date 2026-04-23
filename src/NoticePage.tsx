import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Bell } from 'lucide-react';
import { motion } from 'motion/react';

const NoticePage = () => {
  const notices = [
    { id: 3, title: '2022년도 창업지원사업 통합공고문', date: '2022-02-06', files: 1 },
    { id: 2, title: '2021년도 창업지원사업 통합공고문', date: '2021-01-11', files: 0 },
    { id: 1, title: '공지사항 입니다. 테스트용 입니다.', date: '2020-11-18', files: 0 },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white">
            <Bell size={24} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">공지사항</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          알앤디얼라이언스의 새로운 소식과 공지사항을 전달해 드립니다.
        </p>
      </motion.div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1a1f2e] text-white">
              <th className="px-8 py-5 font-bold w-24 text-center">번호</th>
              <th className="px-8 py-5 font-bold">제목</th>
              <th className="px-8 py-5 font-bold w-40 text-center">작성일</th>
              <th className="px-8 py-5 font-bold w-40 text-center">첨부파일</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {notices.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                <td className="px-8 py-5 text-center text-gray-400 font-mono">{item.id}</td>
                <td className="px-8 py-5">
                  <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                    {item.title}
                  </span>
                </td>
                <td className="px-8 py-5 text-center text-gray-400 font-mono text-sm">{item.date}</td>
                <td className="px-8 py-5 text-center">
                  {item.files > 0 ? (
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">
                      <Download size={14} />
                      ({item.files})
                    </button>
                  ) : (
                    <span className="text-gray-300 font-bold">-</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          메인으로 이동
        </Link>
        <div className="flex gap-2">
          <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-lg font-bold shadow-lg shadow-blue-200">1</button>
        </div>
      </div>
    </div>
  );
};

export default NoticePage;
