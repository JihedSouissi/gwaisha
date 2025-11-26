
const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/storage/GW.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* CTA and Button at Bottom */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-4 max-w-4xl leading-relaxed">
          من قطرة تبدأ الحكاية وبنور الشمس تنمو وفي تفتّح الوردة تكتمل
        </p>
        <button className="bg-transparent text-white border border-white hover:bg-white hover:text-black text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors">
          اكتشف الان
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
