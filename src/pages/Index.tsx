
import { useState, useEffect } from "react";
import ActionButton from "@/components/ActionButton";
import CountdownTimer from "@/components/CountdownTimer";
import RecipeCard from "@/components/RecipeCard";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [visitorCount, setVisitorCount] = useState(42);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    // Track the purchase event when page loads
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'ViewContent', {
        content_name: 'Receitas Patrícia Mancini',
        content_category: 'Upsell',
        value: 29.90,
        currency: 'BRL'
      });
    }
    
    // Random visitor count between 30 and 60
    setVisitorCount(Math.floor(Math.random() * 31) + 30);
    
    // Warn before leaving page
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Tem certeza que deseja sair? Essa oferta não estará mais disponível!";
      return e.returnValue;
    };
    
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Purchase', {
        value: 29.90,
        currency: 'BRL'
      });
    }
    window.location.href = "https://pay.kiwify.com.br"; // Placeholder checkout URL
  };
  
  const handleDecline = () => {
    toast({
      title: "Não vá embora agora!",
      description: "Essa oferta é por tempo MUITO limitado e não estará mais disponível.",
      variant: "destructive"
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          <img 
            src="https://i.ibb.co/ZzNFXnFX/smiling-young-woman-holding-fresh-baked-cupcake-tray-23-2148027988-removebg-preview.png" 
            alt="Chef Patrícia Mancini" 
            className={`w-40 h-40 object-cover md:w-56 md:h-56 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 0.3s' }}
            onLoad={() => setImageLoaded(true)}
            loading="eager"
            width="224"
            height="224"
            onError={(e) => {
              // Fallback if image doesn't load
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          
          <div className="text-center md:text-left">
            <p className="text-green-700 font-semibold mb-2">EXCLUSIVO PARA VOCÊ</p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-green-900">
              Parabéns, aluna! Seja muito bem-vinda à família da Chef Patrícia Mancini!
            </h1>
          </div>
        </div>
        
        {/* Main Message */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-8">
          <p className="text-lg mb-4">
            Agora que você já faz parte da nossa comunidade e garantiu suas receitas de pães sem glúten, 
            eu tenho uma <span className="font-bold text-green-700">surpresa especial pra você</span>...
          </p>
          
          <div className="bg-green-100 p-4 rounded-lg text-center my-6">
            <h2 className="text-xl md:text-2xl font-bold">
              Uma oferta <span className="text-red-600">agressiva</span> com a seguinte proposta:
            </h2>
          </div>
          
          <div className="text-center my-8">
            <div className="inline-block bg-yellow-100 px-6 py-4 rounded-lg border-2 border-yellow-300 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">
                🎁 TODAS AS MINHAS 1600 RECEITAS SUPERDELICIOSAS E SAUDÁVEIS
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
                <p className="text-gray-500 line-through">De R$97,00</p>
                <p className="text-3xl md:text-4xl font-bold text-green-700">por apenas R$29,90</p>
              </div>
            </div>
            
            <CountdownTimer initialMinutes={15} />
            
            <p className="text-sm text-red-600 animate-pulse font-medium">
              {visitorCount} pessoas estão visualizando essa oferta agora
            </p>
          </div>
          
          {/* Features */}
          <div className="grid gap-4 my-8">
            <RecipeCard 
              title="Receitas organizadas e simples" 
              description="Receitas fáceis de fazer, pra qualquer ocasião e sem ingredientes caros."
            />
            
            <RecipeCard 
              title="Sem mais dúvidas sobre o que preparar" 
              description="Você nunca mais vai ficar sem ideia do que fazer — e vai impressionar quem você ama."
            />
            
            <RecipeCard 
              title="Coleção completa testada e aprovada" 
              description="💡 São mais de 1600 receitas testadas e aprovadas, com foco em saúde e sabor."
            />
          </div>
          
          <div className="text-center my-6">
            <h3 className="text-xl font-bold mb-2">O que você vai receber:</h3>
            <ul className="text-left space-y-2 max-w-lg mx-auto">
              <li className="flex items-start gap-2">
                <ArrowRight className="text-green-600 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Acesso <span className="font-bold">vitalício</span> a todas as 1600 receitas</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-green-600 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Receitas organizadas por categorias para fácil acesso</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-green-600 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Acesso no computador, tablet e celular</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="text-green-600 h-5 w-5 mt-1 flex-shrink-0" />
                <span>Atualizações futuras <span className="font-bold">sem custo adicional</span></span>
              </li>
            </ul>
          </div>
          
          {/* Urgency elements */}
          <div className="bg-red-50 p-4 border border-red-200 rounded-lg text-center my-6">
            <p className="font-bold text-red-600 mb-1">⚠️ OFERTA ÚNICA! SÓ DISPONÍVEL AGORA.</p>
            <p className="text-sm text-gray-700">Se você sair da página, essa condição desaparece para sempre.</p>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="space-y-4">
          <ActionButton 
            variant="accept" 
            onClick={handleAccept} 
            className="animate-bounce"
          >
            ✅ SIM, QUERO TODAS AS RECEITAS AGORA
          </ActionButton>
          
          <ActionButton 
            variant="decline" 
            onClick={handleDecline}
          >
            ❌ Não, quero continuar sem acesso
          </ActionButton>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Acesso vitalício garantido por um valor simbólico!<br />
            Pagamento 100% seguro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
