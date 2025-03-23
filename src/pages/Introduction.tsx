
import { Sparkles } from 'lucide-react';

const Introduction = () => {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-b from-shakti-100/30 to-background dark:from-shakti-900/20 dark:to-background">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block py-1 px-3 bg-shakti-100 dark:bg-shakti-800/40 rounded-full text-xs font-medium tracking-wide text-shakti-700 dark:text-shakti-300 mb-4 animate-fade-in">
            INTRODUCTION
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold energy-text mb-6">Understanding Shaktham</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Explore the divine feminine energy at the heart of this ancient spiritual tradition.
          </p>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Shaktham, derived from the Sanskrit word "Shakti" meaning energy or power, is a spiritual tradition within Hinduism that focuses on the worship of the divine feminine energy as the supreme cosmic force. This divine energy, Shakti, is understood to be the active principle of reality that creates, sustains, and transforms the universe.
            </p>
            
            <div className="my-8 p-6 bg-shakti-100/50 dark:bg-shakti-800/20 rounded-lg border-l-4 border-shakti-500">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="text-shakti-500" size={24} />
                <h3 className="text-xl font-serif font-medium m-0">The Essence of Shakti</h3>
              </div>
              <p className="m-0">
                "The divine mother, Shakti, is the living force that animates the cosmos. She is the dynamic aspect of the absolute, the power that makes all manifestation possible."
              </p>
            </div>
            
            <h2>Historical Origins</h2>
            <p>
              The worship of the divine feminine has ancient roots in the Indian subcontinent, dating back to the Indus Valley Civilization (3300–1300 BCE). Archaeological findings suggest early forms of goddess worship existed long before the formal codification of Shaktham as a spiritual path.
            </p>
            <p>
              Over centuries, these primordial feminine worship traditions evolved and merged with Vedic and Tantric practices, eventually crystallizing into what we now recognize as Shaktham—a sophisticated system of philosophy, ritual, and spiritual practice.
            </p>
            
            <h2>Core Philosophical Principles</h2>
            <p>
              At the heart of Shaktham lies a non-dualistic understanding of reality. The divine feminine energy is not separate from consciousness (often represented as the masculine principle Shiva) but is its very expression. Some key philosophical tenets include:
            </p>
            <ul>
              <li><strong>Energy as Reality:</strong> The manifest universe is understood as the creative play of cosmic energy.</li>
              <li><strong>Immanence:</strong> The divine is not distant but permeates everything in existence.</li>
              <li><strong>Integration:</strong> Shaktham embraces both transcendence and material existence rather than rejecting either.</li>
              <li><strong>Experiential Knowledge:</strong> Direct experience of divine energy is prioritized over intellectual understanding.</li>
            </ul>
            
            <h2>Practices and Approaches</h2>
            <p>
              Shaktham encompasses a wide range of spiritual practices designed to awaken, channel, and harmonize with the divine energy. These include:
            </p>
            <ul>
              <li><strong>Mantra Recitation:</strong> Sacred sound formulas that resonate with specific aspects of cosmic energy.</li>
              <li><strong>Meditation:</strong> Techniques to perceive and merge with the subtle energy currents within and beyond the body.</li>
              <li><strong>Ritual Worship:</strong> Ceremonial practices that symbolically honor the divine feminine.</li>
              <li><strong>Kundalini Yoga:</strong> Methods to awaken the dormant spiritual energy at the base of the spine.</li>
              <li><strong>Tantric Practices:</strong> Advanced techniques that transform ordinary experiences into paths to spiritual realization.</li>
            </ul>
            
            <p>
              This introduction provides just a glimpse into the rich and profound tradition of Shaktham. As you explore further through our resources, you'll discover how this ancient wisdom offers transformative insights relevant to our modern lives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
