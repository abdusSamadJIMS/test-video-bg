
export default function Home() {
  return (
    <div className="h-screen w-screen relative">
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      />
      hello world
    </div>
  );
}
