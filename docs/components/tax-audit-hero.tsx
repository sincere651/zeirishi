import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle } from "lucide-react"

export function TaxAuditHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col justify-center space-y-4 max-w-3xl mx-auto text-center">
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2 text-primary font-medium">
              <Shield className="h-5 w-5" />
              <span>26年間の国税勤務経験</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              <span className="text-primary">税務調査専門</span>の<br />
              税理士があなたを守ります
            </h1>
            <p className="text-muted-foreground md:text-xl max-w-[800px] mx-auto">
              税務調査官の視点から、あなたの会社を守るための最適な対策をご提案します。税務調査対応から国際税務まで幅広くサポート。
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>税務調査立会・対応</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>調査前の事前対策</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>セカンドオピニオン</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span>国際税務対応</span>
              </div>
            </div>
            <div className="flex justify-center">
              <Button size="lg">
                <Link href="#contact">無料相談する</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

