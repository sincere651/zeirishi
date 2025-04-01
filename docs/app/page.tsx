import { TaxAuditHero } from "@/components/tax-audit-hero"
import { FemaleTaxAccountantStrengths } from "@/components/female-tax-accountant-strengths"
import { TaxAuditExpertise } from "@/components/tax-audit-expertise"
import { SecondOpinion } from "@/components/second-opinion"
import { TaxAuditAnxiety } from "@/components/tax-audit-anxiety"
import { TaxAuditProfile } from "@/components/tax-audit-profile"
import { TaxAuditCTA } from "@/components/tax-audit-cta"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <TaxAuditHero />
        <FemaleTaxAccountantStrengths />
        <TaxAuditExpertise />
        <SecondOpinion />
        <TaxAuditAnxiety />
        <TaxAuditProfile />
        <TaxAuditCTA />
      </main>
      <SiteFooter />
    </div>
  )
}

