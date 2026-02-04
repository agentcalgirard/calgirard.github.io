export default function PlacelessReview() {
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
            Placeless
          </h1>
          <p className="text-xl text-slate-300 mb-4">Homelessness in the New Gilded Age</p>
          <p className="text-slate-400">Patrick Markee · 2024 · The New Press</p>
        </div>

        {/* Opening Quote */}
        <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-xl text-slate-300 italic">
          "Homelessness is not a social work problem, not a matter of personal pathology—it is 
          the tragic yet inevitable consequence of political choices."
        </blockquote>

        {/* Review Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Activist's Eye</h2>
          
          <p className="text-slate-300 mb-6">
            Patrick Markee spent over two decades as Deputy Executive Director of the Coalition for the Homeless 
            in New York City. <em>Placeless</em> is the book he wrote to explain what he witnessed: mass 
            homelessness not as anomaly but as policy outcome, not as personal failure but as structural choice.
          </p>

          <p className="text-slate-300 mb-6">
            Where Desmond gives us immersive ethnography and Elliott gives us intimate biography, Markee offers 
            something different: a wide-angle view that connects history, geography, economics, and policy. 
            He takes us on a tour of homelessness in New York—100,000 people sleeping in the shelter system 
            each night—through the places that reveal the system's true nature.
          </p>

          {/* Key Framework */}
          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Geography of Homelessness</h3>
            <div className="space-y-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-1">Armories</p>
                <p className="text-slate-400">Built to quarter militias that put down worker uprisings, now warehousing homeless families</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-1">The Riverside Park Tunnel</p>
                <p className="text-slate-400">Underground encampments beneath one of Manhattan's wealthiest neighborhoods</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-1">Bellevue Hospital</p>
                <p className="text-slate-400">Former psychiatric wing now sheltering hundreds of homeless men nightly</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-blue-400 font-semibold mb-1">Luxury Condo Parks</p>
                <p className="text-slate-400">Public spaces surrounded by wealth where police harass homeless street-dwellers</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Reagan Revolution's Casualties</h2>

          <p className="text-slate-300 mb-6">
            Markee's historical analysis is essential. He traces mass homelessness directly to the economic 
            shifts inaugurated in the Reagan era: the destruction of public housing, the withdrawal of federal 
            support for affordable housing construction, the attack on the social safety net, and the unleashing 
            of market forces in cities.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 my-8 text-lg text-slate-300 italic">
            "Some 100,000 people a night sleep in New York City's shelter system. This is not a failure 
            of the homeless—it is a failure of housing policy."
          </blockquote>

          <p className="text-slate-300 mb-6">
            This historical framing matters because it counters the dominant narrative. Homelessness isn't about 
            mental illness or addiction (though those contribute). It's about the absence of affordable housing 
            for people at the bottom of the income distribution—a political choice, not an inevitable outcome.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Against the Punitive Turn</h2>

          <p className="text-slate-300 mb-6">
            Markee writes at a moment when tabloids and politicians are using homelessness to "whip up fear"—demanding 
            sweeps, crackdowns, forced institutionalization. <em>Placeless</em> is partly a rebuttal: a reminder 
            that these punitive approaches have never worked and that the solution has always been housing.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Two Approaches to Homelessness</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4 border border-red-900/50">
                <p className="text-red-400 font-semibold mb-2">The Punitive Approach</p>
                <ul className="text-slate-400 space-y-1">
                  <li>• Sweeps and encampment clearances</li>
                  <li>• Forced institutionalization</li>
                  <li>• Criminalization of sleeping outside</li>
                  <li>• Focus on individual pathology</li>
                </ul>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4 border border-emerald-900/50">
                <p className="text-emerald-400 font-semibold mb-2">The Housing-First Approach</p>
                <ul className="text-slate-400 space-y-1">
                  <li>• Permanent supportive housing</li>
                  <li>• Rental assistance expansion</li>
                  <li>• Affordable housing construction</li>
                  <li>• Focus on structural causes</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connecting to the Canon</h2>

          <p className="text-slate-300 mb-6">
            <em>Placeless</em> provides the macro-level policy analysis that complements the micro-level 
            ethnographies in my reading list:
          </p>

          <p className="text-slate-300 mb-6">
            <strong>High modernist failure:</strong> Scott's <em>Seeing Like a State</em> illuminates why the 
            shelter system looks the way it does—designed for administrative legibility rather than human 
            flourishing. Armories and warehouses process people; they don't house them.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>The fiscalization trap:</strong> McCabe's framework explains why we subsidize homeownership 
            for the wealthy through tax expenditures while underfunding affordable housing. The hidden welfare 
            state flows upward.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>Neoliberal policy feedback:</strong> The dismantling of public housing created the crisis; 
            the crisis justifies further privatization and punitive measures. Michener's policy feedback loops 
            operate here with devastating effect.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Personal Takeaway</h2>

          <p className="text-slate-300 mb-6">
            What <em>Placeless</em> gave me was permission to think structurally about housing. It's not that 
            individual stories don't matter—they matter immensely, as Elliott and Desmond show. But Markee 
            demonstrates that we can't understand those stories without understanding the policy regime that 
            produced them.
          </p>

          <p className="text-slate-300 mb-6">
            The book's conclusion—that homelessness is entirely solvable—is both hopeful and damning. We know 
            what works. We simply choose not to do it.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 text-lg text-slate-300">
            "Placeless is a powerful and moving account of a social problem whose solution is entirely possible."
          </blockquote>

          {/* Citation */}
          <div className="bg-slate-800/30 rounded-xl p-6 mt-12 border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Citation</h3>
            <p className="text-slate-300 font-mono text-sm">
              Markee, Patrick. <em>Placeless: Homelessness in the New Gilded Age</em>. 
              The New Press, 2024.
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
