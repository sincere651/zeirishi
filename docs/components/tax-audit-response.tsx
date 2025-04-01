import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, MessageSquare, FileCheck, Scale } from "lucide-react"

export function TaxAuditResponse() {
  return (
    <section id="response" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              調査当日の対応
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">調査当日の適切な対応方法</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              調査当日は冷静に対応することが重要です。以下のポイントに注意しましょう。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">身分確認と目的確認</CardTitle>
              <AlertTriangle className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>調査官の身分証明書を必ず確認する</li>
                  <li>どんな用件で、何の調査なのかを確かめる</li>
                  <li>更正・決定の課税処分目的か、徴税目的か、犯則事件の資料収集目的かを確認</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">会話での注意点</CardTitle>
              <MessageSquare className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>調子に乗って、あることないことを話さない</li>
                  <li>同業他社の批判やうわさ話はしない</li>
                  <li>話はつじつまが合うようにする</li>
                  <li>あらかじめ決めていたシナリオから離脱しないように</li>
                  <li>女性調査官に注意（一般的に細かい調査をする）</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">調査方法の理解</CardTitle>
              <FileCheck className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>比較分析：前期と当期の比較、標準値との比較</li>
                  <li>証憑突合：帳簿と領収書などの証憑類の突き合わせ</li>
                  <li>計算突合：帳簿や明細表などの計算の正確性確認</li>
                  <li>帳簿突合：帳簿同士の突き合わせ</li>
                  <li>現場確認調査：実地棚卸、現場の状況確認</li>
                  <li>反面調査：取引先への照会</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">指摘事項への対応</CardTitle>
              <Scale className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                <ul className="list-disc pl-5 space-y-2 mt-2">
                  <li>次年度に税金が取り戻せない項目は指導事項にとどめてもらう</li>
                  <li>配偶者や家族に対する報酬など、継続的に課税対象になる項目に注意</li>
                  <li>翌期に計上されることになる項目は認めてもよい</li>
                  <li>修正申告と更正処分の違いを理解し、適切に判断する</li>
                </ul>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

