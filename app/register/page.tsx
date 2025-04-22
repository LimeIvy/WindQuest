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
const registerSchema = z.object({
  email: z.string()
    .email('有効なメールアドレスを入力してください')
    .min(1, 'メールアドレスは必須です'),
  password: z.string()
    .min(6, 'パスワードは6文字以上で入力してください'),
  confirmPassword: z.string()
    .min(1, 'パスワード（確認）は必須です')
}).refine(data => data.password === data.confirmPassword, {
  message: 'パスワードが一致しません',
  path: ['confirmPassword']
})

// フォームの型定義
type RegisterFormValues = z.infer<typeof registerSchema>

export default function Register() {
  const router = useRouter()
  const supabase = createClientComponentClient()
  
  // React Hook Formの設定
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
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
  
  // ユーザー情報をテーブルに保存する関数
  const saveUserData = async (userId: string, email: string) => {
    try {
      const username = email.split('@')[0]
      console.log('Saving user data:', { userId, username })
      
      const { error } = await supabase
        .from('users')
        .insert({
          id: userId,
          username: username,
          last_login: new Date().toISOString(),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
      
      if (error) {
        console.error('Error saving user data:', error)
        return false
      }
      
      return true
    } catch (err) {
      console.error('Failed to save user data:', err)
      return false
    }
  }
  
  // フォーム送信処理
  const onSubmit = async (values: RegisterFormValues) => {
    try {
      form.clearErrors()
      console.log('Starting registration with email:', values.email)
      
      // メール認証なしでサインアップ
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          // メール確認をスキップするためのオプション
          emailRedirectTo: `${window.location.origin}/dashboard`,
          data: {
            username: values.email.split('@')[0],
          }
        }
      })
      
      console.log('Signup response:', signUpData)
      
      if (signUpError) {
        console.error('Signup error:', signUpError)
        toast({
          title: '登録エラー',
          description: signUpError.message,
          variant: 'destructive',
        })
        return
      }
      
      if (!signUpData?.user) {
        console.error('No user data returned from signup')
        toast({
          title: '登録エラー',
          description: 'ユーザー情報の取得に失敗しました',
          variant: 'destructive',
        })
        return
      }
      
      // usersテーブルにデータを保存
      const userDataSaved = await saveUserData(signUpData.user.id, values.email)
      if (!userDataSaved) {
        console.warn('User data could not be saved, but registration succeeded')
      }
      
      toast({
        title: '登録成功',
        description: 'アカウントが作成されました。ダッシュボードに移動します。',
      })
      
      // 直接サインイン
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      })
      
      if (signInError) {
        console.error('SignIn error:', signInError)
        toast({
          title: 'ログインエラー',
          description: signInError.message,
          variant: 'destructive',
        })
        return
      }
      
      // ダッシュボードへリダイレクト
      router.push('/dashboard')
      
    } catch (err: any) {
      console.error('Registration error:', err)
      toast({
        title: 'エラー',
        description: '登録中に問題が発生しました: ' + (err.message || '不明なエラー'),
        variant: 'destructive',
      })
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-violet-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <GameLogo />
          <h2 className="mt-6 text-2xl font-bold text-white">新規アカウント登録</h2>
          <p className="mt-2 text-sm text-gray-300">
            冒険を始めるために新しいアカウントを作成
          </p>
        </div>
        
        <Card className="border-purple-600 bg-black/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl text-center text-white">アカウント作成</CardTitle>
            <CardDescription className="text-center text-gray-300">
              メールアドレスとパスワードで登録
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
                      <p className="text-xs text-gray-400">6文字以上のパスワードを設定してください</p>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">パスワード（確認）</FormLabel>
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
                  {form.formState.isSubmitting ? '登録中...' : 'アカウント作成'}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-gray-300">
              すでにアカウントをお持ちの場合は{' '}
              <Link href="/login" className="text-blue-400 hover:underline">
                ログイン
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