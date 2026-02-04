export default function InvisibleChildReview() {
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
            Invisible Child
          </h1>
          <p className="text-xl text-slate-300 mb-4">Poverty, Survival & Hope in an American City</p>
          <p className="text-slate-400">Andrea Elliott · 2021 · Random House</p>
        </div>

        {/* Opening Quote */}
        <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-xl text-slate-300 italic">
          "What if leaving poverty means abandoning the family you love?"
        </blockquote>

        {/* Review Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Weight of Being Seen</h2>
          
          <p className="text-slate-300 mb-6">
            There are 1.38 million homeless schoolchildren in the United States. Andrea Elliott spent nearly a decade 
            following one of them—Dasani Coates—from her family's room in a decrepit Brooklyn shelter through eight 
            years of her life. The result is not just journalism; it's an act of witnessing that indicts an entire 
            system while celebrating the fierce humanity of a single remarkable girl.
          </p>

          <p className="text-slate-300 mb-6">
            Dasani is named for the bottled water that symbolizes both Brooklyn's gentrification and the aspirations 
            of a divided city. That symbolism runs throughout the book: the invisible children who exist in the shadows 
            of towers of wealth, seen but not seen, counted but not counted.
          </p>

          {/* Key Framework */}
          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">The Paradox of Visibility</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-purple-400 font-semibold mb-2">Visible to Systems</p>
                <p className="text-slate-400">Child welfare, shelter intake, school attendance tracking, benefit eligibility checks—constant surveillance and monitoring.</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <p className="text-purple-400 font-semibold mb-2">Invisible to Society</p>
                <p className="text-slate-400">Hidden homeless, "doubled up," not in official counts—the working poor rendered statistically invisible.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">A Child as System Navigator</h2>

          <p className="text-slate-300 mb-6">
            What struck me most was how Dasani, at age eleven, had already become her family's primary navigator of 
            bureaucratic systems. She knew which forms to fill out, which offices to visit, how to advocate for her 
            seven younger siblings. This is what Herd and Moynihan call <strong>administrative burden</strong> weaponized 
            against children—forcing them to develop competencies no child should need.
          </p>

          <blockquote className="border-l-4 border-purple-500 pl-6 my-8 text-lg text-slate-300 italic">
            "Dasani must lead her seven siblings through a thicket of problems: hunger, parental drug addiction, 
            violence, housing instability, segregated schools, and the constant monitoring of the child-protection system."
          </blockquote>

          <p className="text-slate-300 mb-6">
            The "constant monitoring" is key. Unlike the dignified treatment of Social Security recipients that 
            Herd and Moynihan document, families like Dasani's face a different administrative regime entirely—one 
            designed around suspicion rather than support.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Code-Switching Trap</h2>

          <p className="text-slate-300 mb-6">
            When Dasani receives the opportunity to attend a Pennsylvania boarding school at age thirteen, Elliott 
            documents something profound: the impossible choice between advancement and belonging. Dasani must learn 
            to "code switch" between two worlds, eventually feeling like a stranger in both.
          </p>

          <div className="bg-slate-800/50 rounded-xl p-6 my-8 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">The Mobility Paradox</h3>
            <p className="text-slate-400 mb-4">
              Individual escape routes from poverty often require severing the very bonds that provided resilience. 
              The system offers mobility only at the price of abandonment.
            </p>
            <div className="text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span className="text-slate-300">Boarding school means leaving siblings unprotected</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span className="text-slate-300">Academic success requires cultural transformation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-400">→</span>
                <span className="text-slate-300">Individual advancement doesn't solve structural problems</span>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Connecting to the Canon</h2>

          <p className="text-slate-300 mb-6">
            <em>Invisible Child</em> deepens my understanding of several themes from my research:
          </p>

          <p className="text-slate-300 mb-6">
            <strong>Administrative burden as child harm:</strong> The surveillance and paperwork burden documented 
            by Herd and Moynihan takes on new urgency when we see children bearing it. Dasani's administrative 
            competencies are a survival skill born of system failure.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>The lottery of place:</strong> Michener's concept from <em>Fragmented Democracy</em> gains 
            visceral meaning when we follow a family bounced between shelters, neighborhoods, and eventually states. 
            Where you're placed determines everything—school quality, safety, access to services.
          </p>

          <p className="text-slate-300 mb-6">
            <strong>Legibility and its costs:</strong> Scott's framework illuminates why homeless families are 
            simultaneously hypervisible to surveillance systems and invisible to statistics. The state sees what 
            it wants to see, counts what it chooses to count.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Personal Takeaway</h2>

          <p className="text-slate-300 mb-6">
            This book changed how I think about SNAP and other benefit programs. Dasani's family needed more than 
            food assistance—they needed the housing stability that would have prevented the cascade of crises. 
            But our fragmented system treats each need as separate, forcing families to navigate dozens of programs 
            with different rules, different offices, different forms.
          </p>

          <p className="text-slate-300 mb-6">
            Elliott quotes Matthew Desmond in her epigraph, and the kinship is clear: both authors understand that 
            poverty is not a condition but a relationship—between the poor and the systems that simultaneously 
            sustain and trap them.
          </p>

          <blockquote className="border-l-4 border-emerald-500 pl-6 my-8 text-lg text-slate-300">
            "Invisible Child tells an astonishing story about the power of resilience, the importance of family, 
            and the cost of inequality."
          </blockquote>

          {/* Citation */}
          <div className="bg-slate-800/30 rounded-xl p-6 mt-12 border border-slate-700">
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Citation</h3>
            <p className="text-slate-300 font-mono text-sm">
              Elliott, Andrea. <em>Invisible Child: Poverty, Survival & Hope in an American City</em>. 
              Random House, 2021.
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
