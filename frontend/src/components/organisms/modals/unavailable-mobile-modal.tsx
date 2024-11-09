export const UnAvailableMobileModal = () => {
  return (
    <div className="flex w-full h-full bg-black bg-opacity-95 bg-primary fixed top-0 left-0 z-50 md:hidden justify-center items-center">
      <div className="w-96 h-96 bg-white rounded-2xl flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Unavailable on mobile</h1>
        <p className="text-center">
          Scrum Poker is not available on mobile devices. Please use a desktop
          or laptop to access the application.
        </p>
      </div>
    </div>
  );
};
