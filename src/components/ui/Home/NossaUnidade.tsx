import { useState } from "react";

const MeuComponente = () => {
    const [modalAberto, setModalAberto] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <button
                onClick={() => setModalAberto(true)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                Abrir Modal
            </button>

            {modalAberto && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={() => setModalAberto(false)} 
                >
                    <div 
                        className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
                        onClick={(e) => e.stopPropagation()} 
                    >
                        <h2 className="text-xl font-semibold mb-4">Título do Modal</h2>
                        <p className="text-gray-700">Conteúdo do modal vai aqui...</p>
                        <button
                            onClick={() => setModalAberto(false)}
                            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MeuComponente;
