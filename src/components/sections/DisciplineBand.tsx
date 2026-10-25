const disciplines = ['Elektrikal', 'Otomasi', 'Mekanikal', 'HVAC', 'Pompa', 'Pencahayaan'];

export function DisciplineBand() {
  return (
    <div aria-hidden="true" className="loop-strip overflow-hidden border-b border-[#D9E1E8] bg-white py-6 md:py-8">
      <div className="loop-track" style={{ '--loop-duration': '40s' } as React.CSSProperties}>
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {disciplines.map((word, index) => (
              <span key={`${copy}-${word}`} className="flex items-center">
                <span
                  className={
                    index % 2
                      ? 'text-outline px-6 text-[clamp(3rem,8vw,7rem)] font-semibold leading-none tracking-[-0.04em] md:px-10'
                      : 'px-6 text-[clamp(3rem,8vw,7rem)] font-semibold leading-none tracking-[-0.04em] text-[#0F2942] md:px-10'
                  }
                >
                  {word}
                </span>
                <span className="size-3 shrink-0 rounded-full bg-[#E8641B] md:size-4" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
