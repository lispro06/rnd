import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, CheckCircle2, Clock } from 'lucide-react';
import { motion } from 'motion/react';

const ReviewPage = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 tracking-tight">사업계획서 리뷰</h2>
        <div className="space-y-6 text-lg text-gray-600 leading-relaxed max-w-4xl">
          <p className="font-semibold text-blue-600 text-xl">
            사업계획서 및 각종 제안서를 각 분야 여러 전문가 들이 리뷰(Review)하는 공간입니다.
          </p>
          <p>
            대부분의 초기창업자나 중소 벤처기업들은 보유중인 역량과 기술들을 다른사람들에게 어필(appeal)하는데 있어서 어려움을 겪고 있습니다.
            잘 작성된 사업계획서와 스케쥴, 예산등은 성공창업과 R&D(연구•개발)에 있어서 필수 입니다.
          </p>
          <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-blue-600 italic">
            "배려와 디테일이 모든 것(합격의 유무)을 결정한다" 라는 소신과 철학을 가지고
            하나 하나의 사업계획서를 여러 전문가들이 객관적인 입장에서 자문합니다.
          </div>
        </div>
      </motion.div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1a1f2e] text-white">
              <th className="px-8 py-5 font-bold w-20 text-center">번호</th>
              <th className="px-8 py-5 font-bold">제목</th>
              <th className="px-8 py-5 font-bold w-32 text-center">등록자</th>
              <th className="px-8 py-5 font-bold w-40 text-center">작성일</th>
              <th className="px-8 py-5 font-bold w-40 text-center">답변</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-blue-50/50 transition-colors cursor-pointer group">
              <td className="px-8 py-5 text-center text-gray-400 font-mono">1</td>
              <td className="px-8 py-5">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">test</span>
                </div>
              </td>
              <td className="px-8 py-5 text-center text-gray-600">황진석</td>
              <td className="px-8 py-5 text-center text-gray-400 font-mono text-sm">2022-04-21</td>
              <td className="px-8 py-5 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-600 rounded-full text-xs font-bold ring-1 ring-amber-200">
                  <Clock size={12} />
                  답변 대기 중
                </span>
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
          리뷰 신청 글쓰기
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
