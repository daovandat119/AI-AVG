export default function Header() {
  return (
    <header className="w-full max-w-[1500px] mx-auto flex justify-between items-center p-4 text-white">
      <img
        src="https://cdn.convertri.com/4da13923-2b58-11ed-aeb6-06deec350f13%2Fac08012ae686dd63cdfc96cc304d2b7c9a0d14cb%2F%20white%20logo%20nci.png"
        alt="Logo"
        className="w-[20%]"
      />
      <div className="flex flex-row gap-7">
        <p className="pt-1">Admin Pages</p>
        <img
          src="https://moveek.com/bundles/ornweb/img/no-avatar.png"
          alt="Logo"
          className="w-10 rounded-full"
        />
      </div>
    </header>
  );
}
