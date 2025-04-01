import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                税務調査のプロが<span className="text-primary">安心</span>をお届けします
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                26年間の国税勤務経験を活かし、税務調査対応から国際税務まで幅広くサポート。お客様の不安や疑問に迅速に対応し、安心して経営に注力いただけるようサポートいたします。
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="#contact">無料相談する</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#services">サービスを見る</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] lg:h-[500px]">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="税理士 升本真実"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

