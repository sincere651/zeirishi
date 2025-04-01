import { Card, CardContent } from "@/components/ui/card"
import { Scale, FileSearch, FileCheck, BookOpen } from "lucide-react"

export function SecondOpinion() {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              セカンドオピニオン
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              税務調査における
              <br />
              セカンドオピニオン
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              税務調査結果や指摘事項に対して、第三者の視点で再評価し、納税者の権利を守るための専門的な助言を提供します。
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 py-8">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Scale className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">第三者の専門的意見</h3>
                  <p className="text-muted-foreground">
                    現在の税理士とは異なる視点から、税務調査の結果を客観的に評価します。国税庁での経験を活かした専門的な見解を提供し、納税者の立場を守ります。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <FileSearch className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">税務調査結果の再評価</h3>
                  <p className="text-muted-foreground">
                    税務調査の結果について、法令や判例に基づいて再評価します。調査官の見解が適切かどうかを検証し、不適切な指摘があれば反論の根拠を提示します。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <FileCheck className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">指摘事項への追加的な助言</h3>
                  <p className="text-muted-foreground">
                    税務調査で指摘された事項について、追加的な対応策や改善方法を提案します。将来的な税務リスクを軽減するための具体的なアドバイスを提供します。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <BookOpen className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">法令や判例に基づいた再確認</h3>
                  <p className="text-muted-foreground">
                    最新の税法や判例に基づいて、税務調査の結果を再確認します。税務当局の解釈が適切でない場合は、法的根拠を示して反論することで、納税者の権利を守ります。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
            <p className="text-lg font-medium">
              私たちは税務調査における誤りや過大評価を正し、納税者が不利益を被らないようサポートします。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

