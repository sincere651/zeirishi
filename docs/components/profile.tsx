import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Globe, Clock, Users } from "lucide-react"

export function Profile() {
  return (
    <section id="profile" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              プロフィール
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">升本真実</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              26年間国税の職場で勤務し、中小法人から大規模法人まで、様々な業種の税務調査に携わった経験から、法人、個人のお客様の税務調査対応はもちろん、その対策や予防、節税対策まで万全のサポートをさせていただきます。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <MessageSquare className="h-10 w-10 text-primary shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">コミュニケーションを大切に</h3>
                  <p className="text-muted-foreground">
                    私は、お客様とのコミュニケーションを何より大切にしております。どんな些細な事柄でも構いませんのでお話ください。お客様の不安や疑問に迅速に対応し、安心して経営に注力いただけるようサポ−トさせていただきます。
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
                  <h3 className="text-xl font-bold mb-2">国際税務のスペシャリスト</h3>
                  <p className="text-muted-foreground">
                    国境を跨ぐ、個人の所得税、非居住者に関する税務及び租税条約の取扱いを得意としておりますので、お悩みのある方は是非ご相談ください。
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
                  <h3 className="text-xl font-bold mb-2">柔軟な対応</h3>
                  <p className="text-muted-foreground">
                    ご相談は、電話、メール、LINE、ZOOM、対面にて対応可能です。土日祝日も対応しております。お客様のご都合に合わせて、柔軟に対応いたします。
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
                  <h3 className="text-xl font-bold mb-2">安心のサポート</h3>
                  <p className="text-muted-foreground">
                    先日、お客様との打ち合わせの帰り際、「お話をして安心した。」というお言葉をいただき、改めて身が引き締まる思いになりました。お客様に安心していただけるよう、誠心誠意サポートいたします。
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

