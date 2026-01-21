import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

const infrastructureData = [
    { label: 'Terraplanagem', percentage: 100 },
    { label: 'Drenagem Pluvial', percentage: 85 },
    { label: 'Rede de Esgoto', percentage: 82 },
    { label: 'Rede de Água', percentage: 82 },
    { label: 'Iluminação', percentage: 45 },
    { label: 'Pavimentação', percentage: 26 },
];

const galleryImages = [
    {
        url: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200',
        title: 'Nivelamento de Terreno',
        category: 'Terraplanagem',
        className: 'md:col-span-2 md:row-span-2',
    },
    {
        url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800',
        title: 'Instalação de Galerias',
        category: 'Drenagem',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        url: 'https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?auto=format&fit=crop&q=80&w=800',
        title: 'Rede Hidráulica',
        category: 'Infraestrutura',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80',
        title: 'Vista Aérea do Loteamento',
        category: 'Obras',
        className: 'md:col-span-2 md:row-span-1',
    },
    {
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80',
        title: 'Área de Preservação',
        category: 'Sustentabilidade',
        className: 'md:col-span-1 md:row-span-1',
    },
    {
        url: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=1200&q=80',
        title: 'Pavimentação em Curso',
        category: 'Infraestrutura',
        className: 'md:col-span-1 md:row-span-2',
    },
];

const InfrastructureSection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const totalProgress = Math.round(
        infrastructureData.reduce((acc, curr) => acc + curr.percentage, 0) / infrastructureData.length
    );

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    return (
        <section id="infraestrutura" className="py-24 bg-[#05150d] text-white overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header da Seção */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-primary font-bold uppercase tracking-[0.4em] text-xs mb-4 block"
                        >
                            Masterplan & Execução
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold leading-tight"
                        >
                            Andamento Real das <br />
                            <span className="text-primary italic">Obras e Infraestrutura</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-6 bg-white/5 backdrop-blur-xl p-6 rounded-[2.5rem] border border-white/10 shadow-2xl"
                    >
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                                <motion.circle
                                    cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="6" fill="transparent"
                                    strokeDasharray={2 * Math.PI * 44}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                                    whileInView={{ strokeDashoffset: (2 * Math.PI * 44) * (1 - totalProgress / 100) }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                    className="text-primary"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center font-bold text-2xl">
                                {totalProgress}%
                            </div>
                        </div>
                        <div>
                            <p className="text-white/40 uppercase tracking-widest text-[10px] font-bold">Consolidado</p>
                            <h4 className="text-xl font-bold">Total Concluído</h4>
                        </div>
                    </motion.div>
                </div>

                {/* Grid de Barras de Progresso */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-24">
                    {infrastructureData.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group"
                        >
                            <div className="flex justify-between items-center mb-3">
                                <span className="font-bold text-white/80 group-hover:text-white transition-colors uppercase tracking-wider text-xs">{item.label}</span>
                                <span className="text-primary font-black text-sm">{item.percentage}%</span>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px]">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.1 }}
                                    className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Galeria Bento Grid Surpreendente */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedImage(index)}
                            className={`relative group cursor-none overflow-hidden rounded-[2.5rem] border border-white/10 ${image.className}`}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.85] group-hover:brightness-100"
                            />

                            {/* Overlay Decorativo */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                            {/* Conteúdo do Card */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{image.category}</span>
                                <h3 className="text-xl font-bold text-white leading-tight pr-10">{image.title}</h3>
                            </div>

                            {/* Ícone de Expandir */}
                            <div className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 border border-white/20">
                                <Maximize2 className="w-5 h-5 text-white" />
                            </div>

                            {/* Cursor Customizado Interno (Simulado) */}
                            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-20 h-20 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/50 scale-0 group-hover:scale-100 transition-transform duration-500 flex items-center justify-center text-sm font-black uppercase tracking-tighter text-white">
                                    Ver
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Rodapé da Seção */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 text-center"
                >
                    <p className="text-white/30 text-xs italic tracking-widest uppercase">
                        Atualizado em: Janeiro de 2026 • Monte Verde Incorporadora
                    </p>
                </motion.div>
            </div>

            {/* Lightbox Modal Imersivo */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-10 h-10" />
                        </button>

                        <button
                            className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] bg-white/5 p-4 rounded-full backdrop-blur-md border border-white/10"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full h-full flex flex-col justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(34,197,94,0.15)] border border-white/10">
                                <img
                                    src={galleryImages[selectedImage].url}
                                    alt={galleryImages[selectedImage].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-8 flex justify-between items-end">
                                <div>
                                    <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-3 block">Galeria de Obras</span>
                                    <h3 className="text-3xl md:text-5xl font-bold">{galleryImages[selectedImage].title}</h3>
                                </div>
                                <div className="text-right hidden md:block">
                                    <p className="text-white/40 font-bold text-sm uppercase tracking-widest">Foto {selectedImage + 1} de {galleryImages.length}</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default InfrastructureSection;
