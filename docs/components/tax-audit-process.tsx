import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PhoneCall, FileText, Calendar, Users } from "lucide-react"

export function TaxAuditProcess() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              税務調査の流れ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">税務調査はこのように進みます</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              税務調査は一般的に以下のステップで進行します。各段階での適切な対応が重要です。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">事前通知</CardTitle>
              <PhoneCall className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                税務署から「調査に行きたい」と電話があります。日時、場所、調査の種類、理由、担当調査官の情報、調査予定日数、対象年度を確認しましょう。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">事前準備</CardTitle>
              <FileText className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                申告書、総勘定元帳、伝票、請求書、領収書、契約書、給与台帳など必要書類を整理します。税理士と打ち合わせを行い、リハーサルをしておくことが重要です。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">調査当日</CardTitle>
              <Calendar className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                調査官の身分証明書を確認し、調査目的を確認します。誠意を持って対応し、必要な説明を行います。会話の内容には十分注意しましょう。
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-bold">調査終了</CardTitle>
              <Users className="h-6 w-6 text-primary" />
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                指摘事項について検討し、修正申告か更正処分かを判断します。税理士のアドバイスを受けながら、最適な対応を選択しましょう。
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

