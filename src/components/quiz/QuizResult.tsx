import { motion } from 'framer-motion';
import { Check, MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroMain from "@/assets/IMG_4231.jpg";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Como se cadastrar nas plataformas e se afiliar aos produtos certos, evitando erros clássicos de iniciantes.",
  "Como encontrar produtos que já estão vendendo todos os dias, com análise simples para escolher o que mais combina com você.",
  "Como montar sua estrutura de vendas, desde criativos até automação 24h com robôs.",
  "Como vender no orgânico e também com tráfego pago, de forma estratégica, sem gastar à toa.",
  "Como vender para o público internacional e ganhar em dólar, de maneira prática.",
  "Como criar sua própria mentoria no futuro, se quiser dar o próximo passo.",
  "Como resolver bloqueios e problemas comuns, sem surtar e perder estrutura.",
  "Como usar a IA para acelerar suas vendas, mesmo sem experiência.",
];

const faqs = [
  {
    question: "Não entendo nada de tecnologia. Isso é um problema?",
    answer: "Não. O método foi estruturado para iniciantes. Você recebe orientações passo a passo e suporte técnico quando necessário."
  },
  {
    question: "Preciso investir muito para começar?",
    answer: "Não. As primeiras estratégias usam ferramentas gratuitas ou de baixo custo. Você só investe mais quando estiver pronta para avançar."
  },
  {
    question: "Não tenho tempo sobrando. Consigo aplicar mesmo assim?",
    answer: "Sim. As tarefas são objetivas e podem ser feitas em blocos pequenos de tempo ao longo da semana."
  },
  {
    question: "Posso trabalhar apenas com o celular?",
    answer: "Pode. Todo o processo funciona no celular, embora um computador facilite algumas etapas."
  },
  {
    question: "Preciso aparecer?",
    answer: "Não. O formato não exige exposição pessoal. Tudo pode ser feito sem mostrar o rosto."
  },
  {
    question: "O que recebo além da mentoria?",
    answer: "Suporte VIP da produtora + suporte da minha equipe, além de uma página de vendas personalizada como brinde exclusivo."
  },
];

export function QuizResult() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-text-heading mb-6 leading-tight">
              Dá pra ver que você não precisa de mais teorias, motivação ou "promessas fáceis".
            </h1>
            <p className="text-lg text-text-soft leading-relaxed">
              Você precisa de um caminho real, guiado e possível para a sua rotina — algo que te coloque em prática sem você sentir que está sozinha.
            </p>
          </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
                className="flex justify-center mb-10"
            >
                <div className="rounded-3xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] w-full max-w-sm aspect-[4/5]">
                    <img
                        src={heroMain} // importe a foto como fez no QuizIntro
                        alt="Mentora do programa"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.div>


            {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-card mb-10"
          >
            <div className="space-y-6">
              <p className="text-foreground font-medium text-lg">
                E a boa notícia é que existe exatamente isso.
              </p>
              <p className="text-text-soft leading-relaxed">
                Uma mentoria que te entrega o caminho claro, direto e possível para quem quer entrar no digital com segurança — mesmo começando do zero.
              </p>
              <p className="text-text-soft leading-relaxed">
                Nela, você aprende passo a passo, no seu ritmo, tudo que realmente importa para quem quer começar certo:
              </p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-10"
          >
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05, duration: 0.3 }}
                  className="flex gap-4 items-start p-4 bg-cream rounded-xl"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <p className="text-foreground leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="bg-secondary/50 rounded-xl p-6 mb-10"
          >
            <p className="text-text-soft text-sm leading-relaxed">
              Tudo isso sem promessas de dinheiro fácil, porque seus resultados dependem da sua dedicação — mas você terá um método que evita perda de tempo e te coloca na direção certa desde o início.
            </p>
          </motion.div>

          {/* Support Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="bg-card rounded-2xl p-8 md:p-10 shadow-soft mb-10"
          >
            <h2 className="text-2xl font-serif font-semibold text-text-heading mb-6">
              E o ponto mais importante:
            </h2>
            <p className="text-foreground font-medium text-lg mb-4">
              Você não estará sozinha nessa jornada.
            </p>
            <div className="space-y-4 text-text-soft leading-relaxed">
              <p>
                Além do suporte VIP da produtora, que acompanha os alunos nas dúvidas mais técnicas e estratégicas, você também terá acesso ao meu grupo de suporte, onde compartilhamos orientações, trocas, correções e direcionamentos para que você consiga colocar tudo em prática com mais clareza.
              </p>
              <p>
                E, para tornar seu início ainda mais estruturado, você recebe um <span className="text-foreground font-medium">brinde exclusivo</span>: uma página de vendas personalizada, criada pela nossa especialista em TI, já configurada com o seu link de afiliado.
              </p>
              <p className="text-foreground font-medium">
                É uma combinação pensada para te dar segurança, apoio e um ponto de partida sólido — sem que você tenha que enfrentar tudo sozinha.
              </p>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="space-y-6 mb-16"
          >
            {/* CTA 1 */}
            <div className="bg-card rounded-2xl p-12 shadow-soft text-center">
              <h3 className="text-xl font-serif font-semibold text-text-heading mb-3">
                Pronta para começar sua jornada no digital com apoio, estrutura e clareza?
              </h3>
              <p className="text-text-soft mb-6">
                Clique abaixo e garanta sua vaga na mentoria.
              </p>
                <Button
                    className="
    bg-primary hover:bg-bronze-dark text-primary-foreground
    w-full
    px-4 py-4
    text-base font-medium
    rounded-xl shadow-bronze
    leading-tight
    whitespace-normal
  "
                    onClick={() => window.open('#comprar', '_blank')}
                >
                    <div className="flex items-center justify-center gap-2 ">
                        <ShoppingBag className="min-w-[20px] min-h-[20px]" />
                        <span className="block text-center">
      Quero entrar na mentoria agora
    </span>
                    </div>
                </Button>


            </div>

            {/* CTA 2 */}
            <div className="bg-cream rounded-2xl p-8 text-center">
              <h3 className="text-xl font-serif font-semibold text-text-heading mb-3">
                Ainda tem alguma pergunta ou quer entender melhor antes de decidir?
              </h3>
              <p className="text-text-soft mb-6">
                Fale diretamente comigo.
              </p>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/5500000000000', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Quero falar no WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-semibold text-text-heading mb-8 text-center">
              Perguntas Frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-soft pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
