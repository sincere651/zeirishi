import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              お問い合わせ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">お気軽にご相談ください</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              電話、メール、LINE、ZOOM、対面にて対応可能です。土日祝日も対応しております。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">会社情報</CardTitle>
              <CardDescription>シンシアタックスコンサルティング</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">所在地</p>
                  <p className="text-muted-foreground">〒105-0013</p>
                  <p className="text-muted-foreground">東京都港区浜松町2-7-17　イーグル浜松町559</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">電話番号</p>
                  <p className="text-muted-foreground">090-5402-8975</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">メールアドレス</p>
                  <p className="text-muted-foreground">sincerity981@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">営業時間</p>
                  <p className="text-muted-foreground">平日 9:00〜18:00</p>
                  <p className="text-muted-foreground">※土日祝日も対応可能です</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">無料相談のご予約</CardTitle>
              <CardDescription>初回相談は無料です。お気軽にご予約ください。</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>税務に関するお悩み相談</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>税務調査対応のアドバイス</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>国際税務に関するご相談</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>節税対策のご提案</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>経営に関するアドバイス</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="#">無料相談を予約する</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

