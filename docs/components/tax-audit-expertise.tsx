import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Users, Globe } from "lucide-react"

export function TaxAuditExpertise() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              税務調査のプロフェッショナル
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              税務調査官の視点から
              <br />
              あなたを守ります
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              26年間の国税勤務経験を活かし、税務調査対応のプロとして最適なサポートを提供します。
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 py-8">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Search className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">税務調査対応</h3>
                  <p className="text-muted-foreground">
                    税務調査の事前準備から当日の立会い、事後対応まで一貫してサポート。調査官の視点から的確なアドバイスを提供します。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <FileText className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">事前対策</h3>
                  <p className="text-muted-foreground">
                    税務調査が入る前に、帳簿や書類の整理、問題点の洗い出しと対策を実施。調査官の目線で事前チェックを行います。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Users className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">セカンドオピニオン</h3>
                  <p className="text-muted-foreground">
                    現在の税理士とは別の視点から、税務調査対応についてのアドバイスを提供。より安全で最適な対応策を見つけます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Globe className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">国際税務</h3>
                  <p className="text-muted-foreground">
                    国境を跨ぐ取引、非居住者に関する税務、租税条約の適用など、複雑な国際税務にも精通。国税庁での経験を活かした専門的なサポートを提供します。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

