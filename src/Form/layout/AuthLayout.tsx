import BackButton from "../ui/BackButton";

interface AuthLayoutProps {
  title: string;
  children: React.ReactNode;
  showBackButton?: boolean;
}

const AuthLayout = ({
  title,
  children,
  showBackButton = true,
}: AuthLayoutProps) => {
  return (
    <div className="relative h-screen my-4 bg-black text-white flex flex-col w-sm mx-auto rounded-4xl shadow-lg overflow-hidden border-black border-8">
      {/* Background image placeholder - replace with actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/32319577/pexels-photo-32319577.jpeg')",
        }}
      />

      {/* Gradient overlay cho toàn bộ layout */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

      <div className="relative z-10 flex flex-col h-full">
        {/* BackButton area - luôn có để giữ layout consistent */}
        <div className="flex-shrink-0 h-16 relative">
          {showBackButton && <BackButton />}
        </div>

        {/* Spacer để đẩy content xuống dưới */}
        <div className="flex-1" />

        {/* Content area - luôn ở dưới */}
        <div className="px-6 py-6 space-y-6 m-5 bg-black/50 rounded-3xl">
          <h1 className="text-3xl font-bold">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
