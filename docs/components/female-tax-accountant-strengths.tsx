import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Heart, Users, Brain, Lightbulb } from "lucide-react"

export function FemaleTaxAccountantStrengths() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              女性税理士の強み
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              女性税理士だからこそ
              <br />
              提供できる価値
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              女性税理士ならではの視点と強みで、税務調査をスムーズに乗り切るサポートをいたします。
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 py-8">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">強い意志と信念</h3>
                  <p className="text-muted-foreground">
                    女性税理士は、税務調査の過程で直面する難題や圧力にも屈せず、強い意志と信念を持って納税者を守ります。事実に基づき、論理的に問題に取り組む姿勢が、クライアントに安心感を与えます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Heart className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">誠実さと責任感</h3>
                  <p className="text-muted-foreground">
                    女性税理士は、依頼者の利益を第一に考え、税務調査の進行中でも誠実に、責任感をもって対応します。調査結果に対しては、正直に向き合い、クライアントの立場をしっかりと理解して適切にアドバイスを行います。
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
                  <h3 className="text-xl font-bold mb-2">人間力と信頼感</h3>
                  <p className="text-muted-foreground">
                    女性税理士は、税務の専門知識に加えて、高い人間力を持ち合わせているため、納税者との信頼関係を築くのが得意です。クライアントと調査官双方に対して、丁寧で思いやりのある対応をすることで、対立を避けつつ円滑に問題解決を進めます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Brain className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">冷静な判断力と戦略的思考</h3>
                  <p className="text-muted-foreground">
                    女性税理士は、困難な状況でも冷静に分析し、戦略的に対応します。直面する課題に対しては、感情に流されることなく、的確な判断を下し、長期的な視点で最善策を講じます。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Lightbulb className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">適応力と柔軟な対応</h3>
                  <p className="text-muted-foreground">
                    状況に応じた柔軟な対応が得意で、どんなに厳しい税務調査であっても、冷静に迅速に最適な対応策を見つけ出します。その適応力と問題解決能力により、クライアントにとって最も効果的な結果を導きます。
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

