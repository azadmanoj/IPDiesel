export default function Footer() {
  return (
    <footer className="bg-[#1f2969] text-white text-center p-8 mt-auto shadow-lg">
      <div className="container mx-auto">
        <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Indore Punjab Diesel. All rights reserved.</p>
        <p className="text-sm text-gray-300 mt-2 opacity-80">Quality Diesel Solutions Since [Year Founded - Optional]</p>
      </div>
    </footer>
  );
}
