import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function IncompletePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900">
      <Card className="mx-auto max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">準備中のページ</CardTitle>
          <CardDescription>このセクションはまだ開発中です</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>注意</AlertTitle>
            <AlertDescription>
              このページはまだ完成していません。現在開発を進めている途中です。完成までしばしお待ちください。
            </AlertDescription>
          </Alert>

          <div className="flex justify-center pt-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                トップページに戻る
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
