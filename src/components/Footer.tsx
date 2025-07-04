
export const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="border-t border-stone-800">
            <p className="text-stone-400 font-light">
            © {new Date().getFullYear()} Kastelly Design. <p>Todos os direitos reservados.</p>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
