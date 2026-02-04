export default function EvictedReview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <a href="/calgirard.github.io" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8">
          <span>←</span>
          <span>Back to home</span>
        </a>

        <div className="mb-8">
          <span className="inline-block px-3 py-1 bg-yellow-800/50 text-yellow-300 text-xs font-semibold rounded-full mb-4">
            PULITZER PRIZE WINNER
          </span>
          <p className="text-emerald-400 font-mono text-sm mb-2">Book Review</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Evicted
          </h1>
          <p className="text-xl text-slate-300 mb-4">Poverty and Profit in the American City</p>
          <p className="text-slate-400">Matthew Desmond · 2016 · Crown</p>
        </div>

        {/* Opening Quote */}
        <blockquote className="border-l-4 border-red-500 pl-6 my-8 text-xl text-slate-300 italic">
          "Eviction is a cause, not just a condition, of poverty."
        </blockquote>

        {/* Review Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Hidden Housing Crisis</h2>
          
          <p className="text-slate-300 mb-6">
            Before Matthew Desmond, eviction was largely invisible in American public discourse. We talked about 
            homelessness. We talked about foreclosures during the 2008 crisis. But the routine displacement of 
            poor tenants—the process that feeds both—went unexamined. <em>Evicted</em> changed that forever.
          </p>

          <p className="text-slate-300 mb-6">
            Through a year of ethnographic fieldwork in Milwaukee—living in a trailer park and an inner-city 
            rooming house—Desmond documents the lives of eight families facing eviction and the landlords who 
            profit from their precarity. The result is both devastating and essential.
          </p>

          {/* Key Framework */}
          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">The Eviction Spiral</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">1.</span>
                <p className="text-slate-300">Eviction leads to worse housing in worse neighborhoods</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">2.</span>
                <p className="text-slate-300">Eviction record makes future housing harder to secure</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">3.</span>
                <p className="text-slate-300">Housing instability causes job loss, health problems, family separation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-400 font-bold">4.</span>
                <p className="text-slate-300">These problems increase likelihood of future eviction</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Sherrena and the Business of Poverty</h2>

          <p className="text-slate-300 mb-6">
            One of Desmond's most striking choices is his deep portrayal of Sherrena Tarver, a Black landlord 
            who profits from renting substandard housing to poor Black tenants. Sherrena isn't a villain in 
            any simple sense—she's a rational actor in an irrational system, one where owning property in 
            poor neighborhoods is one of the few paths to wealth available to people like her.
          </p>

          <blockquote className="border-l-4 border-red-500 pl-6 my-8 text-lg text-slate-300 italic">
            "I guess I got to stop feeling sorry for these people because nobody is feeling sorry for me. 
            Last time I checked, the mortgage company still wanted their money."
          </blockquote>

          <p className="text-slate-300 mb-6">
            This complexity is what makes <em>Evicted</em> more than poverty tourism. Desmond shows us a system 
            where individual actors—tenants, landlords, social workers—all operate according to their own logic, 
            and yet the system produces mass suffering with mathematical regularity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Gender of Eviction</h2>

          <p className="text-slate-300 mb-6">
            A crucial finding: eviction falls disproportionately on women with children, especially Black women. 
            In Milwaukee's poorest Black neighborhoods, 1 in 5 renting households was evicted annually. This is 
            not a peripheral fact—it's central to understanding how poverty reproduces itself.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Eviction by the Numbers</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-red-400 mb-2">1 in 5</p>
                <p className="text-slate-400">Black renting households in Milwaukee's poorest neighborhoods evicted annually</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-3xl font-bold text-red-400 mb-2">3×</p>
                <p className="text-slate-400">Women with children more likely to be evicted than women without</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connecting to the Canon</h2>

          <p className="text-slate-300 mb-6">
            <em>Evicted</em> is the foundation text for understanding how housing intersects with everything 
            else I've studied:
          </p>

          <p className="text-slate-300 mb-6">
            <strong>Administrative burden:</strong> The eviction process itself is a form of administrative 
            violence—court dates during work hours, paperwork requirements, the impossible logistics of 
            maintaining documentation while homeless. Desmond shows how the system's procedures become weapons.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>The poverty premium:</strong> Baradaran's concept from <em>How the Other Half Banks</em> 
            extends to housing. Poor tenants pay more per square foot, endure worse conditions, and have no 
            leverage to demand repairs—and eviction records lock them into this tier permanently.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>Fragmented democracy:</strong> Michener's framework helps explain why housing policy varies 
            so dramatically. Some cities have strong tenant protections; Milwaukee has virtually none. The 
            lottery of place determines whether you have rights.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Personal Takeaway</h2>

          <p className="text-slate-300 mb-6">
            Reading <em>Evicted</em> changed how I understand SNAP's limitations. Food assistance matters, but 
            it can't stabilize a family that's being evicted. Housing is the platform on which everything 
            else stands—job stability, school attendance, health maintenance, benefit enrollment.
          </p>

          <p className="text-slate-300 mb-6">
            Desmond's solution—a universal housing voucher program—would cost about $22 billion annually. 
            We spend more than that on the mortgage interest deduction, which primarily benefits the wealthy. 
            The money exists. The political will does not.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 text-lg text-slate-300">
            "Without stable shelter, everything else falls apart."
          </blockquote>

          {/* Citation */}
          <div className="bg-slate-800/30 rounded-xl p-6 mt-12 border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Citation</h3>
            <p className="text-slate-300 font-mono text-sm">
              Desmond, Matthew. <em>Evicted: Poverty and Profit in the American City</em>. 
              Crown, 2016. (Winner, 2017 Pulitzer Prize for General Nonfiction)
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
