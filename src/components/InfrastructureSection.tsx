import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
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

const GalleryCard = ({ image, index, onClick }: { image: any, index: number, onClick: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={onClick}
            className={`relative group cursor-none overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a2015] ${image.className}`}
        >
            <motion.div
                style={{ transformStyle: "preserve-3d" }}
                className="w-full h-full"
            >
                <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.8] group-hover:brightness-100"
                />

                {/* Overlay Decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                {/* Conteúdo do Card */}
                <div
                    style={{ transform: "translateZ(50px)" }}
                    className="absolute bottom-0 left-0 right-0 p-8"
                >
                    <span className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-2 block">{image.category}</span>
                    <h3 className="text-xl font-bold text-white leading-tight pr-10">{image.title}</h3>
                </div>

                {/* Ícone de Expandir */}
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute top-8 right-8 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20"
                >
                    <Maximize2 className="w-5 h-5 text-white" />
                </div>
            </motion.div>

            {/* Cursor Customizado Interno (Simulado) */}
            <motion.div
                className="fixed top-0 left-0 w-24 h-24 bg-primary/20 backdrop-blur-sm rounded-full border border-primary/50 pointer-events-none z-50 flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-white mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    x: useSpring(useMotionValue(0), { stiffness: 250, damping: 25 }),
                    y: useSpring(useMotionValue(0), { stiffness: 250, damping: 25 }),
                }}
            >
                Ver Obra
            </motion.div>
        </motion.div>
    );
};

const InfrastructureSection = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const totalProgress = Math.round(
        infrastructureData.reduce((acc, curr) => acc + curr.percentage, 0) / infrastructureData.length
    );

    useEffect(() => {
        const handleGlobalMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleGlobalMouseMove);
        return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
    }, []);

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
        <section id="infraestrutura" className="py-24 bg-[#05150d] text-white overflow-hidden selection:bg-primary selection:text-white">
            {/* Elementos Orgânicos de Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Header da Seção */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="w-12 h-[1px] bg-primary/50" />
                            <span className="text-primary font-bold uppercase tracking-[0.4em] text-xs block">
                                Masterplan & Execução
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter"
                        >
                            Andamento Real das <br />
                            <span className="text-primary italic font-light">Obras e Infraestrutura</span>
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-6 bg-white/5 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/10 shadow-2xl relative group"
                    >
                        <div className="absolute inset-0 bg-primary/5 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative w-24 h-24">
                            <svg className="w-full h-full transform -rotate-90">
                                <circle cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
                                <motion.circle
                                    cx="48" cy="48" r="44" stroke="currentColor" strokeWidth="6" fill="transparent"
                                    strokeDasharray={2 * Math.PI * 44}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 44 }}
                                    whileInView={{ strokeDashoffset: (2 * Math.PI * 44) * (1 - totalProgress / 100) }}
                                    transition={{ duration: 2, ease: "circOut" }}
                                    className="text-primary"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center font-black text-2xl tracking-tighter">
                                {totalProgress}%
                            </div>
                        </div>
                        <div>
                            <p className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-bold mb-1">Status Consolidado</p>
                            <h4 className="text-xl font-bold tracking-tight">Total Concluído</h4>
                        </div>
                    </motion.div>
                </div>

                {/* Grid de Barras de Progresso */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 mb-24">
                    {infrastructureData.map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-white/70 group-hover:text-white transition-colors uppercase tracking-[0.15em] text-[10px]">{item.label}</span>
                                <span className="text-primary font-black text-sm tabular-nums">{item.percentage}%</span>
                            </div>
                            <div className="h-[6px] bg-white/5 rounded-full overflow-hidden relative">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${item.percentage}%` }}
                                    transition={{ duration: 1.5, delay: index * 0.1, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-primary/30 via-primary to-primary shadow-[0_0_15px_rgba(34,197,94,0.4)] rounded-full"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Galeria Bento Grid Surpreendente */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
                    {galleryImages.map((image, index) => (
                        <GalleryCard
                            key={index}
                            image={image}
                            index={index}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                </div>

                {/* Custom Cursor Tracker (Fixed position relative to viewport) */}
                <motion.div
                    className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[9999] mix-blend-difference hidden md:flex items-center justify-center"
                    animate={{
                        x: mousePosition.x - 48,
                        y: mousePosition.y - 48,
                    }}
                    transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
                >
                    <div className="w-full h-full rounded-full bg-white/10 backdrop-blur-[2px] border border-white/20 flex items-center justify-center scale-0 transition-transform duration-300 group-hover:scale-100">
                        <span className="text-[10px] font-black uppercase tracking-widest text-white">Ver</span>
                    </div>
                </motion.div>

                {/* Rodapé da Seção */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-20 text-center flex flex-col items-center gap-4"
                >
                    <div className="w-1 h-12 bg-gradient-to-b from-primary/50 to-transparent" />
                    <p className="text-white/20 text-[10px] font-bold tracking-[0.4em] uppercase">
                        Atualizado em: Janeiro de 2026 • Residencial Campo Verde
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
                        className="fixed inset-0 z-[1000] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Controles do Lightbox */}
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-10 right-10 text-white/50 hover:text-white hover:scale-110 transition-all z-[1100]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-12 h-12" />
                        </motion.button>

                        <button
                            className="absolute left-6 md:left-12 text-white/30 hover:text-primary transition-all z-[1100] bg-white/5 hover:bg-white/10 p-6 rounded-full backdrop-blur-xl border border-white/10 group"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-8 h-8 group-active:scale-90 transition-transform" />
                        </button>

                        <button
                            className="absolute right-6 md:right-12 text-white/30 hover:text-primary transition-all z-[1100] bg-white/5 hover:bg-white/10 p-6 rounded-full backdrop-blur-xl border border-white/10 group"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-8 h-8 group-active:scale-90 transition-transform" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 40 }}
                            transition={{ type: "spring", damping: 30, stiffness: 200 }}
                            className="relative max-w-7xl w-full flex flex-col items-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-[0_0_120px_rgba(34,197,94,0.1)] border border-white/10 group">
                                <motion.img
                                    key={selectedImage}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    src={galleryImages[selectedImage].url}
                                    alt={galleryImages[selectedImage].title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay de Info no Hover da Imagem */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                                        <div>
                                            <motion.span
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-4 block"
                                            >
                                                {galleryImages[selectedImage].category}
                                            </motion.span>
                                            <motion.h3
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-4xl md:text-6xl font-black tracking-tighter"
                                            >
                                                {galleryImages[selectedImage].title}
                                            </motion.h3>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 whitespace-nowrap">
                                            <p className="text-white/60 font-bold text-xs uppercase tracking-widest">
                                                {selectedImage + 1} <span className="text-primary/40 mx-2">/</span> {galleryImages.length}
                                            </p>
                                        </div>
                                    </div>
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
