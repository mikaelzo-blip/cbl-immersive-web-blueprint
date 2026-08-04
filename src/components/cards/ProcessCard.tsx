import React from 'react';
import { WorkProcessStep } from '@/types/company';
import { DynamicIcon } from '@/components/ui/DynamicIcon';

interface ProcessCardProps {
  step: WorkProcessStep;
  isLast?: boolean;
}

export function ProcessCard({ step }: ProcessCardProps) {
  return (
    <div className="relative flex flex-col p-6 sm:p-7 bg-white rounded-3xl border border-[#DCE6EE] shadow-[0_16px_40px_-30px_rgba(15,41,66,0.35)] card-hover-lift h-full overflow-hidden">
      {/* Step Number Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-2xl bg-[#0F2942] text-[#67E8F9] flex items-center justify-center font-extrabold text-lg shadow-sm">
          0{step.stepNumber}
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#F0F7FD] text-[#0E6BA8] border border-[#0E6BA8]/20">
          Tahap {step.stepNumber}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-bold text-[#0F2942] mb-2 tracking-tight">
        {step.title}
      </h3>
      <p className="text-sm text-[#475569] leading-relaxed mb-4">
        {step.description}
      </p>

      {/* Rincian Sub-Langkah */}
      <ul className="mt-auto pt-4 border-t border-[#E2E8F0] space-y-2 text-xs text-[#475569]">
        {step.details.map((detail, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <DynamicIcon name="ChevronRight" size={14} className="text-[#00A8CC] shrink-0 mt-0.5" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>

      {/* Accent bar bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 accent-line-gradient rounded-b-2xl" />
    </div>
  );
}
