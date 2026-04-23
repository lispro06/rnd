import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  ArrowLeft, 
  MessageCircle, 
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

const ConsultingPage = () => {
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">컨설팅 신청</h2>
        <p className="text-gray-500 text-lg uppercase tracking-wider font-medium">Consulting Application</p>
      </div>

      <div className="mb-16 space-y-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl font-bold text-gray-800 mb-6">각 분야 여러 전문가 들에게 컨설팅 신청을 하는 공간입니다.</p>
          <div className="space-y-4 text-gray-600 leading-relaxed text-[15px]">
            <p>
              ’R&D Alliance‘는 다양한 경험과 폭넓은 지식을 겸비한 전문가들이 활동 할 수 있는 R&D(연구 개발) 통합 플랫폼을 제공합니다.
            </p>
            <p className="font-medium text-blue-600">
              유ㆍ무상 자금 지원, 경영 전략 도출을 통한 기업과 개인의 중장기 로드맵(Road-Map)수립.
            </p>
            <p>
              선정된 연구개발 사업의 수행에서 S/W개발, 디자인, 홈페이지, 시제품 제작, 마케팅,
              글로벌 진출, 지식재산권(특허, 디자인)등 다양한 전문가들과 만나 보세요.
            </p>
            <p>
              다양한 분야에서의 실무와 컨설팅 경험을 살려 R&D(연구 개발) 사업의 준비부터, 과제수행, 결과물 도출
              사업 확산과 연계 까지 R&D(연구 개발) 전(全)주기에 같이 하도록 하겠습니다.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-6 text-orange-600">
            <AlertCircle size={24} />
            <h4 className="text-lg font-bold">컨설팅 신청 시 유의사항</h4>
          </div>
          
          <div className="h-64 overflow-y-auto pr-4 text-sm text-gray-500 leading-relaxed space-y-4 custom-scrollbar">
            <p>
              알앤디얼라이언스는 보내주신 컨설팅 신청 제안을 검토한 후 진행이 결정되면 꼭 연락을 드려 함께 진행할 수 있도록 하겠습니다. 
              제안자의 컨설팅 신청 내용은 해당 컨설턴트와 주요 행정안내 등을 위한 담당자들만이 확인 검토할 수 있도록 하고 있습니다. 
              더불어, 컨설팅 신청 내용이 당사의 사업 방향이나 전문분야가 맞지 않는 등의 여러 이유로 거절 될 수 있습니다. 
              따라서, 이 점 감안하시어 당사에 공개 가능한 정보만 기재하여 주시기 바라며, 당사는 제휴제안 거절에 대해 제안자에 대한 보상, 
              회신 등 어떠한 의무도 부담하지 않는다는 점 양해 부탁드립니다. 
            </p>
            <p>
              제휴제안서에는 제안자의 영업비밀이나 기밀사항, 보호가 필요하다고 생각하는 사업적 아이디어 등을 제외하고 기재하여 주시기 바랍니다. 
              아울러, 특허 및 디자인, 저작권 등 각종 지식재산권의 공개 내지 공유가 필요한 제휴 요청의 경우, 반드시 출원 등 제안자의 권리 보호를 위해 
              필요한 조치를 마치신 후에 당사로 제휴제안 요청을 하여 주시기 바랍니다. 
            </p>
            <p>
              등록하신 컨설팅 신청 내용 및 관련 자료는 컨설팅 수행 여부 검토 목적으로만 이용되며, 컨설팅이 불가할 경우 즉시 파기됩니다. 
              다만, 컨설팅 신청자가 컨설팅 신청 내용을 확인할 수 있도록 입력하여 주신 기초적인 내용들은 개인정보와 동일하게 1개월간 보관됩니다.
            </p>
            {/* Repeated text as per user request */}
            <p>
              알앤디얼라이언스는 보내주신 컨설팅 신청 제안을 검토한 후 진행이 결정되면 꼭 연락을 드려 함께 진행할 수 있도록 하겠습니다. 
              제안자의 컨설팅 신청 내용은 해당 컨설턴트와 주요 행정안내 등을 위한 담당자들만이 확인 검토할 수 있도록 하고 있습니다. 
              더불어, 컨설팅 신청 내용이 당사의 사업 방향이나 전문분야가 맞지 않는 등의 여러 이유로 거절 될 수 있습니다. 
              따라서, 이 점 감안하시어 당사에 공개 가능한 정보만 기재하여 주시기 바라며, 당사는 제휴제안 거절에 대해 제안자에 대한 보상, 
              회신 등 어떠한 의무도 부담하지 않는다는 점 양해 부탁드립니다. 
            </p>
            <p>
              제휴제안서에는 제안자의 영업비밀이나 기밀사항, 보호가 필요하다고 생각하는 사업적 아이디어 등을 제외하고 기재하여 주시기 바랍니다. 
              아울러, 특허 및 디자인, 저작권 등 각종 지식재산권의 공개 내지 공유가 필요한 제휴 요청의 경우, 반드시 출원 등 제안자의 권리 보호를 위해 
              필요한 조치를 마치신 후에 당사로 제휴제안 요청을 하여 주시기 바랍니다. 
            </p>
            <p>
              등록하신 컨설팅 신청 내용 및 관련 자료는 컨설팅 수행 여부 검토 목적으로만 이용되며, 컨설팅이 불가할 경우 즉시 파기됩니다. 
              다만, 컨설팅 신청자가 컨설팅 신청 내용을 확인할 수 있도록 입력하여 주신 기초적인 내용들은 개인정보와 동일하게 1개월간 보관됩니다.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div 
                onClick={() => setAgreed(!agreed)}
                className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                  agreed 
                    ? "bg-blue-600 border-blue-600 text-white" 
                    : "border-gray-300 bg-white group-hover:border-blue-400"
                }`}
              >
                {agreed && <CheckCircle2 size={16} />}
              </div>
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={() => setAgreed(!agreed)} 
                className="hidden" 
              />
              <span className="text-gray-700 font-bold">유의사항을 확인하였습니다.</span>
            </label>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow-xl border border-gray-100 mb-10 overflow-hidden">
        <table className="w-full text-center border-collapse min-w-[800px]">
          <thead className="bg-[#1e293b] text-white text-sm font-bold">
            <tr>
              <th className="px-6 py-5 w-24">번호</th>
              <th className="px-6 py-5 text-left font-semibold">제목</th>
              <th className="px-6 py-5 w-40 font-semibold">등록자</th>
              <th className="px-6 py-5 w-40 font-semibold">작성일</th>
              <th className="px-6 py-5 w-40 border-l border-gray-700 font-semibold">답변</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50 text-gray-600 bg-white">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-6 py-5 font-medium text-gray-400">1</td>
              <td className="px-6 py-5 text-left font-bold text-gray-800">
                <span className="hover:text-blue-600 cursor-pointer">test</span>
              </td>
              <td className="px-6 py-5">황진석</td>
              <td className="px-6 py-5 font-mono text-gray-400 text-sm">2021-12-24</td>
              <td className="px-6 py-5 border-l border-gray-100">
                <span className="bg-orange-50 text-orange-600 px-3 py-1 rounded text-xs font-bold border border-orange-100">
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
        <button 
          disabled={!agreed}
          className={`flex items-center gap-2 px-10 py-4 rounded-xl font-bold transition-all active:scale-95 group shadow-xl ${
            agreed 
              ? "bg-blue-600 text-white hover:bg-blue-700" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          <FileText size={20} className="group-hover:rotate-12 transition-transform" />
          신청서 작성하기
        </button>
      </div>
    </div>
  );
};

export default ConsultingPage;
