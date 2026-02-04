export default function ThereIsNoPlaceForUsReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <a href="/calgirard.github.io" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8">
          <span>←</span>
          <span>Back to home</span>
        </a>

        <div className="mb-8">
          <p className="text-emerald-400 font-mono text-sm mb-2">Book Review</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            There Is No Place for Us
          </h1>
          <p className="text-xl text-slate-300 mb-4">Working and Homeless in America</p>
          <p className="text-slate-400">Brian Goldstone · 2025 · Random House</p>
        </div>

        {/* Opening Quote */}
        <blockquote className="border-l-4 border-amber-500 pl-6 my-8 text-xl text-slate-300 italic">
          "These families are being forced into homelessness not by a failing economy but a thriving one."
        </blockquote>

        {/* Review Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Scandal of the Working Homeless</h2>
          
          <p className="text-slate-300 mb-6">
            In a country where hard work and determination are supposed to lead to success, there is something 
            scandalous about the phrase "working homeless." Brian Goldstone's landmark work exposes a new and 
            troubling trend: the dramatic rise of people with full-time jobs who still cannot afford a place 
            to live.
          </p>

          <p className="text-slate-300 mb-6">
            Through the stories of five Atlanta families, Goldstone shows us homelessness born not from joblessness 
            or addiction but from the collision of skyrocketing rents, stagnant wages, and the absence of tenant 
            protections. This is displacement by prosperity—the dark side of the urban revival narrative.
          </p>

          {/* Key Framework */}
          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">The Five Families</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-1">Maurice & Natalia</p>
                <p className="text-slate-400">Priced out of DC, seeking fresh start in the "Black Mecca"</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-1">Kara</p>
                <p className="text-slate-400">Dreams of her own cleaning business while mopping hospital floors</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-1">Britt</p>
                <p className="text-slate-400">Scores a coveted housing voucher—but the victory is fragile</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-1">Michelle</p>
                <p className="text-slate-400">Studying to become a social worker while housing-insecure herself</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-1">Celeste</p>
                <p className="text-slate-400">Working warehouse shifts while undergoing cancer treatment</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Hidden from the Count</h2>

          <p className="text-slate-300 mb-6">
            Goldstone's most important contribution may be his focus on the "hidden homeless"—families sleeping 
            in cars or squalid extended-stay hotels, heading to work and school the next morning. These people 
            are omitted from official statistics, invisible in ways that make their suffering easier to ignore.
          </p>

          <blockquote className="border-l-4 border-amber-500 pl-6 my-8 text-lg text-slate-300 italic">
            "Overflowing shelters and street encampments are only the most visible manifestation 
            of a far more pervasive problem."
          </blockquote>

          <p className="text-slate-300 mb-6">
            This connects directly to James Scott's concept of <strong>legibility</strong>. The state counts what 
            it chooses to count. A family in a shelter appears in statistics; a family in their car does not. 
            The same work hours, the same poverty, radically different visibility.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Atlanta's Gentrification Crucible</h2>

          <p className="text-slate-300 mb-6">
            Atlanta provides the perfect case study for Goldstone's argument. The city marketed itself as the 
            "Black Mecca"—a place of Black prosperity and opportunity. But the same economic dynamism that 
            drew families like Maurice and Natalia also priced them out.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">The Displacement Paradox</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-2">The Promise</p>
                <p className="text-slate-400">Urban revival, job growth, new amenities, rising property values, economic opportunity</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-amber-400 font-semibold mb-2">The Reality</p>
                <p className="text-slate-400">Displacement of long-term residents, rent spikes, loss of affordable housing stock, community destruction</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connecting to the Canon</h2>

          <p className="text-slate-300 mb-6">
            <em>There Is No Place for Us</em> stands in direct conversation with Matthew Desmond's <em>Evicted</em>. 
            Where Desmond showed eviction as both cause and consequence of poverty, Goldstone shows homelessness 
            coexisting with employment—a progression that reveals how much worse the housing crisis has become.
          </p>

          <p className="text-slate-300 mb-6">
            The book also resonates with Mehrsa Baradaran's concept of the <strong>two-tier financial system</strong>. 
            Just as there's a banking system for the wealthy and a predatory one for the poor, there's increasingly 
            a housing market for the wealthy and no market at all for the working poor.
          </p>

          <p className="text-slate-300 mb-6">
            And the <strong>administrative burden</strong> appears here too: housing voucher waitlists that stretch 
            for years, applications that require documentation impossible to maintain without stable housing, 
            landlords who refuse to accept vouchers despite legal requirements.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Personal Takeaway</h2>

          <p className="text-slate-300 mb-6">
            What Goldstone's reporting made visceral for me is the fragility of housing security even for people 
            doing "everything right." These aren't stories of bad decisions or moral failings. These are stories 
            of mathematics—of wages that haven't kept pace with rents, of a market failure that individual virtue 
            cannot solve.
          </p>

          <p className="text-slate-300 mb-6">
            The book's conclusion—that housing must be treated as a fundamental human right—follows inevitably 
            from its evidence. When work no longer guarantees shelter, the social contract has broken down.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 text-lg text-slate-300">
            "An exceptional feat of reporting, full of an immediacy that calls to mind Adrian Nicole LeBlanc's 
            Random Family and Matthew Desmond's Evicted."
            <footer className="text-slate-500 text-sm mt-2">— The New York Times Book Review</footer>
          </blockquote>

          {/* Citation */}
          <div className="bg-slate-800/30 rounded-xl p-6 mt-12 border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Citation</h3>
            <p className="text-slate-300 font-mono text-sm">
              Goldstone, Brian. <em>There Is No Place for Us: Working and Homeless in America</em>. 
              Random House, 2025.
            </p>
          </div>

          {/* Canon Link */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-sm mb-4">Part of my research into poverty policy and administrative systems.</p>
            <a href="/calgirard.github.io/reading/synthesis-1" className="text-emerald-400 hover:text-emerald-300 font-medium">
              Read my synthesis: The Architecture of Exclusion →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
