import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Info } from 'lucide-react';
import { motion } from 'motion/react';

const AboutPage = () => {
  const budgetData = [
    ["2011", "14.8조"], ["2012", "16조"], ["2013", "16.9조"], ["2014", "17.8조"],
    ["2015", "18.9조"], ["2016", "19.3조"], ["2017", "19.8조"], ["2018", "18조 8천억"],
    ["2019", "20조 4천억"], ["2020", "24.2조"], ["2021", "27.4조"]
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
            <Info size={24} />
          </div>
          <h2 className="text-4xl font-bold tracking-tight">R&D 개요 (회사소개)</h2>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          알앤디얼라이언스는 기업과 예비창업자들의 성공적인 R&D 수행을 돕는 통합 플랫폼입니다.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 italic text-xl text-gray-700 leading-relaxed relative">
            <span className="absolute -top-4 -left-2 text-6xl text-blue-100 font-serif">"</span>
            우리나라는 매년 GDP의 약 5%를 R&D(연구·개발) 예산으로 투자하고 있습니다. 
            그러나 약 25조원에 이르는 R&D 예산에 대한 자세한 정보 제공이나 참고 자료, 분야별 전문가들은 부족한 현실입니다.
          </div>
          
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>2021년의 경우 27조원의 정부 R&D 자금이 편성이 되어 있으나 대부분의 예비창업자 및 중소 벤처기업들은 이러한 지원이 있는지 조차 모르는 상황이며, 자금이나 기술 개발 등의 활용에 대한 정보 또한 미비한 상황입니다.</p>
            <p>더불어, 수 조원의 R&D 예산이 특정 기업들(정보를 보유중인 기업 등)에게 집중되어 정보와 자금 등을 독식하는 상황입니다.</p>
            <p>최근 정부주도의 R&D 시장은 ‘빈익빈 부익부(貧益貧富益Fu)’ 는 더욱 가속화 되어 가고 있으며 시대적인 흐름이 되어 가고 있습니다. 창업기업의 경우에도 준비가 잘 된 창업기업의 경우 정보와 자금이 몰리는 경우를 많이 보고 있습니다.</p>
            <p>이러한 정보와 R&D 자금의 쏠림과 복잡한 행정절차, 난무하는 컨설팅 회사와 전문성이 부족한 컨설턴트들로 인하여 R&D 자금 고유의 지원 목적과 취지에서 멀어지고 있는 것도 현실입니다.</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#1a1f2e] p-8 md:p-10 rounded-3xl text-white shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <BarChart3 className="text-blue-400" />
            <h3 className="text-2xl font-bold">년도별 R&D 예산 현황</h3>
          </div>
          
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-center border-collapse">
              <thead className="bg-white/5 text-gray-400 font-bold">
                <tr>
                  <th className="px-6 py-4 border-b border-white/10">년도</th>
                  <th className="px-6 py-4 border-b border-white/10">R&D 예산</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {budgetData.map(([year, budget]) => (
                  <tr key={year} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-3 font-semibold text-gray-400">{year}</td>
                    <td className="px-6 py-3 font-bold text-blue-400">{budget}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
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

export default AboutPage;
