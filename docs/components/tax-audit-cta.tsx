import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Calendar } from "lucide-react"

export function TaxAuditCTA() {
  return (
    <section id="contact" className="w-full py-12 md:py-20 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            税務調査の不安を
            <br />
            今すぐ解消しませんか？
          </h2>
        </div>
        <div className="mx-auto max-w-3xl grid grid-cols-1 gap-4 py-8">
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">無料相談のご予約</CardTitle>
              <CardDescription>税務調査に関するお悩みを解決します</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>税務調査の事前対策</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>調査当日の立会い・対応</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>調査後のフォローアップ</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>国際税務に関するご相談</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">✓</span>
                  <span>セカンドオピニオン</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" size="lg">
                <Link href="#">無料相談を予約する</Link>
              </Button>
            </CardFooter>
          </Card>
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
        </div>
      </div>
    </section>
  )
}

