import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, FileCheck } from 'lucide-react';
import { motion } from 'motion/react';

const SuccessPlansPage = () => {
  const dummyData = [
    { id: 1, title: '2022년 창업성장기술개발사업(디딤돌) 합격 사업계획서', date: '2022-05-15', file: 'success_plan_01.pdf' },
    { id: 2, title: '예비창업패키지 일반분야 최종합격 샘플', date: '2022-04-10', file: 'success_plan_02.pdf' },
    { id: 3, title: '초기창업패키지 IT 서비스 분야 합격 사례', date: '2022-03-22', file: 'success_plan_03.pdf' },
  ];

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 tracking-tight">합격사업계획서</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          실제 선정된 우수 사업계획서 사례를 공유합니다. 
          R&D 지원사업 및 창업지원사업 준비에 참고하시기 바랍니다.
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
            {dummyData.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                <td className="px-8 py-5 text-center text-gray-400 font-mono">{item.id}</td>
                <td className="px-8 py-5">
                  <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors cursor-pointer">
                    {item.title}
                  </span>
                </td>
                <td className="px-8 py-5 text-center text-gray-400 font-mono text-sm">{item.date}</td>
                <td className="px-8 py-5 text-center">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">
                    <Download size={14} />
                    다운로드
                  </button>
                </td>
              </tr>
            ))}
            {dummyData.length === 0 && (
              <tr>
                <td colSpan={4} className="px-8 py-20 text-center text-gray-400 italic">
                  등록된 게시물이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-start">
        <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 font-bold transition-all group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          메인으로 이동
        </Link>
      </div>
    </div>
  );
};

export default SuccessPlansPage;
