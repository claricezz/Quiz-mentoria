import { motion } from 'framer-motion';
import { useQuiz } from './QuizContext';
import { Button } from '@/components/ui/button';

// Imagens
import heroMain from "@/assets/header_photo.jpg";
import heroSecondary from "@/assets/notificacoes-kiwify.jpg";

export function QuizIntro() {
    const { setStep } = useQuiz();

    return (
        <div className="min-h-screen bg-[#FDFBF9]">
            <div className="container mx-auto px-4 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >

                    {/* HERO */}
                    <div className="text-center space-y-6 mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="text-4xl md:text-5xl font-serif font-semibold text-[#3A2A1F]"
                        >
                            Você sente que merece mais do que viver no automático?
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.25, duration: 0.6 }}
                            className="text-lg md:text-xl text-[#8C7B65] italic"
                        >
                            Às vezes, tudo o que falta é uma nova direção.
                        </motion.p>

                        {/* FOTO PRINCIPAL */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="flex justify-center"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.08)] w-full max-w-md aspect-[4/5]">
                                <img
                                    src={heroMain}
                                    alt="Mentora"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* MINI-BIO DE AUTORIDADE */}
                        <p className="text-sm text-[#8C7B65] max-w-md mx-auto">
                            Ajuadando pessoas comuns a construírem renda real no digital,
                            com clareza, leveza e passos simples. Sem promessas milagrosas.
                        </p>
                    </div>

                    {/* TEXTO DE CONEXÃO */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35, duration: 0.6 }}
                        className="max-w-3xl mx-auto mb-20 leading-relaxed text-lg space-y-4 text-[#6B5B4E]"
                    >
                        <p>
                            Oi, eu sou a Caliny 🌊
                        </p>

                        <p>
                            Tenho 22 anos, sou paraense e moro em Fortaleza.
                            Entre estudos, treinos e dias corridos, sempre gostei de fazer uma pausa,
                            especialmente na praia, para respirar e colocar os pensamentos em ordem.
                        </p>

                        <p>
                            Foi justamente buscando mais liberdade para viver assim que comecei a olhar para o digital.
                            E, ao longo desse caminho, percebi que muita gente sente a mesma coisa:
                            vontade de ter mais autonomia, sem precisar viver no modo automático.
                        </p>

                        <p>
                            Se você também sente isso, esse quiz vai te ajudar a entender
                            em que momento da jornada você está, e qual pode ser o próximo passo.
                        </p>

                        <p>
                            Muitas pessoas se sentem presas em uma rotina que consome tempo, energia e sonhos.
                        </p>
                        <p>
                            Mas existe um caminho mais leve, onde você cria sua própria liberdade e constrói algo seu.
                        </p>
                        <p className="font-medium text-[#3A2A1F]">
                            Antes de te mostrar esse caminho, precisamos entender qual é o seu momento.
                        </p>
                    </motion.div>

                    {/* SEÇÃO DESCUBRA */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mt-20"
                    >

                        {/* BLOCO MARROM CLARO */}
                        <div className="bg-[#F3E9E1] rounded-3xl p-10 md:p-14 shadow-sm">

                            {/* TÍTULO + SUBTÍTULO CENTRALIZADOS */}
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h3 className="text-3xl md:text-4xl font-serif font-semibold text-[#3A2A1F] mb-4">
                                    Descubra qual é o seu próximo passo no digital
                                </h3>

                                <p className="text-[#8C7B65] text-lg leading-relaxed">
                                    Em poucos minutos, você vai entender onde está travando hoje
                                    e qual caminho faz mais sentido para começar (ou destravar) sua jornada.
                                </p>
                            </div>

                            {/* LISTA + IMAGEM */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                                {/* LISTA */}
                                <ul className="space-y-6 text-lg text-[#3A2A1F]">
                                    <li className="flex gap-3">
                                        <span className="text-[#8B5E3C] text-xl">✔</span>
                                        Seu maior bloqueio financeiro hoje
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#8B5E3C] text-xl">✔</span>
                                        O caminho mais rápido para crescer com o que você já tem
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#8B5E3C] text-xl">✔</span>
                                        Se você está pronta para construir algo real no digital
                                    </li>
                                </ul>

                                {/* IMAGEM AUMENTADA */}
                                <div className="rounded-2xl overflow-hidden shadow-lg w-full aspect-[16/9] max-h-[480px]">
                                    <img
                                        src={heroSecondary}
                                        alt="Notificações de vendas"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            </div>

                            {/* LEGENDA */}
                            <p className="mt-6 text-xs text-[#8C7B65] text-center">
                                Resultados reais de mulheres que aplicaram os mesmos princípios que você vai conhecer após o quiz.
                            </p>

                        </div>
                    </motion.div>



                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.55, duration: 0.6 }}
                        className="flex flex-col items-center mt-16"
                    >

                        <p className="text-sm md:text-base text-[#6B5B4E] mb-4">
                            Um quiz rápido com 8 perguntas, leva menos de 3 minutos.
                        </p>

                        <Button
                            onClick={() => setStep("questions")}
                            className="px-10 py-5 rounded-xl text-lg font-medium shadow-md
                                       bg-[#8B5E3C] text-white hover:bg-[#6E452B] transition-all"
                        >
                            Quero ver meu resultado
                        </Button>

                        <p className="mt-3 text-xs text-[#8C7B65] text-center">
                            Sem custo, sem compromisso. É só para te ajudar a ter clareza.
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
}
