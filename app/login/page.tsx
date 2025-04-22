'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'
import { GameLogo } from '@/components/game-logo'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'

// Zodバリデーションスキーマの定義
const loginSchema = z.object({
  email: z.string()
    .email('有効なメールアドレスを入力してください')
    .min(1, 'メールアドレスは必須です'),
  password: z.string()
    .min(1, 'パスワードは必須です')
})

// フォームの型定義
type LoginFormValues = z.infer<typeof loginSchema>

export default function Login() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  
  // React Hook Formの設定
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })
  
  useEffect(() => {
    // ユーザーがすでにログインしているか確認
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) {
        router.push('/dashboard')
      }
    }
    checkSession()
  }, [supabase, router])
  
  // ログイン処理後にユーザーのlast_loginを更新
  const updateLastLogin = async (userId: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .update({ 
          last_login: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
      
      if (error) {
        console.error('Error updating last login:', error)
      }
    } catch (err) {
      console.error('Failed to update last login:', err)
    }
  }
  
  // フォーム送信処理
  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })
      
      if (error) {
        toast({
          title: 'ログインエラー',
          description: error.message,
          variant: 'destructive',
        })
        return
      }
      
      // ログイン情報の更新
      if (data?.user) {
        await updateLastLogin(data.user.id)
      }
      
      toast({
        title: 'ログイン成功',
        description: 'ダッシュボードに移動します',
      })
      
      router.push('/dashboard')
    } catch (err) {
      console.error('Login error:', err)
      toast({
        title: 'エラー',
        description: 'ログイン中に問題が発生しました',
        variant: 'destructive',
      })
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <GameLogo />
          <h2 className="mt-6 text-2xl font-bold text-white">アカウントにログイン</h2>
          <p className="mt-2 text-sm text-gray-300">
            冒険を続けるためにログインしてください
          </p>
        </div>
        
        <Card className="border-purple-600 bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-white">ログイン</CardTitle>
            <CardDescription className="text-center text-gray-300">
              メールアドレスとパスワードでログイン
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">メールアドレス</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">パスワード</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          className="bg-gray-800 border-gray-700 text-white"
                        />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? 'ログイン中...' : 'ログイン'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-300">
              アカウントをお持ちでない場合は{' '}
              <Link href="/register" className="text-blue-400 hover:underline">
                新規登録
              </Link>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-700 text-gray-300 hover:bg-gray-800"
              asChild
            >
              <Link href="/">トップページに戻る</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
} 