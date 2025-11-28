function Hero() {
  try {
    const [showMessage, setShowMessage] = React.useState(false);

    React.useEffect(() => {
      setTimeout(() => setShowMessage(true), 500);
    }, []);

    return (
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20" data-name="hero" data-file="components/Hero.js">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div className={`transition-all duration-1000 ${showMessage ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <div className="icon-crown text-6xl text-[var(--magenta)] mx-auto mb-4 animate-pulse-glow"></div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-bold text-gradient mb-6">
              Happy 18th
            </h1>
            
            <h2 className="text-5xl md:text-7xl font-bold text-[var(--dark-pink)] mb-8">
              Birthday, Peace! 🎉
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto">
            Happy Birthday My Love <br></br>
            Well, Today is the 9th of January 2026, and guess what?????????????. 
A quick answer, my girl just turned 18!! She’s finally legal. Who is she to me? Peace isn’t just a friend to me. She’s one of those people who walks into your life and makes it brighter jujst by being in it.One of those people who see you at your worst and says “I’m here for you!!, Everything is going to be fine”. One of the people i call when i’m going through something i wouldn’t want to tell anybody. So yeah peace isn’t just anybody to me. She’s my best friend. Peace is that one friend you can be around all day and never get bored of, she’s funny, extremely beautiful and smart. Peace is one of the persons i wanna insult people with, i want to fight people for, I want to laugh with , I want to read with and i want to be with. It’s crazy that i’ve only known her for a year now and she knows me so well, she always has a good guess about what im thinking about, always knows my crushes right before i figure out i have one , is always ready to take a walk with me when i’m feeling suffocated. ....I thank God always for bringing you into my life, for making us friends and for maintaining our friendship. My University Journey is wayyyyyyyyyyyyyy better with you in It.
I LOVE YOU GIRLLLLLL 
            
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap">
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce">
                <div className="icon-music text-2xl text-white"></div>
              </div>
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce" style={{animationDelay: '0.2s'}}>
                <div className="icon-cake text-2xl text-white"></div>
              </div>
              <div className="w-16 h-16 rounded-full gradient-pink flex items-center justify-center animate-bounce" style={{animationDelay: '0.4s'}}>
                <div className="icon-party-popper text-2xl text-white"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}