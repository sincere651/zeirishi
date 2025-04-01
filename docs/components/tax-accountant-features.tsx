import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, UserCheck, Shield } from "lucide-react"

export function TaxAccountantFeatures() {
  return (
    <section id="accountant" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              税理士の選び方
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">税務調査に強い税理士の特徴</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              税務調査において、一般の納税者がプロである調査官と対等に渡り合うことは困難です。信頼できる税理士を選びましょう。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">効率的な対応</h3>
                  <p className="text-muted-foreground">
                    １円でも安く、１日でも早く調査を終わらせてくれる税理士を選びましょう。時間と費用の節約につながります。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <UserCheck className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">納税者の味方</h3>
                  <p className="text-muted-foreground">
                    納税者の代理人となって納税者の味方になってくれる税理士を選びましょう。あなたの利益を最優先に考えてくれる人が理想的です。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">豊富な経験</h3>
                  <p className="text-muted-foreground">
                    税法に通じ、実務経験が豊富な税理士を選びましょう。多くの税務調査に立ち会った経験があれば、様々な状況に対応できます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Shield className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">交渉力と責任感</h3>
                  <p className="text-muted-foreground">
                    説得力があり、交渉をうまく切り回せる税理士が理想的です。また、責任感が強く、最後まであなたをサポートしてくれる人を選びましょう。
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

